const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

router.get("/", (req, res) => {
  burger.all((data) => {
    const hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});
router.post("/api/burgers", (req, res) => {
  burger.create({ burger_name: req.body.name, devoured: req.body.devoured }, (result) => {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

// using put to replace the value of sleepy for a
// specific cat resource
router.put("/api/burgers/:id/devoured", (req, res) => {
  const condition = { id: req.params.id };
  const update = { sdevoured: req.body.value };

  burger.update(update, condition, (result) => {
    if (result.affectedRows === 0) {
      // If no rows were affected, then the ID must not exist, so 404
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

router.delete("/api/burgers/:id", (req, res) => {
  const condition = { id: req.params.id };

  burger.delete(condition, (result) => {
    if (result.affectedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } 
    res.status(200).end();
  });
});

module.exports = router;