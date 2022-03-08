const { Router } = require("express");
const data = require("../data");

const router = Router();

router.get("/", async (req, res) => {
  const dataResponse = await data();
  res.send(dataResponse);
});

module.exports = router;
