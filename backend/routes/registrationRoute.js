import express from "express";
const router = express.Router();

router.post("/", (req, res) => {
    res.send("Registration form route")
})

export default router;