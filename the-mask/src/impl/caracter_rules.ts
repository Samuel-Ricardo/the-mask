import { IFormatedCaracterRule, IApplyFormatedCaracterRuleProps } from "app-types";

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

export const filterEspecialCaracters = (caracters:string[]) => caracters.map((caracter) => filterSpecialCaracter(caracter))

export const filterSpecialCaractersndIgnore = (caracters:string, ignore:string) => {
  return caracters.split('').map((caracter) => caracter !== ignore ? caracter :  filterSpecialCaracter(caracter))
} 

export const filterSpecialCaractersOfStringOrIgnore = (caracters:string, ignore:string[]) => {
  console.log("")
  console.log("filtro")
  console.log(ignore)
  console.log("")
  return caracters.split('')
    .map((caracter) => ignore.includes(caracter) ? caracter : filterSpecialCaracter(caracter))
    .reduce((previus, current) => previus.concat(current))
}  
  
export const filterEspecialCaractersAndIgnore = (caracters:string[], ignore:string[]) => {
  return caracters.map((caracter) => ignore.filter(ignore => caracter === ignore).length < 0 ? caracter : filterSpecialCaracter(caracter))
}

export const caracter_rules = (PROPS:IApplyFormatedCaracterRuleProps): IFormatedCaracterRule => {return {
    PROPS,
    APPLY(props) {
      var result = '';
      
      if(props.LETTERS) result = result.concat(this.HAVE_LETTERS? this.HAVE_LETTERS(props.LETTERS) : '') 
      if(props.NUMBERS) result = result.concat(this.HAVE_NUMBER? this.HAVE_NUMBER(props.NUMBERS) : '')
      if(props.SPECIAL_CARECERS) result = result.concat(this.HAVE_SPECIAL_CARACTERS? this.HAVE_SPECIAL_CARACTERS(props.SPECIAL_CARECERS): '')
      
      return result
    },
    HAVE_LETTERS: ({a, z, allowUpercase}) => allowUpercase ? `${a.toLowerCase()}-${z.toLowerCase()}${a.toUpperCase()}-${z.toUpperCase()}` : `${a}-${z}`,

    HAVE_NUMBER: ({init, end}) => `${init}-${end}`,
    
    HAVE_SPECIAL_CARACTERS: ({caracters}) => {
      const regex = ``
        filterEspecialCaracters(caracters).forEach(caracter => {regex.concat(caracter)});
      return regex
    }
  }
}