#!/usr/bin/env node
var fs=require("fs");

var listing=fs.readdirSync(__dirname);
console.log(process.cwd());
var listing=fs.readdirSync(process.cwd());
//console.log(listing);
for(var i=0;i<listing.length;i++){
    console.log("\n => "+ listing[i]);
}
