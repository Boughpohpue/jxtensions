import { extendObjectPrototype } from  '../../compiled/jxtensions-1.0.1.js';
import { VolumeFormatStatus, VolumeFormat, VolumeData, codeStyleMap } from '../data/object_data.js';

const resultStyleMap = new Map([["breaklines", true]]);


console.warn("\n\nTest object:\n");

const volData = new VolumeData(
  "0101-12B5",
  new Date("2025-08-12T08:30:00Z"),
  new VolumeFormat(1, "CD", new VolumeFormatStatus(1, "Mint")),
  128,
  18,
  [
    null,
    undefined,
    new VolumeFormat(2, "Vinyl", new VolumeFormatStatus(2, "Near mint")),
    new VolumeFormat(3, "Cassette", new VolumeFormatStatus(4, "Poor")),
  ],
  null
);
console.log("const volData = new VolumeData(...);", codeStyleMap);
console.log(volData, resultStyleMap);


console.info("\n\n\nStarting test...");

console.warn("\n\nEXTENDING OBJECT PROTOTYPE:\n");
extendObjectPrototype();
console.log("extendObjectPrototype();", codeStyleMap);

console.warn("\n\nRECURRENT:\n");
const recurrent = volData.getStructureInfo();
console.log("const recurrent = volData.getStructureInfo();", codeStyleMap);
console.log(recurrent, resultStyleMap);

console.warn("\n\nRECURRENT:\n");
const recurrent2 = volData.getStructureInfo(false, true);
console.log("const recurrent2 = volData.getStructureInfo(false, true);", codeStyleMap);
console.log(recurrent2, resultStyleMap);

console.warn("\n\nRECURRENT + depth=0:\n");
const depth0 = volData.getStructureInfo(false, true, 0);
console.log("const depth0 = volData.getStructureInfo(false, true, 0);", codeStyleMap);
console.log(depth0, resultStyleMap);

console.warn("\n\nRECURRENT + depth=1:\n");
const depth1 = volData.getStructureInfo(false, true, 1);
console.log("const depth1 = volData.getStructureInfo(false, true, 1);", codeStyleMap);
console.log(depth1, resultStyleMap);

console.warn("\n\nRECURRENT + depth=2:\n");
const depth2 = volData.getStructureInfo(false, true, 2);
console.log("const depth2 = volData.getStructureInfo(false, true, 2);", codeStyleMap);
console.log(depth2, resultStyleMap);


console.info("\n\nTest complete!");
