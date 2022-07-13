import { IRules } from './rules';
export interface IVerifier {
    rules: IRules
    verify: (content: string) => Map<string, boolean>
    apply?: (content: string) => Map<string, boolean>
}

export interface IVerifyResult {

}