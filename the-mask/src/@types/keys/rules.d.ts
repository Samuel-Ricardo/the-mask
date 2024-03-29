import { ICaracterRulesKeys, IDefaultCaracterRulesKeys } from './caracters';
export interface IRuleKeys {
    caracters?:  ICaracterRulesKeys,
    format?: string,
    min_length?: string,
    fixed_length?: string,
    max_length?: string,
} 

export interface IDefaultRuleKeys extends IRuleKeys{
    caracters: IDefaultCaracterRulesKeys,
    format: `format_matches`,
    min_length: `min_length`,
    fixed_length: `fixed_length`,
    max_length: `max_length`,
} 
