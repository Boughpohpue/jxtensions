export const codeStyleMap = new Map([["style", "color: goldenrod;"], ["breaklines", true]]);

console.info('Defining test data...\n\n');

console.warn("Test classes:");
export class VolumeFormatStatus {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}
console.log("\n%s", VolumeFormatStatus.toString(), codeStyleMap);

export class VolumeFormat {
  constructor(id, name, status) {
    this.id = id;
    this.name = name;
    this.status = status;
  }
}
console.log("\n%s", VolumeFormat.toString(), codeStyleMap);

export class VolumeData {
  constructor(id, created, format, bitrate, tracks, formatList, optionalField) {
    this.id = id;
    this.created = created;
    this.format = format;
    this.bitrate = bitrate;
    this.tracks = tracks;
    this.formatList = formatList;
    this.optionalField = optionalField;
  }
}
console.log("\n%s", VolumeData.toString(), codeStyleMap);
