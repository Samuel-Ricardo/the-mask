import { ICaracterRules } from './caracter-rules';
import { IFormat } from './format';
import { IVerifiable } from './verifier';

export interface IRules extends IVerifiable{
    caracters?: ICaracterRules
    min_length?: number
    fixed_length?: number
    max_length?: number
    format?: IFormat
}

