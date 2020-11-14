const mongoose = require('mongoose');
const Certificates = mongoose.model('Certificates');

exports.list = async () => {
  const res = await Certificates.find({}, 'name created_at order');
  return res;
};

exports.page = async () => {
  const res = await Certificates
    .find({ deleted_at: { $exists: false } }, 'name created_at order')
    .sort([['created_at', -1]]);
  return res;
};

exports.details = async (id, callback) => {
  const res = await Certificates.findById(id, callback);
  return res;
}

exports.saving = async (data, callback) => {
  const query = { _id: data.id };
  const res = await Certificates.findOneAndUpdate(query, data, callback);
  return res;
}

exports.create = async data => {
  const certificates = new Certificates(data);
  await certificates.save();
};