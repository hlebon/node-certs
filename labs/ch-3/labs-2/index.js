const http = require("http");
const express = require("express");
const homeRouter = require("./routes/home");
const createHttpError = require("http-errors");

const PORT = 3000;

const app = express();

app.use("/", homeRouter);
app.use((req, res, next) => {
  if (req.method === "POST") {
    next(createHttpError(405));
  }
  next(createHttpError(404));
});
app.use((err, req, res, next) => {
  res.status(err.status);
  res.send(err.message);
});

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`sever running on PORT: ${PORT}`);
});
