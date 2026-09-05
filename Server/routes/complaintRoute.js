const express = require("express");

const {
  createComplaint,
  getComplaints,
  getMyComplaints,
  getComplaintById,
  updateComplaintStatus,
} = require("../controllers/complaintController");

const {admin} = require("../middleware/adminMiddleware");

const { protect } = require("../middleware/authmiddleware");

const router = express.Router();

router.post("/", protect, createComplaint);

router.get("/", protect, getComplaints);

router.get("/my", protect, getMyComplaints);

router.get("/:id", protect, getComplaintById);

router.put("/:id/status", protect, admin, updateComplaintStatus);

module.exports = router;