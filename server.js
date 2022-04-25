const http = require("http");
const fs = require("fs");
const os = require("os");

const port = process.env.PORT || 3000;

// create a server
const server = http.createServer((req, res) => {
  // route
  if (req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    fs.readFile("./pages/index.html", null, function (error, data) {
      if (error) {
        response.writeHead(404);
        respone.write("Whoops! File not found!");
      } else {
        res.write(data);
      }
      res.end();
    });
  } else if (req.url === "/about") {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    fs.readFile("./pages/about.html", null, function (error, data) {
      if (error) {
        response.writeHead(404);
        respone.write("Whoops! File not found!");
      } else {
        res.write(data);
      }
      res.end();
    });
  } else if (req.url === "/sys") {
    const obj = {
      hostname: os.hostname(),
      platform: os.platform(),
      architecture: os.arch(),
      numberOfCPUS: os.cpus(),
      networkInterfaces: os.networkInterfaces(),
      uptime: os.uptime(),
    };

    fs.writeFile("osinfo.json", JSON.stringify(obj), function (err) {
      if (err) throw err;
      res.writeHead(201, {
        "Content-Type": "text/plain ",
      });
      res.end("Your OS info has been saved successfully!");
    });
  } else {
    res.writeHead(404, {
      "Content-Type": "text/html",
    });
    fs.readFile("./pages/404.html", null, function (error, data) {
      if (error) {
        response.writeHead(404);
        respone.write("Whoops! File not found!");
      } else {
        res.write(data);
      }
      res.end();
    });
  }
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
