import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    subTodo: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubTodo',
      }, //it is collection of Array
    ],
  },
  { timestamps: true }
);

export const TodoModel = mongoose.model('TodoModel', todoSchema);
