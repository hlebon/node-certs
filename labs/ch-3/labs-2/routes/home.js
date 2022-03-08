const { Router } = require("express");

const router = Router();

router.get("/", (_, res) => {
  res.send({ hello: "world" });
});

module.exports = router;
