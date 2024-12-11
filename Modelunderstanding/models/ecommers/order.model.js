import mongoose from 'mongoose';

const orderItemsList = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'product',
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    orderPrice: {
      type: Number,
      required: true,
    },
    orderItems: [orderItemsList],

    status: {
      type: String,
      enum: ['Pending', 'Cancelled', 'Delivered'],
      default: 'Pending',
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model('Order', orderSchema);
