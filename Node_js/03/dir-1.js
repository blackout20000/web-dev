const fs = require("fs");

if (fs.existsSync("./text")) {
    console.log("folder already exists");
} else {
    fs.mkdir("./text", (err) => {
        if (err) {
            console.error(err);
        }
        console.log("folder created");
    });
}