var express = require("express");
var router = express.Router();
var ticket = require("../models/Ticket");
const User = require("../models/User");

// router.get('/', (req, res) => {
//     bus.find({ companyName, startCity, totalseats, availableseats }, (err, result) => {
//         if (err) res.send(err)
//         else res.json({ result })
//     })
// })
router.get("/", (req, res) => {
  console.log("hi");
});
router.post("/", async (req, res) => {
  let user = await User.findOne({ email: req.body.email }, (err, res) => {
    if (err) console.log(err);
    return res;
  });
  if (!user) {
    console.log("user with email not found");
    return;
  }
  ticket.create(
    {
      userId: user._id,
      startStation: req.body.startStation,
      destination: req.body.destination,
      price: req.body.price,
    },
    (err, res) => {
      if (err) console.log(err);
    }
  );
});

// router.post("/", (req, res) => {
//   bus.findOne({ _id: req.body.bId }, (err, bus) => {
//     if (err) {
//       res.json({ status: false, message: "error while searching with ID" });
//     } else res.json({ bus });
//   });
// });

// router.post('/', (req, res) => {
//     let newBus = new bus(req.body)
//     newBus.save((err, bus) => {
//         if (err) console.log(err)
//         else res.status(201).json(bus)
//     })
// })

module.exports = router;
