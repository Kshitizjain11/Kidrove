import express from "express";
import { EnquiryModal } from "../model/registration.js";
import enquirySchema from "../schema/enquirySchema.js";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
      const result = enquirySchema.safeParse(req.body);

      if (!result.success) {
        return res.status(400).json({ success: false, errors: result.error.issues });
      }

      const { name, email, phone, childAge, workshopName } = result.data;
      const existingUser = await EnquiryModal.findOne({email})

      if(existingUser){
        return res.status(400).json({ success: false, message: "User already registered." });
      }

      const user = await EnquiryModal.create({ name, email, phone, childAge, workshopName });
      if(!user){
        return res.status(500).json({ success: false, message: "Something went wrong. Please try again." });
      }
      res.json({ success: true, message: "Registration successful. We'll contact you soon." });

    } catch (error) {
      console.error("Registration error:", error);
      res.status(500).json({ success: false, message: "Something went wrong. Please try again." });
    }
  });

export default router;