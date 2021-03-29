const router = require("express").Router();
const {
  getAll,
  getOneById,
  postOne,
  getOne,
  getByColor,
  getByZip,
  getByPrice,
  getByWheels,
  updateOne,
  deleteOne,
} = require("../controllers/bikeController");

router.get("/", getAll);
router.get("/:id", getOne);
router.get("/id/:id", getOneById);
router.get("/color/:id", getByColor);
router.get("/zip/:id", getByZip);
router.get("/price/:maxPrice", getByPrice);
router.get("/wheels/:id", getByWheels);
router.post("/", postOne);
router.put("/:id", updateOne);
router.delete("/:id", deleteOne);

module.exports = router;
