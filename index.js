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
    message: "Server Started Successfully",
  });
});

app.post("/", (req, res) => {
  try {
    let msg = req.body;
    msg = msg.split("\n");
    const [foundPhone] = msg.filter((val) => val.includes("Phone No"));
    console.log(foundPhone);
    let phone = foundPhone.substring(11, foundPhone.length);
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
