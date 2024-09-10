// models/productModel.js
const mongoose = require('mongoose');

const productSequenceSchema = new mongoose.Schema({
  sequence_value: { type: Number, default: 1 },
});

const ProductSequence = mongoose.model('ProductSequence', productSequenceSchema);

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    unique: true,
  },
  productId: {
    type: Number,
    unique: true,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  },
  categoryName:{
    type: String,
  },
  productImage:{
    type: String,
  },
  price: {
    type: Number,
  },
  manufacturerName: {
    type: String,
  },
  manufacturerContact:{
    type:String,
  },
  qty: {
    type:Number,
  },
  soldQty: {
    type:Number,
  },
  descOne:{
    type:String,
  },
  descTwo:{
    type:String,
  },
  descThree:{
    type:String,
  },

});

productSchema.pre('save', async function(next) {
  if (!this.isNew) return next();

  try {
    const sequenceDoc = await ProductSequence.findOneAndUpdate({}, { $inc: { sequence_value: 1 } }, { new: true, upsert: true });
    this.productId = sequenceDoc.sequence_value;
    next();
  } catch (err) {
    next(err);
  }
});

module.exports = mongoose.model('Product', productSchema);
