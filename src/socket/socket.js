import { Server } from "socket.io";
import http from "http";
import express from "express";

import { generateResponse } from "../services/geminiAPI.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { FRONTEND_URL } from "../config/config.js";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: FRONTEND_URL,
    methods: ["GET", "POST"],
  },
});

// Socket.io connection
io.on("connection", (socket) => {
  //console.log("User Connected", socket.id);

  // Handle the "generate" event
  socket.on("generate", async (session) => {
    // Log the prompt
    // console.log("Prompt:", session.prompt);

    // Initialize the response
    let response = "";
    try {
      // Emit a response to the client
      socket.emit("generateRes", "Generating...");

      // Generate a response
      const result = await generateResponse(session);

      // Stream the response to the client
      for await (const chunk of result.stream) {
        const chunkText = chunk.text();
        //console.log(chunkText);

        response += chunkText;
        // Emit the response to the client
        socket.emit("generateRes", chunkText);
      }
      // Emit the end of the response to the client
      socket.emit("response", response);
    } catch (error) {
      // Emit the response to the client
      socket.emit("response", response);

      // Log the error
      console.error("Error handling request:", error);
      socket.emit("error", error.message);
    }
  });

  // Handle the "upload" event
  socket.on("upload", async (origin) => {
    socket.emit("uploadRes", { uploading: true, success: false });

    const localFilePath = `./public/uploads/${origin}`;

    const cloudinaryResult = await uploadOnCloudinary(localFilePath);
    if (cloudinaryResult) {
      let format = `${cloudinaryResult.resource_type}/${cloudinaryResult.format}`;
      let url = cloudinaryResult.secure_url;
      let origin = `${cloudinaryResult.original_filename}.${cloudinaryResult.format}`;

      socket.emit("uploadRes", { format, url, origin, success: true });
    } else {
      socket.emit("error", "Failed to upload file");
      socket.emit("uploadRes", { success: false });
    }
  });

  // Handle the "disconnect" event
  socket.on("disconnect", () => {
    //console.log("User Disconnected", socket.id);
  });
});

export { app, server, io };
