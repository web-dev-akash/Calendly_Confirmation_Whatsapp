const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(express.text());
app.use(cors());
const PORT = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/", (req, res) => {
  try {
    let msg = req.body;
    msg = msg.split("\n");
    let phone = msg[12].substring(11, msg[12].length);
    phone = phone.replace(/\s/g, "");
    return res.status(200).send({
      phone,
    });
  } catch (error) {
    return res.status(500).send({ error });
  }
});

app.listen(PORT, () => {
  console.log("Server Started 🎈🎈");
});
