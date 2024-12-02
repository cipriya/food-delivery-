module.exports = (orders) => {
    const statuses = ["Preparing", "Out for Delivery", "Delivered"];
  
    orders.forEach((order) => {
      if (order.status !== "Delivered") {
        const currentIndex = statuses.indexOf(order.status);
        order.status = statuses[currentIndex + 1];
      }
    });
  };

  