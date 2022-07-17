
export interface ICaracterRules {
    must_have?: [string]
    dont_have?: [string]
    all_upercase?: boolean
    all_lowercase?: boolean
}

export interface IFormatedCaracterRule{
    PROPS: IApplyFormatedCaracterRuleProps
    HAVE_LETTERS: (props: IHaveLettersProps) => string
    HAVE_NUMBER: (props: IHaveNumbersProps) => string
    HAVE_SPECIAL_CARACTERS: (props: IHaveSpecialCaractersProps) => string
    APPLY: (props: IApplyFormatedCaracterRuleProps) => string
}