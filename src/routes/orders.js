const express = require("express");

module.exports = (menu, orders) => {
  const router = express.Router();

 
  router.post("/", (req, res) => {
    const { items } = req.body;

    
    if (!items || !items.every((id) => menu.find((item) => item.id === id))) {
      return res.status(400).json({ error: "Invalid item IDs in order" });
    }

    const orderId = `order-${orders.length + 1}`;
    orders.push({
      orderId,
      items: items.map((id) => menu.find((item) => item.id === id)),
      status: "Preparing",
    });

    res.status(201).json({ orderId, status: "Preparing" });
  });

  
  router.get("/:id", (req, res) => {
    const order = orders.find((o) => o.orderId === req.params.id);
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
    res.json(order);
  });

  return router;
};
