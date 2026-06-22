const {model} = require("mongoose");

const {Orders} = require("../schemas/OrdersSchema")

const OrdersModel =  model("Order",Orders)

module.exports = {OrdersModel}