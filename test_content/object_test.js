import { extendObjectPrototype } from  '../content/object.js';
import { VolumeFormatStatus, VolumeFormat, VolumeData } from './test_data.js';

extendObjectPrototype();


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

console.warn("OBJECT UNDER TEST:")
console.log(JSON.stringify(volData, null, 3));

console.warn("\n\n\nTesting...");

console.warn("\n\nRECURRENT:");
console.log(JSON.stringify(volData.getStructureInfo(), null, 3));
console.warn("\n\nRECURRENT:");
console.log(JSON.stringify(volData.getStructureInfo(false, true), null, 3));
console.warn("\n\nRECURRENT + depth=0:");
console.log(JSON.stringify(volData.getStructureInfo(false, true, 0), null, 3));
console.warn("\n\nRECURRENT + depth=1:");
console.log(JSON.stringify(volData.getStructureInfo(false, true, 1), null, 3));
console.warn("\n\nRECURRENT + depth=2:");
console.log(JSON.stringify(volData.getStructureInfo(false, true, 2), null, 3));
