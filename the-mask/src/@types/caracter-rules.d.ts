
export interface ICaracterRules {
    must_have?: [string]
    dont_have?: [string]
    all_upercases?: boolean
    all_lowercase?: boolean
}

export interface ICaracterRule{
    HAVE_LETTERS: (a:string, z:string, allowUpercase:boolean) => string,
    HAVE_NUMBER: (init:string, end:string) => string
    HAVE_SPECIAL_CARACTERS: (have:boolean, caracters:[string]) => string
}