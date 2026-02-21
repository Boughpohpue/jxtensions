export function extendArrayPrototype() {
  Object.defineProperty(Array.prototype, "isEmpty", {
    get: function () {
      return this.length === 0;
    }
  });
  Object.defineProperty(Array.prototype, "first", {
    get: function () {
      return this.length === 0 ? null : this[0];
    }
  });
  Object.defineProperty(Array.prototype, "last", {
    get: function () {
      return this.length === 0 ? null : this[this.length - 1];
    }
  });
  Object.defineProperty(Array.prototype, "random", {
    get: function () {
      if (this.length === 0) return undefined;
      return this[Math.floor(Math.random() * this.length)];
    }
  });
  Object.defineProperty(Array.prototype, "randomItem", {
    get: function () {
      if (this.length === 0) return undefined;
      let i = Math.floor(Math.random() * this.length);
      return { index: i, value: this[i] };
    }
  });
  Object.defineProperty(Array.prototype, "itemsTypes", {
    get: function () {
      return this.map((e) => (e === null ? "null" : typeof e));
    }
  });
  Object.defineProperty(Array.prototype, "hasNullItem", {
    get: function () {
      return this.some((e) => e === null);
    }
  });
  Object.defineProperty(Array.prototype, "hasArrayItem", {
    get: function () {
      return this.some((e) => Array.isArray(e));
    }
  });
  Object.defineProperty(Array.prototype, "hasObjectItem", {
    get: function () {
      return this.some((e) => !!e && typeof e === "object");
    }
  });
  Array.prototype.findArrayItem = function () {
    return this.find((e) => Array.isArray(e));
  };
  Array.prototype.findObjectItem = function () {
    return this.find((e) => !!e && typeof e === "object");
  };
  Array.prototype.putnique = function (x) {
    if (this.isEmpty && this.last == x) {
      return;
    }
    if (this.includes(x)) {
      this.splice(this.indexOf(x), 1);
    }
    this.push(x);
  };
  Array.prototype.putniqueByKey = function (x, key) {
    if (!this.some((i) => i[key] == x[key])) {
      this.push(x);
    } else if (this.last[key] == x[key]) {
      this.pop();
      this.push(x);
    } else {
      this.splice(this.indexOf(this.find((i) => i[key] == x[key])), 1);
      this.push(x);
    }
  };
  Array.prototype.put = function (x) {
    if (this.isEmpty || this.last > x) {
      this.push(x);
    } else if (this.first < x) {
      this.reverse();
      this.push(x);
      this.reverse();
    } else {
      let temp = [];
      while (this.last < x) {
        temp.push(this.pop());
      }
      this.push(x, ...temp.reverse());
    }
  };
  Array.prototype.putByKey = function (item, compareKey) {
    if (this.isEmpty || this.last[compareKey] > item[compareKey]) {
      this.push(item);
    } else if (this.first[compareKey] < item[compareKey]) {
      this.reverse();
      this.push(item);
      this.reverse();
    } else {
      let temp = [];
      while (this.last[compareKey] < item[compareKey]) {
        temp.push(this.pop());
      }
      this.push(item, ...temp.reverse());
    }
  };
  Array.prototype.putOrMerge = function (item, keyKey, valueKey) {
    if (this.isEmpty) {
      this.push(item);
    } else if (!this.some((i) => i[keyKey] == item[keyKey])) {
      this.put(item, valueKey);
    } else {
      let itm = this.splice(this.indexOf(this.find((i) => i[keyKey] == item[keyKey])), 1).first;
      item[valueKey] += itm[valueKey];
      this.put(item, valueKey);
    }
  };
  Array.prototype.shuffle = function (times = 1) {
    if (this.isEmpty || this.length == 1) {
      return;
    }
    let temp = [];
    while (!this.isEmpty) {
      temp.push(this.pop());
    }
    for (let i = 0; i < times; i++) {
      let tmp = [];
      while (!temp.isEmpty) {
        let idx = Math.floor(Math.random() * temp.length);
        tmp.push(temp.splice(idx, 1).first);
      }
      temp = [...tmp];
    }
    while (!temp.isEmpty) {
      this.push(temp.pop());
    }
  };
}

export default extendArrayPrototype;
