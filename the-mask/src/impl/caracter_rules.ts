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

export const caracter_rules: ICaracterRule = {
    HAVE_LETTERS: (a, z, allowUpercase) => allowUpercase ? `${a.toLowerCase()}-${z.toLowerCase()}${a.toUpperCase()}-${z.toUpperCase()}` : `${a}-${z}`,

    HAVE_NUMBER: (init:string, end:string) => `${init}-${end}`,
    
    HAVE_SPECIAL_CARACTERS: (have, caracters) => {
      const regex = ``
      
      if(have)filterEspecialCaracter(caracters).forEach(caracter => {regex.concat(caracter)});
      
      return regex
    }
}