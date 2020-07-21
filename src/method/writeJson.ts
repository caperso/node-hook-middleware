import { writeFileSync } from "fs";

export function writeJsonPromise(
  jsonPath: string,
  data: JSON
): Promise<boolean | Error> {
  return new Promise((resolve, reject) => {
    try {
      const jsonString = JSON.stringify(data);
      writeFileSync(jsonPath, jsonString);
      return resolve(true);
    } catch (e) {
      console.error(e);
      reject(e);
    }
  });
}
