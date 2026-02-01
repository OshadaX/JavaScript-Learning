import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = 3000;

const server = http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    fs.readFile(path.join(__dirname, "App.jsx"), (err, data) => {
        if (err) {
            res.end("Error reading file");
            console.log(err);
        }
        res.end(data);
    });
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

