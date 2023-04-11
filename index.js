const express = require("express");

const app = express();

app.use(express.json());

app.get("/test", async (req, res) => {
  res.send("Hello from test-api!");
});
app.get("/users", async (req, res) => {
  res.send("Hello from test-api!");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`index.js listening on http://localhost:${port}`);
});
