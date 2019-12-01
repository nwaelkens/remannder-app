import User from ~/models/user.js

export default class Foto {
  name = null;
  url = null;
  date = null;
  comment = null;
  user = User;

  /**
   * Object constructor
   * Used to assign values to object
   * @param data
   */
  constructor(data = {}) {
    Object.assign(this, data);
  }
}
