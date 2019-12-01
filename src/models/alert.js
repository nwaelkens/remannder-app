import User from ~/models/user.js

export default class Alert {
  type = null;
  content = null;
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
