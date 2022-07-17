import { IDefaultRuleKeys, IRuleKeys } from "app-types";

export const RULE_KEYS:IDefaultRuleKeys = {
    caracters: {
        must_have: (caracter:String) => `must_have_${caracter}`,
        dont_have: (caracter:String) => `dont_have_${caracter}`,
        all_upercase: `all_upercase`,
        all_lowercase: `all_lowercase`,
    },
    min_length: "min_length",
    fixed_length: `fixed_length`,
    max_length: `max_length`,
    format: {},
} 

