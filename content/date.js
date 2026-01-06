export function extendDatePrototype() {
  Date.prototype.addSeconds = function (s) {
    this.setSeconds(this.getSeconds() + s);
    return this;
  };
  Date.prototype.addMinutes = function (m) {
    this.setMinutes(this.getMinutes() + m);
    return this;
  };
  Date.prototype.addHours = function (h) {
    this.setHours(this.getHours() + h);
    return this;
  };
  Date.prototype.addDays = function (d) {
    this.setHours(this.getHours() + (d * 24));
    return this;
  };
}

export default extendDatePrototype;
