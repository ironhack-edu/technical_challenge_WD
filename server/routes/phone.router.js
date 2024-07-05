import express from "express";
import Phone from "../models/phone.model.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allPhones = await Phone.find();
    res.json(allPhones);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.get("/:phoneId", async (req, res) => {
  try {
    const { phoneId } = req.params;
    const singlePhone = await Phone.findOne({ id: phoneId });
    res.json(singlePhone);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

export default router;
