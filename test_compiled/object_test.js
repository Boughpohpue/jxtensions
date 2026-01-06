import { extendObjectPrototype } from  '../compiled/jxtensions-1.0.1.js';
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

console.log("OBJECT UNDER TEST:")
console.log(volData);
console.log("\n\nRECURRENT:");
console.log(volData.getStructureInfo());
console.log("\n\nRECURRENT:");
console.log(volData.getStructureInfo(false, true));
console.log("\n\nRECURRENT + depth=0:");
console.log(volData.getStructureInfo(false, true, 0));
console.log("\n\nRECURRENT + depth=1:");
console.log(volData.getStructureInfo(false, true, 1));
console.log("\n\nRECURRENT + depth=2:");
console.log(volData.getStructureInfo(false, true, 2));
