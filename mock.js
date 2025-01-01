import { isUtf8 } from "buffer";
import fs from "fs";

// let data = "oncce i saw a gurl yapping about her dead hen but i was the one who killed it"

// fs.writeFile("text.txt", data,"utf8", (err) => {
//   console.log(err);
// });

fs.readFile("text.txt", "utf8", (err, data) => {
  fs.writeFile("data.txt", data, "utf8", (err) => {
    if (err) {
      console.log(err);
    }
  });
});
