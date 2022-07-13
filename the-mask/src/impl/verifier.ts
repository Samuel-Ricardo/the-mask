import { IRules } from 'app-types';
import { IVerifier } from '../@types/verifier';

/*
const verifier:IVerifier = {
    rules: {
        caracters:
    },
    apply(){
        
        return [true]
    }
}
*/
export const getVerifier = (rules: IRules):IVerifier => {
    return { 
        rules,
        verify(){

            return [true]
        },
        apply() {
            return [true]
        },
    }
}