export interface ICaracterRulesKeys {
    must_have: (caracter:String) => string,
    dont_have: (caracter:String) => string,
    all_upercase: string,
    all_lowercase: string,
}

export interface IDefaultCaracterRulesKeys {
    must_have: (caracter:String) => `must_have_${caracter}`,
        dont_have: (caracter:String) => `dont_have_${caracter}`,
        all_upercase: `all_upercase`,
        all_lowercase: `all_lowercase`,
}