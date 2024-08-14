# Synapse Backend

Welcome to the backend repository of **Synapse**, a personalized AI tutor designed to provide high-quality educational support to students. This document outlines how to set up, run, and contribute to the backend of Synapse.

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Deployment](#deployment)
- [Contributing](#contributing)

## Overview

The Synapse Backend serves as the core engine that powers the AI tutoring capabilities of the Synapse application. It handles user session and file management, communication with the Google Gemini API, and other essential backend services.

## Tech Stack

- **Node.js**: Runtime environment for executing JavaScript on the server.
- **Express.js**: Web framework for building the API.
- **Socket.IO**: Real-time communication between the frontend and backend.
- **Google Gemini API**: Used to power the AI-based tutoring services.
- **Cloudinary**: For storing files on another server.

## Installation

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js** (v14.x or higher)
- **npm** (v6.x or higher)
- **Firebase CLI** (for Firebase services)

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/riteshgharat/synapse-backend.git
   cd synapse-backend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the necessary environment variables. Refer to the [Configuration](#configuration) section for details.

## Configuration

The backend relies on several environment variables for configuration. Below is a sample `.env` file:

```env
# FRONTEND URL
FRONTEND_URL=http://localhost:5173

# GEMINI API KEY
GEMINI_API_KEY=your-gemini-api-key

# CLOUDINARY API CONFIG
CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret
```

## Running the Application

### Development

To run the application in development mode:

```bash
npm run dev
```

The server will start on the port specified in your `.env` file, typically `http://localhost:3000`.

### Production

To run the application in production mode:

```bash
npm run start
```

## Deployment

To deploy the backend, follow these general steps:

1. **Set up a production environment** (e.g., on AWS, Heroku, etc.).
2. **Configure environment variables** according to your deployment setup.
3. **Deploy the codebase** using your preferred CI/CD pipeline.

Detailed deployment instructions will vary depending on your chosen platform.

## Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository.**
2. **Create a new branch** (`feature/your-feature`).
3. **Commit your changes.**
4. **Push to the branch**.
5. **Open a Pull Request**.

Ensure your code follows our coding standards and is properly tested.