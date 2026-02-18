# IoT Socket.IO Lab Starter

This project is a starter app for an in-class IoT lab using Node.js, Express, and Socket.IO.

## Prerequisites

Install Node.js (version 18 or newer):

1. Go to [https://nodejs.org](https://nodejs.org).
2. Download and install the **LTS** version for your operating system.
3. Verify installation in a terminal:

```bash
node -v
npm -v
```

## Local Setup

1. Clone the repository:

```bash
git clone https://github.com/trbll/iot-sio-starting.git
```

2. Move into the project folder:

```bash
cd iot-sio-starting
```

3. Install dependencies:

```bash
npm install
```

4. Start the server:

```bash
npm start
```

5. Open your browser and visit:

[http://localhost:3000](http://localhost:3000)

The app uses `process.env.PORT` when deployed and falls back to port `3000` locally.

## Project Structure

- `server.js`: Express server and HTTP server setup.
- `public/index.html`: Frontend HTML page.
- `public/style.css`: Frontend styles.
- `public/script.js`: Frontend JavaScript for lab logic.

## Render Deployment Commands

For a Render Web Service:

- Build Command: `npm install`
- Start Command: `npm start`
