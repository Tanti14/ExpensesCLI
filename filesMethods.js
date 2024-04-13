/* Funciones para majear archivos con FileSystem */
import fs from "fs";

export const getData = async (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file + ".json", "utf-8", (error, data) => {
      if (error) {
        reject(error);
      }
      resolve(JSON.parse(data));
    });
  });
};

export const saveData = async (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file + ".json", JSON.stringify(data), (error) => {
      if (error) {
        reject(error);
      }
      resolve("Información guardada correctamente");
    });
  });
};
