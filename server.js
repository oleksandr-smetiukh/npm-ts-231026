const express = require("express");
const path = require("path");
const basicAuth = require("express-basic-auth");

const app = express();
const PORT = process.env.PORT || 3000;

const authOptions = {
  users: {
    [process.env.REACT_APP_USER_NAME]: process.env.REACT_APP_PASSWORD,
  },
  challenge: true,
};

app
  .use(basicAuth(authOptions))
  .use(express.static(path.join(__dirname, "./build")))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./build/index.html"));
});
