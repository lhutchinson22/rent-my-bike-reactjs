const router = require("express").Router();
const {
  newUser,
  getOne,
  getOneByEmail,
  updateOne,
  deleteOne,
} = require("../controllers/userController");

router.post("/", newUser);
router.get("/:id", getOne);
router.get("/email/:email", getOneByEmail);
router.put("/:id", updateOne);
router.delete("/:id", deleteOne);

module.exports = router;
