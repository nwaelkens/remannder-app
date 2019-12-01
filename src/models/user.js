export default class User {
  name = null;
  avatar_url = null;

  /**
   * Object constructor
   * Used to assign values to object
   * @param data
   */
  constructor(data = {}) {
    Object.assign(this, data);
  }
}
