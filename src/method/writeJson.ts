import { readFileSync, writeFileSync } from "fs";

export function writeJsonPromise(
  jsonPath: string,
  data: JSON,
  propName?: string
): Promise<boolean | Error> {
  return new Promise((resolve, reject) => {
    try {
      const jsonString = JSON.stringify(data);
      let updatedJsonString = "";
      if (propName) {
        const content = JSON.parse(
          readFileSync(jsonPath, { encoding: "utf-8" })
        );
        content[propName] = jsonString;
        updatedJsonString = JSON.stringify(content);
      } else {
        updatedJsonString = jsonString;
      }
      writeFileSync(jsonPath, updatedJsonString);

      return resolve(true);
    } catch (e) {
      console.error(e);
      reject(e);
    }
  });
}
