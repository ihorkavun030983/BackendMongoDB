const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const UserModel = require("./models/Users.jsx");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/test");

app.get("/getUsers", (req, res) => {
  UserModel.find()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.post("/getUsers", (req, res) => {
  UserModel.create(req.body).then((users) => res.json(users));
});

app.put("/getUsers/:id", (req, res) => {
  UserModel.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
    UserModel.findOne({ _id: req.params.id }).then((users) => res.json(users));
  });
});

app.delete("/getUsers/:id", (req, res) => {
    UserModel.deleteOne({ _id: req.params.id }).then(users => {
        res.send(users)
    });
  });

app.listen(3001, () => {
  console.log("Server is running");
});
