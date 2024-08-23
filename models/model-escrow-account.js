const mongoose = require('mongoose');

const escrow_account_schema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  nama_pemilik_akun: {
    type: String,
    required: true,
  },
});
