const { model } = require("mongoose");
const { PositionsSchema } = require("../schemas/PositionsSchema");

const PositionModel = model("Position", PositionsSchema);

module.exports = { PositionModel };