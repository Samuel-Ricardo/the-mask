
export interface ICaracterRules {
    must_have?: [string]
    dont_have?: [string]
    all_upercase?: boolean
    all_lowercase?: boolean
}

export interface IFormatedCaracterRule{
    PROPS: IApplyFormatedCaracterRuleProps
    HAVE_LETTERS?: (props: IHaveLettersProps) => string
    HAVE_NUMBER?: (props: IHaveNumbersProps) => string
    HAVE_SPECIAL_CARACTERS?: (props: IHaveSpecialCaractersProps) => string
    APPLY: (props: IApplyFormatedCaracterRuleProps) => string
}

export interface IApplyFormatedCaracterRuleProps{
    LETTERS?: IHaveLettersProps
    NUMBERS?: IHaveNumbersProps
    SPECIAL_CARECERS?: IHaveSpecialCaractersProps
}

export interface IHaveLettersProps {
    a:string
    z:string
    allowUpercase:boolean
}

export interface IHaveNumbersProps {
    init:string
    end:string
}

export interface IHaveSpecialCaractersProps {
    have:boolean
    caracters:[string]
}