// models/categoryModel.js
const mongoose = require('mongoose');

const categorySequenceSchema = new mongoose.Schema({
  sequence_value: { type: Number, default: 1 },
});

const CategorySequence = mongoose.model('CategorySequence', categorySequenceSchema);

const categorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: true,
    unique: true
  },
  categoryImage: {
    type: String,
    required: true,
  },
  categoryId: {
    type: Number,
    unique: true,
  },
});

categorySchema.pre('save', async function(next) {
  if (!this.isNew) return next();

  try {
    const sequenceDoc = await CategorySequence.findOneAndUpdate({}, { $inc: { sequence_value: 1 } }, { new: true, upsert: true });
    this.categoryId = sequenceDoc.sequence_value;
    next();
  } catch (err) {
    next(err);
  }
});

module.exports = mongoose.model('Category', categorySchema);
