import * as fs from "fs";

export class Util {
  static WriteJson(filePath, data) {
    fs.writeFileSync(filePath, data, err => {
      if (err) {
        return false;
      }
      return true;
    });
  }
}
