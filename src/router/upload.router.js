import express from "express";
import upload from "../middleware/multer.middleware.js";

const uploadRouter = express.Router();

uploadRouter.post("/uploadFile", upload.single("file"), async (req, res) => {
  try {
    const localFilePath = req.file.path;
    res.json({ origin: req.file.filename });
  } catch (err) {
    res.status(400).send(err.message);
  }
});

export default uploadRouter;
