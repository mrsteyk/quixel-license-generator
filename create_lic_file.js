var crypto = require('crypto');
var fs = require('fs');

var i = "holdthedoorhodor";
var a = "jojiyar!comeonmanwhatisthishain?";

var t = crypto.createCipheriv("aes-256-cbc", a, i);
var e = fs.readFileSync('lic.json', "utf8");
var r = t.update(e, "utf8", "base64");
r += t.final("base64");
fs.writeFile("lic.lic", r, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 