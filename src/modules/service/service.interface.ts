/* eslint-disable no-unused-vars */
import { Model, ObjectId, Types } from 'mongoose';

export type TService = {
  id: number; // A unique identifier for the service
  image: string[]; // Array of image URLs
  title: string; // Title of the service
  description: string; // Description of the service
  price: string; // Price of the service
  duration: number; // Duration of the service in minutes
  isDeleted?: boolean; // Flag indicating if the service is deleted
};

export interface ServiceModel extends Model<TService> {
  isServiceExistsByCustomId(id: Types.ObjectId): Promise<TService>;
}
