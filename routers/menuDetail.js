const express = require("express");
const router = express.Router();
const { menuDetail, updateMenu } = require("../controllers/menuDetail");
const authMiddleware = require("../middlewares/authMiddleWare");
require("dotenv").config();

router.get("/menuDetail", authMiddleware, menuDetail);

router.patch("/menuDetail", updateMenu);
module.exports = router;
