"use strict";

const fsP = require("fs/promises");
const axios = require("axios");

/** This function takes a single parameter that is a path. It prints the
 * contents of the file located at that path.
 * */
async function cat(path) {
  try {
    let contents = await fsP.readFile(path, "utf8");
    //move to outside of try block, to avoid unwanted errors
    console.log("file contents", contents);
    process.exit(0);
  } catch (err) {
    console.log(`Error reading ${path}:`);
    console.log(`Error: ${err}`);
    process.exit(1);
  }
}

/** This function takes a single parameter this is a url. It initiates get
 * request to url and print the html from url(response.data).
 */
async function webCat(url) {
  try {
    const response = await axios.get(url);
    console.log(response.data);
  } catch (err) {
    console.log("Error on request");
    process.exit(1);
  }
}

const argv = process.argv;
//built in url class, method is url
if (argv[2].toLowerCase().includes("http")) {
  webCat(argv[2]);
} else {
  cat(argv[2]);
}
