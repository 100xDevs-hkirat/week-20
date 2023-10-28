import cluster from "cluster";
import os from "os";
import { app } from "./express-app";

const port = 3000;

const cpuCount = os.cpus().length;

if (cluster.isMaster) {
  // Create a worker for each CPU
  for (let i = 0; i < cpuCount; i++) {
    cluster.fork();
  }
} else {
  app.listen(port, () => {
    console.log("listening on port 3000");
  });
}

