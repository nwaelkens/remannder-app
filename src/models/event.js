import User from ~/models/user.js

export default class Event {
  name = null;
  date = null;
  time = null;
  transport = null;
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
