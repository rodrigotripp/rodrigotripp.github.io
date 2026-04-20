import mongoose, { Schema, Document, Model } from "mongoose";

export interface IExperience extends Document {
  title: string;
  company: string;
  date: string;
  duties?: string[];
  technologies?: string[];
  order: number;
}

const ExperienceSchema = new Schema<IExperience>(
  {
    title: { type: String, required: true },
    company: { type: String, required: true },
    date: { type: String, required: true },
    duties: [{ type: String }],
    technologies: [{ type: String }],
    order: { type: Number, default: 0 },
  },
  { timestamps: true },
);

ExperienceSchema.index({ order: 1 });

const Experience: Model<IExperience> =
  mongoose.models.Experience ||
  mongoose.model<IExperience>("Experience", ExperienceSchema);

export default Experience;
