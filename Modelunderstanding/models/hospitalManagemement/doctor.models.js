import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      lowercase: true,
    },
    salary: {
      type: Number,
      reuqired: true,
      default: 0,
    },
    qualificationIn: {
      type: String,
      required: true,
    },
    worksInHospital: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hospital',
    },
    experienceInYears: {
      type: Number,
      deafult: 0,
    },
  },
  { timestamps: true }
);

export const Doctor = mongoose.model('Doctor', doctorSchema);
