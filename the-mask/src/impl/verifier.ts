import { IRules } from 'app-types';
import { RULE_KEYS } from 'const';
import { IVerifier, ICaracterRules } from 'app-types';
import { filterSpecialCaractersOfStringOrIgnore } from './caracter_rules';

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



const mergeMaps = (map1:Map<any,any>, map2:Map<any,any>) => {
    map2.forEach((value, key) => map1.set(key,value))
    return map1;
}

export const verifyRules = (content:string, rules:IRules) => {
    var results = new Map<string,boolean>()

    const {
        caracters,
        format,
        max_length,
        min_length,
        fixed_length, 
     } = rules

    if(fixed_length) results.set(RULE_KEYS.fixed_length, content.length === fixed_length)
    if(max_length) results.set(RULE_KEYS.max_length, content.length <= max_length)
    if(min_length) results.set(RULE_KEYS.min_length, content.length >= min_length)

    if(caracters) mergeMaps(results, VerifyCaracterRules(content, caracters))

    if(format) {

        format.model = filterSpecialCaractersOfStringOrIgnore(format.model, format.string_to_replace.map(string => string.key))

        format.string_to_replace.forEach(string => {
            const this_regex = `[`
                string.value.forEach(rule => this_regex.concat(rule.APPLY(rule.PROPS)))
            this_regex.concat(`]`)
            format.model.replace(string.key, this_regex)
        })
        
        const matchResult = content.match(`/^${format.model}$/`) 
        const result = matchResult ? matchResult.length > 0 : false

        results.set(RULE_KEYS.format, result)
    }

    return results;
}


export const getVerifier = (rules: IRules):IVerifier => {
    return { 
        rules,
        verify: content => verifyRules(content, rules),
        apply(content) {
            const results = new Map<string,boolean>()
            return results;
        },
    }
}