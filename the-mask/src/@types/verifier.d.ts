import { IRules } from './rules';
export interface IVerifier {
    rules: IRules
    verify: () => [boolean]
    apply?: () => [boolean]
}

