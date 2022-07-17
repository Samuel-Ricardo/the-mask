import { IFormatedCaracterRule } from "app-types";

const filterSpecialCaracter = (caracter:string) => {
  if(
    caracter === "." ||
    caracter === "-" ||
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
} 

export const filterSpecialCaracterOrIgnore = (caracter: string, ignore: boolean) => ignore? caracter : filterSpecialCaracter(caracter);


export const caracter_rules: IFormatedCaracterRule = {
    HAVE_LETTERS: ({a, z, allowUpercase}) => allowUpercase ? `${a.toLowerCase()}-${z.toLowerCase()}${a.toUpperCase()}-${z.toUpperCase()}` : `${a}-${z}`,

    HAVE_NUMBER: ({init, end}) => `${init}-${end}`,
    
    HAVE_SPECIAL_CARACTERS: ({have, caracters}) => {
      const regex = ``
      
      if(have)filterEspecialCaracters(caracters).forEach(caracter => {regex.concat(caracter)});
      
      return regex
    }
}