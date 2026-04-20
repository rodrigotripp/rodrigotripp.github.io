import mongoose, { Schema, Document, Model } from "mongoose";

export interface ISkillCategory extends Document {
  title: string;
  skills: string[];
  order: number;
}

const SkillCategorySchema = new Schema<ISkillCategory>(
  {
    title: { type: String, required: true },
    skills: [{ type: String, required: true }],
    order: { type: Number, default: 0 },
  },
  { timestamps: true },
);

SkillCategorySchema.index({ order: 1 });

const SkillCategory: Model<ISkillCategory> =
  mongoose.models.SkillCategory ||
  mongoose.model<ISkillCategory>("SkillCategory", SkillCategorySchema);

export default SkillCategory;
