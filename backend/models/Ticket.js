const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TicketSchema = new Schema(
  {
    userId: {
      type: String,
    },
    startStation: {
      type: String,
    },
    destination: {
      type: String,
    },
    price: {
      type: String,
    },
  },
  { collection: "tickets" }
);

const ticket = mongoose.model("ticket", TicketSchema);

module.exports = ticket;
