import { ICaracterRules } from './caracter-rules';
import { IFormat } from './format';

export interface IRules {
    caracters?: ICaracterRules
    min_length?: number
    fixed_length?: number
    max_length?: number
    format?: IFormat
}

