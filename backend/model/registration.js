import mongoose from 'mongoose'

const enquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    unique: true
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
  },
  childAge: {
    type: Number,
    required: [true, 'Child age is required'],
    min: [8, 'Minimum age is 8'],
    max: [14, 'Maximum age is 14']
  },
  workshopName: {
    type: String,
    default: 'AI & Robotics Summer Workshop'
  }
}, {
  timestamps: true
})

export const EnquiryModal = mongoose.model('Enquiry', enquirySchema)

