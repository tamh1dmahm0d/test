import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("<h2>Hi There</h2>");
});

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`listen on port ${port}`));
