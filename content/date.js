export function extendDatePrototype() {
  Date.prototype.addSeconds = function (s, mutate = false) {
    if (mutate) {
      this.setSeconds(this.getSeconds() + s);
      return this;
    } else {
      return new Date(this.getTime() + s * 1000);
    }
  };
  Date.prototype.addMinutes = function (m, mutate = false) {
    return this.addSeconds(m * 60, mutate);
  };
  Date.prototype.addHours = function (h, mutate = false) {
    return this.addMinutes(h * 60, mutate);
  };
  Date.prototype.addDays = function (d, mutate = false) {
    return this.addHours(d * 24, mutate);
  };
  Date.prototype.addMonths = function(m, mutate = false) {
    const newDate = mutate ? this : new Date(this);
    newDate.setMonth(newDate.getMonth() + m);
    return newDate;
  };
  Date.prototype.addYears = function(y, mutate = false) {
    const newDate = mutate ? this : new Date(this);
    newDate.setFullYear(newDate.getFullYear() + y);
    return newDate;
  };
  Date.prototype.clone = function() {
    return new Date(this.getTime());
  };
  Date.prototype.format = function() {
    return this.toISOString();
  };
}
export default extendDatePrototype;
