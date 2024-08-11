// import axios from "axios";

// async function getBase64Image(url) {
//   try {
//     // Fetch the image as a binary data stream
//     const response = await axios.get(url, {
//       responseType: "arraybuffer",
//     });

//     // Convert the binary data to a base64 string
//     const fileData = Buffer.from(response.data, "binary").toString("base64");

//     // Get the content type of the image
//     const fileFormat = response.headers["content-type"];

//     return { inlineData: { data: fileData, mimeType: fileFormat } }; // Return the base64 image data as object
//   } catch (error) {
//     console.error("Error fetching or converting the image:", error);
//     return null;
//   }
// }

// export default getBase64Image;