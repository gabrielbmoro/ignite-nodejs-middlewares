const { UUIDv4 } = require("uuid-v4-validator");

class ValidateUUIDv4 {
  isValid(uuidV4) {
    return UUIDv4.validate(uuidV4);
  }
}

module.exports = new ValidateUUIDv4();
