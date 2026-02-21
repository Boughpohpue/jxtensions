import { extendDatePrototype } from  '../../content/date.js';
import { codeStyleMap, codeNoBrLnStyleMap, resultStyleMap } from '../data/test_styles.js';


console.info("\n\n\nStarting test...");

console.warn("\n\nEXTENDING DATE PROTOTYPE:\n");
extendDatePrototype();
console.log("extendDatePrototype();", codeStyleMap);

// ------------------ BASE DATE ------------------
console.warn("\n\nBASE DATE:\n");
const baseDate = new Date(Date.now());
console.log("const baseDate = %O;", baseDate, codeNoBrLnStyleMap);
console.log("\nbaseDate.format();", codeStyleMap);
console.log(baseDate.format(), resultStyleMap);

// ------------------ ADD SECONDS ------------------
console.warn("\n\nADD SECONDS:\n");
const datePlus30Sec = baseDate.addSeconds(30);
console.log("const datePlus30Sec = baseDate.addSeconds(30);", codeStyleMap);
console.log(datePlus30Sec.format(), resultStyleMap);

baseDate.addSeconds(60, true);
console.log("\nbaseDate.addSeconds(60, true); // mutate", codeStyleMap);
console.log(baseDate.format(), resultStyleMap);

// ------------------ ADD MINUTES ------------------
console.warn("\n\nADD MINUTES:\n");
const datePlus10Min = baseDate.addMinutes(10);
console.log("const datePlus10Min = baseDate.addMinutes(10);", codeStyleMap);
console.log(datePlus10Min.format(), resultStyleMap);

// ------------------ ADD HOURS ------------------
console.warn("\n\nADD HOURS:\n");
const datePlus2Hours = baseDate.addHours(2);
console.log("const datePlus2Hours = baseDate.addHours(2);", codeStyleMap);
console.log(datePlus2Hours.format(), resultStyleMap);

// ------------------ ADD DAYS ------------------
console.warn("\n\nADD DAYS:\n");
const datePlus3Days = baseDate.addDays(3);
console.log("const datePlus3Days = baseDate.addDays(3);", codeStyleMap);
console.log(datePlus3Days.format(), resultStyleMap);

// ------------------ ADD MONTHS ------------------
console.warn("\n\nADD MONTHS:\n");
const datePlus1Month = baseDate.addMonths(1);
console.log("const datePlus1Month = baseDate.addMonths(1);", codeStyleMap);
console.log(datePlus1Month.format(), resultStyleMap);

// ------------------ ADD YEARS ------------------
console.warn("\n\nADD YEARS:\n");
const datePlus5Years = baseDate.addYears(5);
console.log("const datePlus5Years = baseDate.addYears(5);", codeStyleMap);
console.log(datePlus5Years.format(), resultStyleMap);

// ------------------ CHAINING ------------------
console.warn("\n\nCHAINING:\n");
const chainedDate = baseDate.clone().addDays(1).addHours(2).addMinutes(30).addSeconds(15);
console.log("const chainedDate = baseDate.clone().addDays(1).addHours(2).addMinutes(30).addSeconds(15);", codeStyleMap);
console.log(chainedDate.format(), resultStyleMap);

// ------------------ CLONE ------------------
console.warn("\n\nCLONE:\n");
const cloneDate = baseDate.clone();
console.log("const cloneDate = baseDate.clone();", codeStyleMap);
console.log(cloneDate.format(), resultStyleMap);

// ------------------ MUTATION DEMO ------------------
console.warn("\n\nMUTATION DEMO:\n");
console.log("baseDate before mutation:", codeStyleMap);
console.log(baseDate.format(), resultStyleMap);
baseDate.addDays(2, true).addHours(3, true);
console.log("\nbaseDate after addDays(2,true).addHours(3,true):", codeStyleMap);
console.log(baseDate.format(), resultStyleMap);

console.info("\n\nTest complete!");
