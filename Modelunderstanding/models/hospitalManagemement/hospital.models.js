import mongoose from 'mongoose';

const hospitalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      reuired: true,
      lowercase: true,
    },
    addressLine1: {
      type: String,
      reuiqred: true,
    },
    addressLine2: {
      type: String,
    },
    city: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
    specializeIn: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Hospital = mongoose.model('Hospital', hospitalSchema);
