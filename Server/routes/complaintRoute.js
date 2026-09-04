const express = require("express");

const {
  createComplaint,
  getComplaints,
  getMyComplaints,
} = require("../controllers/complaintController");

const { protect } = require("../middleware/authmiddleware");

const router = express.Router();

router.post("/", protect, createComplaint);

router.get("/", protect, getComplaints);

router.get("/my", protect, getMyComplaints);

module.exports = router;