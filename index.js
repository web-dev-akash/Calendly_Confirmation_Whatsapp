const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(express.text());
app.use(cors());
const PORT = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({
    message: "Server Started Calendly",
  });
});

app.post("/", (req, res) => {
  try {
    let phone = req.body;
    phone = phone.substring(1, phone.length);
    const newPhone = phone.replace(/\s/g, "");
    // console.log(newPhone);
    return res.status(200).send({
      phone: newPhone,
    });
  } catch (error) {
    return res.status(500).send({ error });
  }
});

app.listen(PORT, () => {
  console.log("Server Started 🎈🎈");
});
