const crypto = require('crypto');

const generate_signature = (SECRET_KEY, PUBLIC_KEY) => {
  const identifiers = `${SECRET_KEY}${PUBLIC_KEY}`;
  return crypto.createHmac('sha256', SECRET_KEY).update(identifiers).digest('hex');
};

const verify_signature = (response_signature, expected_signature) => {
  return response_signature === expected_signature ? true : false;
};

module.exports = { generate_signature, verify_signature };
