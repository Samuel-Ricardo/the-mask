import { IFormat, IRules } from 'app-types';
import { RULE_KEYS } from '../const';
import { IVerifier, ICaracterRules } from 'app-types';
import { filterSpecialCaractersOfStringOrIgnore } from './caracter_rules';

export const VerifyCaracterRules = (content: string, caracters: ICaracterRules) => {
    const results = new Map<string,boolean>();

    if(caracters) {
        if(caracters.all_lowercase) results.set(RULE_KEYS.caracters.all_lowercase, content.toLowerCase() === content)
        if(caracters.all_upercase) results.set(RULE_KEYS.caracters.all_upercase, content.toUpperCase() === content)
        
        if(caracters.dont_have) caracters.dont_have.forEach((caracter) => results.set(RULE_KEYS.caracters.dont_have(caracter), !content.includes(caracter)))
        if(caracters.must_have) caracters.must_have.forEach((caracter) => results.set(RULE_KEYS.caracters.must_have(caracter), content.includes(caracter)))
    }

    return results;
}

export const verifyFormatRules = (content: string, format: IFormat) => {
    const results = new Map<string,boolean>();
    if(!format) return results;

    var model = filterSpecialCaractersOfStringOrIgnore(format.model, format.string_to_replace.map(string => string.key))

    content = content.trim();

        format.string_to_replace.forEach(string => {
            var this_regex = `[`
                string.value.forEach(rule => this_regex = this_regex.concat(rule.APPLY(rule.PROPS)))
            this_regex = this_regex.concat(`]`)
            model = model.replaceAll(string.key, this_regex)
        })
        
        
    const matchResult = content.match(RegExp(`^${model}$`)) 
    const result = matchResult ? matchResult.length > 0 : false

    results.set(RULE_KEYS.format, result)
    return results;
}

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

    if(caracters) results = mergeMaps(results, VerifyCaracterRules(content, caracters))
    if(format) results = mergeMaps(results, verifyFormatRules(content, format))

    return results;
}


export const getVerifier = (rules: IRules):IVerifier => {
    return { 
        rules,
        verify: content => verifyRules(content, rules),
        apply(content) {
            try{
                const result = this.verify(content);

                //console.log()

                if(!result.get(RULE_KEYS.fixed_length)) content = content.slice(0,rules.fixed_length);   
                if(!result.get(RULE_KEYS.max_length)) content = content.slice(0,rules.max_length);

                if(!result.get(RULE_KEYS.caracters.all_lowercase)) content = rules.caracters?.all_lowercase? content.toLocaleLowerCase() : content;
                if(!result.get(RULE_KEYS.caracters.all_upercase)) content = rules.caracters?.all_upercase? content.toLocaleUpperCase() : content;
                
                rules.caracters?.dont_have?.forEach(caracter => {if(!result.get(RULE_KEYS.caracters.dont_have(caracter))) content = content.replaceAll(caracter,'')})
                
                //if(!result.get(RULE_KEYS.format)) content = content.replace(rules.format!.model, "$1")

                return {result, content};
            }catch(error){
                console.error(error)
                return {result: new Map<string,boolean>().set("ERROR",true), content: content}
            }
        },
    }
}