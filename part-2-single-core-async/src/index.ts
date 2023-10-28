import express, { request } from "express";

const app = express()
const port = 3000

let requestNumber = 0;

app.get('/', (req, res) => {
  console.log(`starting request ${requestNumber}`)
  expensiveOperation();
  res.send('Hello World!')
})

async function expensiveOperation() {
  const startTime = new Date().getTime();
  await new Promise((resolve) => setTimeout(resolve, 1000))
  console.log(`Request ${requestNumber} Took total ${new Date().getTime() - startTime} ms`)
  requestNumber++;
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
