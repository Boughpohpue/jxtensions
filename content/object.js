export function extendObjectPrototype() {
  Object.prototype.isIstanceOf = function (c) {
    return c.name === this.constructor.name;
  };
  Object.prototype.getPropertyNames = function () {
    let keys = [];
    for (let prop in this) {
      keys.push(prop);
    }
    return keys;
  };
  Object.getObjectPropertyNames = function () {
    let keys = [];
    for (let prop in this.prototype) {
      keys.push(prop);
    }
    return keys;
  };
  Object.prototype.getStaticPropertyNames = function () {
    let keys = [];
    for (let prop in this.constructor) {
      keys.push(prop);
    }
    return keys;
  };
  Object.getStaticPropertyNames = function () {
    let keys = [];
    for (let prop in this) {
      keys.push(prop);
    }
    return keys;
  };
  Object.getStaticInstanceNames = function () {
    let keys = [];
    for (let prop in this) {
      keys.push(prop);
    }
    return keys;
  };
  Object.prototype.resolveProperty = function (path) {
    return path.split(".").reduce((acc, key) => (acc != null ? acc[key] : undefined), this);
  };
  Object.prototype.getPaths = function (prefix = "") {
    return Object.entries(this).flatMap(([key, value]) => {
      const path = prefix ? `${prefix}.${key}` : key;
      if (Array.isArray(value)) {
        const firstElem = value.findObjectElement();
        return firstElem === undefined ? `${path}[]` : firstElem.getPaths(`${path}[]`);
      }
      return !value || typeof value !== "object" ? path : value.getPaths(path);
    });
  };
  Object.prototype.getStructureInfo = function (skipEmpty = false, recurrent = false, depthLimit = 0, _depth = 0) {
    if (Array.isArray(this)) {
      if (this.length === 0) return "Array<empty>";

      let firstElem = this.find((e) => e !== null && e !== undefined); // this.findObjectItem();
      if (firstElem === null || firstElem === undefined) {
        return "Array<?>";
      } else if (typeof firstElem === "object") {
        const elemType = firstElem.getStructureInfo(skipEmpty, recurrent, depthLimit, _depth + 1);
        return Array.isArray(elemType) || typeof elemType === "object" ? [elemType] : `Array<${elemType}>`;
      } else {
        return `Array<${typeof firstElem}>`;
      }
    }

    const className = this.constructor?.name || "Object";
    if (className === "Date") return "Date";

    const result = { __className: className };
    if (className !== "Object") {
      result["__archetype"] = this.constructor;
    }

    const canGoDeeper = recurrent && (depthLimit === 0 || _depth < depthLimit);

    for (const [key, value] of Object.entries(this)) {
      if (skipEmpty && (value === null || value === undefined)) continue;

      if (Array.isArray(value)) {
        if (value.length === 0) {
          result[key] = "Array<empty>";
        } else {
          let firstElem = value.find((e) => e !== null && e !== undefined);
          if (firstElem === null) {
            result[key] = "null";
          } else if (typeof firstElem === "object") {
            const firstType = firstElem.getStructureInfo(skipEmpty, canGoDeeper, depthLimit, _depth + 1);
            result[key] = `Array<${typeof firstType === "string" ? firstType : firstType.__className || "Object"}>`;
          } else {
            result[key] = `Array<${typeof firstElem}>`;
          }
        }
      } else if (value === null) {
        result[key] = "null";
      } else if (typeof value === "object") {
        if (canGoDeeper) {
          result[key] = value.getStructureInfo(skipEmpty, recurrent, depthLimit, _depth + 1);
        } else {
          result[key] = value.constructor?.name || "Object";
        }
      } else {
        result[key] = typeof value;
      }
    }

    return result;
  };
}

export default extendObjectPrototype;
