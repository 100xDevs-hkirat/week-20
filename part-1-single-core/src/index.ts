import express, { request } from "express";

const app = express()
const port = 3000

let requestNumber = 0;

app.get('/', (req, res) => {
  console.log(`starting request ${requestNumber}`)
  expensiveOperation();
  res.send('Hello World!')
})

function expensiveOperation() {
  const startTime = new Date().getTime();
  let ctr = 0;
  for (let i = 0; i < 1000000000; i++) {
    ctr++;
  }
  console.log(`Request ${requestNumber} Took total ${new Date().getTime() - startTime} ms`)
  requestNumber++;
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
