var express = require("express");
var router = express.Router();
var ticket = require("../models/Ticket");
const User = require("../models/User");

router.post("/", async (req, res) => {
  // let userId;
  // await User.findOne({ email: req.body.email }, (err, data) => {
  //   if (err) {
  //     console.log(err);
  //   }
  //   userId = data._id;
  // });
  // console.log(userId);
  let tickets;
  await ticket.find({ email: req.body.email }, (err, data) => {
    if (err) console.log(err);
    tickets = data;
  });
  res.send({ tickets });
});

router.post("/changeDestination", async (req, res) => {
  const filter = { _id: req.body.ticketId };
  const update = { destination: req.body.destination };
  await ticket.findOneAndUpdate(filter, update);
});

module.exports = router;
