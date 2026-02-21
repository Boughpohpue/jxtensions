# JXTENSIONS

A set of JavaScript prototype extensions for **Objects**, **Arrays**, and **Dates**.
These extensions provide convenient methods for inspecting, manipulating, and transforming data.

---

## Installation

```bash
# If using as a module
import extendPrototypes from 'your-library-path';

extendPrototypes(); // Extends Object, Array, and Date prototypes
```

---

## Object Prototype Extensions

### `isInstanceOf(c)`

Check if an object is an instance of a class (by name).

```js
obj.isInstanceOf(MyClass); // true or false
```

---

### `resolveProperty(path)`

Resolve a nested property by string path (dot notation).

```js
obj.resolveProperty('format.status.name');
```

---

### `getPaths(prefix = "")`

Get all paths of properties in an object recursively.
Arrays are represented as `[]`.

```js
obj.getPaths(); 
// Example: ['id', 'format.status.name', 'tracks[]']
```

---

### `getStructureInfo(skipEmpty = false, recurrent = false, depthLimit = 0)`

Return an object describing the structure and types of the object, optionally recurring into nested objects and arrays.

```js
obj.getStructureInfo(true, true, 2);
```

* `skipEmpty`: Skip `null` or `undefined` values
* `recurrent`: Recursively analyze nested objects/arrays
* `depthLimit`: Max recursion depth (0 = unlimited)

---

## Array Prototype Extensions

### Basic Getters

* `isEmpty` – `true` if array has no elements
* `first` – First element or `null` if empty
* `last` – Last element or `null` if empty
* `random` – Random element or `undefined` if empty
* `randomItem` – Random `{ index, value }` or `undefined` if empty

---

### Type Inspection

* `itemsTypes` – Array of types for each element
* `hasNullItem` – `true` if array contains `null`
* `hasArrayItem` – `true` if array contains an array
* `hasObjectItem` – `true` if array contains an object
* `findArrayItem()` – Returns first array element
* `findObjectItem()` – Returns first object element

---

### Insertion / Deduplication

* `putnique(x)` – Adds element only if not already present (for primitives)
* `putniqueByKey(x, key)` – Adds object only if no existing object has same `key`
* `put(x)` – Insert element in sorted order (descending)
* `putByKey(item, compareKey)` – Insert object in sorted order by key
* `putOrMerge(item, keyKey, valueKey)` – Merge value if key exists, otherwise insert

---

### Miscellaneous

* `shuffle(times = 1)` – Shuffle array elements, repeat `times` times

---

## Date Prototype Extensions

### Addition Methods (Immutable by default)

* `addSeconds(s, mutate = false)` – Add seconds
* `addMinutes(m, mutate = false)` – Add minutes
* `addHours(h, mutate = false)` – Add hours
* `addDays(d, mutate = false)` – Add days
* `addMonths(m, mutate = false)` – Add months
* `addYears(y, mutate = false)` – Add years

> `mutate = true` modifies the original Date object; otherwise a new Date is returned.

---

### Utility Methods

* `clone()` – Returns a new Date object with the same time
* `format()` – Returns ISO string (`toISOString()`)

---

## Usage Example

```js
extendPrototypes();

const arr = [1, 2, 3];
console.log(arr.last);           // 3
arr.putnique(2);
console.log(arr);                // [1, 2, 3]

const d = new Date('2026-02-21T10:00:00Z');
const newDate = d.addDays(2);
console.log(newDate.format());   // 2026-02-23T10:00:00.000Z
```

---

## Demo tests

Follow links below and see **JXTENSIONS** demo tests:

*  **Object**:  https://boughpohpue.github.io/jxtensions/tests/compiled/object_test.html
*  **Array**:  https://boughpohpue.github.io/jxtensions/tests/compiled/array_test.html
*  **Date**:  https://boughpohpue.github.io/jxtensions/tests/compiled/date_test.html

---
