import { extendObjectPrototype } from  '../../content/object.js';
import { VolumeFormatStatus, VolumeFormat, VolumeData } from '../data/object_data.js';
import { codeStyleMap, codeNoBrLnStyleMap, resultStyleMap } from '../data/test_styles.js';


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

console.warn("\n\nCHECKING 'isInstanceOf' METHOD:\n");
const isInstanceOfVolumeFormat = volData.isInstanceOf(VolumeFormat);
console.log("const isInstanceOfVolumeFormat = volData.isInstanceOf(VolumeFormat);", codeStyleMap);
console.log(isInstanceOfVolumeFormat, resultStyleMap);
const isInstanceOfVolumeData = volData.isInstanceOf(VolumeData);
console.log("\nconst isInstanceOfVolumeData = volData.isInstanceOf(VolumeData);", codeStyleMap);
console.log(isInstanceOfVolumeData, resultStyleMap);

console.warn("\n\nRESOLVING PROPERTIES:\n");
const pathToProp1 = 'format.status.name';
console.log("const pathToProp1 = '%s';", pathToProp1, codeStyleMap);
const pathToProp2 = 'format.status';
console.log("const pathToProp2 = '%s';", pathToProp2, codeStyleMap);
const resolvedProperty1 = volData.resolveProperty(pathToProp1);
console.log("\nconst resolvedProperty1 = volData.resolveProperty(pathToProp1); // '%s'", pathToProp1, codeStyleMap);
console.log(resolvedProperty1, resultStyleMap);
const resolvedProperty2 = volData.resolveProperty(pathToProp2);
console.log("\nconst resolvedProperty2 = volData.resolveProperty(pathToProp2); // '%s'", pathToProp2, codeStyleMap);
console.log(resolvedProperty2, resultStyleMap);

console.warn("\n\nGETTING OBJECT PATHS:\n");
const paths = volData.getPaths();
console.log("const paths = volData.getPaths();", codeStyleMap);
console.log(paths, resultStyleMap);

console.warn("\n\nGETTING OBJECT PATHS WITH PREFIX:\n");
const pathsWithPrefix = volData.getPaths('VD_PFX');
console.log("const pathsWithPrefix = volData.getPaths('VD_PFX');", codeStyleMap);
console.log(pathsWithPrefix, resultStyleMap);

console.warn("\n\nGETTING OBJECT STRUCTURE:\n");
const recurrent = volData.getStructureInfo();
console.log("const recurrent = volData.getStructureInfo();", codeStyleMap);
console.log(recurrent, resultStyleMap);

console.warn("\n\nGETTING OBJECT STRUCTURE (skipEmpty, recurrent):\n");
const recurrent2 = volData.getStructureInfo(false, true);
console.log("const recurrent2 = volData.getStructureInfo(false, true);", codeStyleMap);
console.log(recurrent2, resultStyleMap);

console.warn("\n\nGETTING OBJECT STRUCTURE WITH DEPTH=0 (skipEmpty, recurrent, depth):\n");
const depth0 = volData.getStructureInfo(false, true, 0);
console.log("const depth0 = volData.getStructureInfo(false, true, 0);", codeStyleMap);
console.log(depth0, resultStyleMap);

console.warn("\n\nGETTING OBJECT STRUCTURE WITH DEPTH=1 (skipEmpty, recurrent, depth):\n");
const depth1 = volData.getStructureInfo(false, true, 1);
console.log("const depth1 = volData.getStructureInfo(false, true, 1);", codeStyleMap);
console.log(depth1, resultStyleMap);

console.warn("\n\nGETTING OBJECT STRUCTURE WITH DEPTH=2 (skipEmpty, recurrent, depth):\n");
const depth2 = volData.getStructureInfo(false, true, 2);
console.log("const depth2 = volData.getStructureInfo(false, true, 2);", codeStyleMap);
console.log(depth2, resultStyleMap);


console.info("\n\nTest complete!");
