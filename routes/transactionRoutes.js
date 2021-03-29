const router = require("express").Router();

const { newTransaction, getAllByID, getOwned, getRented } = require("../controllers/transaction");

router.post("/", newTransaction);

router.get("/:id", getAllByID);

router.get("/owned/:id", getOwned);

router.get("/rented/:id", getRented)

module.exports = router;