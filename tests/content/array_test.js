import { extendArrayPrototype } from  '../../content/array.js';
import { codeStyleMap, codeNoBrLnStyleMap, resultStyleMap } from '../data/test_styles.js';


console.info("\n\n\nStarting test...");

console.warn("\n\nEXTENDING ARRAY PROTOTYPE:\n");
extendArrayPrototype();
console.log("extendArrayPrototype();", codeStyleMap);

console.warn("\n\nBASIC GETTERS:\n");
const emptyArr = [];
console.log("const emptyArr = [];", codeStyleMap);
const numbers = [5, 3, 9, 1];
console.log("const numbers = %O;", numbers, codeNoBrLnStyleMap);
console.log("\nemptyArr.isEmpty;", codeStyleMap);
console.log(emptyArr.isEmpty, resultStyleMap);
console.log("\nnumbers.isEmpty;", codeStyleMap);
console.log(numbers.isEmpty, resultStyleMap);
console.log("\nnumbers.first;", codeStyleMap);
console.log(numbers.first, resultStyleMap);
console.log("\nnumbers.last;", codeStyleMap);
console.log(numbers.last, resultStyleMap);
console.log("\nnumbers.random;", codeStyleMap);
console.log(numbers.random, resultStyleMap);
console.log("\nnumbers.randomItem;", codeStyleMap);
console.log(numbers.randomItem, resultStyleMap);

console.warn("\n\nTYPE INSPECTION:\n");
const mixed = [null, 42, "hello", { a: 1 }, [1, 2]];
console.log("const mixed = %O;", mixed, codeNoBrLnStyleMap);
console.log("\nmixed.itemsTypes;", codeStyleMap);
console.log(mixed.itemsTypes, resultStyleMap);
console.log("\nmixed.hasNullItem;", codeStyleMap);
console.log(mixed.hasNullItem, resultStyleMap);
console.log("\nmixed.hasArrayItem;", codeStyleMap);
console.log(mixed.hasArrayItem, resultStyleMap);
console.log("\nmixed.hasObjectItem;", codeStyleMap);
console.log(mixed.hasObjectItem, resultStyleMap);
console.log("\nmixed.findArrayItem();", codeStyleMap);
console.log(mixed.findArrayItem());
console.log("\nmixed.findObjectItem();", codeStyleMap);
console.log(mixed.findObjectItem());

console.warn("\n\nPUT (SORTED INSERT):\n");
const sorted = [
  { score: 100 },
  { score: 80 },
  { score: 60 }
];
console.log("const sorted = %O;", sorted, codeStyleMap);
sorted.put({ score: 90 }, "score");
console.log("\nsorted.put({ score: 90 }, 'score');", codeStyleMap);
console.log(sorted, resultStyleMap);

console.warn("\n\nPUT BY KEY (SORTED DESC):\n");
const players = [
  { name: "Alice", score: 100 },
  { name: "Bob", score: 80 },
  { name: "Carol", score: 60 }
];
console.log("const players = %O;", players, codeStyleMap);
players.putByKey({ name: "Dan", score: 90 }, "score");
console.log("\nplayers.putByKey({ name: 'Dan', score: 90 }, 'score');", codeStyleMap);
console.log(players, resultStyleMap);

console.warn("\n\nPUTNIQUE (PRIMITIVE):\n");
const nums = [1, 2, 3, 2];
console.log("const nums = %O;", nums, codeNoBrLnStyleMap);
nums.putnique(2);
console.log("\nnums.putnique(2);", codeStyleMap);
console.log(nums);
nums.putnique(4);
console.log("\nnums.putnique(4);", codeStyleMap);
console.log(nums);

console.warn("\n\nPUTNIQUE BY KEY (OBJECT):\n");
const items = [
  { id: 1, value: 10 },
  { id: 2, value: 20 }
];
console.log("const items = %O;", items, codeStyleMap);
items.putniqueByKey({ id: 2, value: 30 }, "id");
console.log("\nitems.putniqueByKey({ id: 2, value: 30 }, 'id');", codeStyleMap);
console.log(items, resultStyleMap);
items.putniqueByKey({ id: 3, value: 12 }, "id");
console.log("\nitems.putniqueByKey({ id: 2, value: 30 }, 'id');", codeStyleMap);
console.log(items, resultStyleMap);

console.warn("\n\nPUT OR MERGE:\n");
const mergeArr = [
  { key: "A", amount: 5 },
  { key: "B", amount: 10 }
];
console.log("const mergeArr = %O;", mergeArr, codeStyleMap);
mergeArr.putOrMerge({ key: "B", amount: 30 }, "key", "amount");
console.log("\nmergeArr.putOrMerge({ key: 'B', amount: 30 }, 'key', 'amount');", codeStyleMap);
console.log(mergeArr, resultStyleMap);
mergeArr.putOrMerge({ key: "C", amount: 15 }, "key", "amount");
console.log("\nmergeArr.putOrMerge({ key: 'C', amount: 15 }, 'key', 'amount');", codeStyleMap);
console.log(mergeArr, resultStyleMap);

console.warn("\n\nSHUFFLE:\n");
const shuffleArr = [1, 2, 3, 4, 5];
console.log("const shuffleArr = %O;", shuffleArr, codeNoBrLnStyleMap);
shuffleArr.shuffle(2);
console.log("\nshuffleArr.shuffle(2);", codeStyleMap);
console.log(shuffleArr);


console.info("\n\nTest complete!");
