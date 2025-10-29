const express = require("express");
const router = express.Router();
const { getLeaderboard } = require("../controllers/leaderboardController");
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/", authMiddleware, getLeaderboard);

module.exports = router;
