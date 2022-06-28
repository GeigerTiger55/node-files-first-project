"use strict";

const fsP = require("fs/promises");

/** This function takes a single parameter that is a path. It prints the 
 * contents of the file located at that path. 
 * */
async function cat(file){
  try {
    let contents = await fsP.readFile(file, "utf8");
    console.log("file contents", contents);
    process.exit(0);
  } catch (err) {
    console.log(`Error reading ${file}:`);
    console.log(`Error: ${err}`);
    process.exit(1);
  }

}

const argv = process.argv;
cat(argv[2]);