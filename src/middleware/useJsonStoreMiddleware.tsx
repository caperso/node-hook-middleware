import { useEffect } from "react";
import { writeJsonPromise } from "../method/writeJson";

interface StoreProps<T> {
  prisoner: T;
  jsonPath: string;
  jsonData: JSON;
  jsonPropName?: string; // if propName is contained find it in
}

export default function useJsonStoreMiddleware<T>(props: StoreProps<T>): void {
  const { prisoner, jsonPath, jsonData } = props;
  useEffect(() => {
    writeJsonPromise(jsonPath, jsonData)
      .then((res) => {
        console.log("write to local is completed");
      })
      .catch((e) => {
        console.log("write to local is failed");
      });
  }, [prisoner]);
}
