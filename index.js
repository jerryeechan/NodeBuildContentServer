// Import the necessary modules
const http = require("http");
const { exec } = require("child_process");
const httpServer = require("http-server");

//params

const content_folder_path = process.argv[2];
const install_bash_path = process.argv[3];
console.log("content_folder_path: ", content_folder_path);
console.log("install_bash_path: ", install_bash_path);

// Create an instance of the http-server to serve static files
const staticServer = httpServer.createServer({
  root: content_folder_path, // Change this to the folder where your static files are located
  cors: true, // Enable CORS if needed
});

// Start the static file server on a separate port (e.g., 8080)
staticServer.listen(8087, () => {
  console.log("Static file server running at http://localhost:8087");
});

// Create a custom HTTP server to handle requests and run bash scripts
const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/install_xbox") {
    // Optional: collect request body data if needed
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString(); // Convert Buffer to string
    });

    req.on("end", () => {
      // Trigger the bash file execution
      exec(install_bash_path, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error executing bash script: ${error.message}`);
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end(`Error: ${error.message}`);
          return;
        }

        if (stderr) {
          console.error(`Bash script stderr: ${stderr}`);
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end(`Error: ${stderr}`);
          return;
        }

        // Output from the bash script
        console.log(`Bash script output: ${stdout}`);

        // Send a success response
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(`Success: ${stdout}`);
      });
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

// Specify the port for your custom HTTP server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Script execution server running at http://localhost:${PORT}`);
});
