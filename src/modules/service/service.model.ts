import { Schema, model } from 'mongoose';
import { ServiceModel, TService } from './service.interface';

const serviceSchema = new Schema<TService, ServiceModel>(
  {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    image: {
      type: [String],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

serviceSchema.statics.isServiceExistsByCustomId = async (id: string) => {
  return await Service.findById(id);
};

export const Service = model<TService, ServiceModel>('Service', serviceSchema);
