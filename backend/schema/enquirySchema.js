import z from "zod";

const enquirySchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.email("Invalid email address"),
    phone: z.string().length(10, "Phone number must be 10 digits"),
    childAge: z.number().min(8, "Child age is required").max(14, "Child age must be less than 14"),
    workshopName: z.string().default("AI & Robotics Summer Workshop")
})

export default enquirySchema