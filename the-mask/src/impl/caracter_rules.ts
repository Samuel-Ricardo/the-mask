import { ICaracterRule } from "app-types";

const filterEspecialCaracter = (caracters:[string]) => {
    return caracters.map((caracter) => {
        if(
          caracter === "." ||
          caracter === "+" ||
          caracter === "*" ||
          caracter === "?" ||
          caracter === "^" ||
          caracter === "$" ||
          caracter === "(" ||
          caracter === ")" ||
          caracter === "[" ||
          caracter === "]" ||
          caracter === "{" ||
          caracter === "}" ||
          caracter === "|" ||
          caracter === "\\"
        ) {return `\\${caracter}`} else {return caracter}
    })
  } 

