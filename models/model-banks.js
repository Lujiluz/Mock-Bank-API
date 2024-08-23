const mongoose = require('mongoose');

const bank_terdaftar_schema = new mongoose.Schema({
  bank_name: {
    type: String,
    required: [true, 'Nama Bank wajib diisi!'],
  },
  bank_logo: {
    type: String,
    required: [true, 'Logo Bank wajib diisi!'],
  },
  bank_initial: {
    type: String,
    required: [true, 'Bank Initial wajib diisi! (merupakan nama singkatan bank dengan huruf kecil)'],
  },
  prefix: {
    type: String,
    required: [true, 'Prefix VA Bank wajib diisi'],
  },
});

module.exports = mongoose.model('bank', bank_terdaftar_schema);
