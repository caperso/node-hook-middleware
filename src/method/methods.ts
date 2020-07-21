import { accessSync, constants, mkdirSync } from "fs";
import { join } from "path";

export function joinPath(mkdirIfNotExist: boolean = true, ...args: string[]) {
  const fullPath = join(...args);
  !checkExists(fullPath) && mkdirIfNotExist && makePath(fullPath);
  return fullPath;
}

export const makePath = (path: string) => {
  mkdirSync(path, { recursive: true });
};

export function checkExists(path: string) {
  try {
    accessSync(path, constants.F_OK | constants.W_OK);
    return true;
  } catch {
    return false;
  }
}
