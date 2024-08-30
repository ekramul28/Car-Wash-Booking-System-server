import mongoose from "mongoose";

interface IProduct extends Document {
  title: string;
  price: number;
  // other fields as needed
}

export interface ICart extends Document {
  product: IProduct | mongoose.Types.ObjectId;
  productQuantity: number;
  email: string;
  // other fields as needed
}
