import { IFormatedCaracterRule } from "app-types";

export const caracter_rules: IFormatedCaracterRule = {
    HAVE_LETTERS: ({a, z, allowUpercase}) => allowUpercase ? `${a.toLowerCase()}-${z.toLowerCase()}${a.toUpperCase()}-${z.toUpperCase()}` : `${a}-${z}`,

    HAVE_NUMBER: ({init, end}) => `${init}-${end}`,
    
    HAVE_SPECIAL_CARACTERS: ({have, caracters}) => {
      const regex = ``
      
      if(have)filterEspecialCaracters(caracters).forEach(caracter => {regex.concat(caracter)});
      
      return regex
    }
}