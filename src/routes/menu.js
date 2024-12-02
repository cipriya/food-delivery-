const express = require("express");

module.exports = (menu) => {
  const router = express.Router();

  
  router.post("/", (req, res) => {
    const { name, price, category } = req.body;
    if (!name || typeof price !== "number" || price <= 0 || !category) {
      return res.status(400).json({ error: "Invalid menu item details" });
    }
    const id = menu.length + 1;
    menu.push({ id, name, price, category });
    res.status(201).json({ message: "Menu item added", id });
  });

  
  router.get("/", (req, res) => {
    res.json(menu);
  });

  return router;
};
