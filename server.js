import cors from "cors";
import { app, server } from "./src/socket/socket.js";
import { FRONTEND_URL } from "./src/config/config.js";
import uploadRouter from "./src/router/upload.router.js";

const port = process.env.PORT || 3000;

// Enable CORS for specific origin
const corsOptions = {
  origin: FRONTEND_URL, // Allow only this origin
  methods: "GET,POST,DELETE", // Specify allowed methods
  credentials: true, // Allow cookies and authentication headers
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Synapse API");
});

app.use(uploadRouter);

server.listen(port, () => console.log("Server is running on port ", port));
