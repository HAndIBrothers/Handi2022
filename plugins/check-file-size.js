import { createRequire } from "module";
const require = createRequire(import.meta.url);

const fs = require("fs");

const MAX_BYTES = 13312;
const filename = "./dist/game.zip";

function getFileSizeInBytes(filename) {
  return fs.statSync(filename).size;
}

function isFileUnderMaxSize(fileSize) {
  return fileSize <= MAX_BYTES;
}

const fileSize = getFileSizeInBytes(filename);
const fileSizeDifference = Math.abs(MAX_BYTES - fileSize);

if (isFileUnderMaxSize(fileSize)) {
  console.log(
    "🟩🟩🟩🟩🟩\n",
    `Fantastic! The file is ${fileSize} bytes! ${fileSizeDifference} bytes under the limit.`,
    "\n🟩🟩🟩🟩🟩",
  );
} else {
  console.log(
    "🟥🟥🟥🟥🟥\n",
    `Shoot! The file is${fileSize} bytes ${fileSizeDifference} bytes over the limit.`,
    "\n🟥🟥🟥🟥🟥",
  );
}
