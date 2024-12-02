const express = require("express");
const cron = require("node-cron");

const menuRoutes = require("./routes/menu");
const orderRoutes = require("./routes/orders");
const updateOrderStatus = require("./utils/statusUpdater");

const app = express();
app.use(express.json());


const menu = [];
const orders = [];


app.use("/menu", menuRoutes(menu));
app.use("/orders", orderRoutes(menu, orders));


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


cron.schedule("* * * * *", () => {
  updateOrderStatus(orders);
});
