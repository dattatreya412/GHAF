import mongoose from "mongoose";

const volunteerSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    description: String,
  },
  { timestamps: true }
);

// ✅ Prevent model overwrite error
export default mongoose.models.Volunteer ||
  mongoose.model("Volunteer", volunteerSchema);
