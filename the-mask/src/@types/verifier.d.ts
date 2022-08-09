import { IRules } from './rules';

export interface IVerifier extends IVerifiable{
    rules: IRules
}

export interface IVerifyResult {

}

export interface IVerifiable {
    verify: (content: string) => Map<string, boolean>
    apply?: (content: string) => {result: Map<string, boolean>, content: string}
}