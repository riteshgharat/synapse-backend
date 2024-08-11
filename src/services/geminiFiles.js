import { GoogleAIFileManager } from "@google/generative-ai/files";
import { GEMINI_API_KEY } from "../config/config.js";

const fileManager = new GoogleAIFileManager(GEMINI_API_KEY);

export async function uploadToGemini(path, mimeType) {
  const uploadResult = await fileManager.uploadFile(path, {
    mimeType,
    displayName: path,
  });
  const file = uploadResult.file;
  
  return file;
}