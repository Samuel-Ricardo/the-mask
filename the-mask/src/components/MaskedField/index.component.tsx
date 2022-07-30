import { getVerifier } from '../../impl/verifier'
import { caracter_rules } from '../../impl/caracter_rules' 
import './style.scss'
import { useEffect, useState } from 'react';

export const MaskedField = (props: any) => {

    const [content, setContent] = useState("")

    const rules = caracter_rules(
      {
        LETTERS: {a:"a", z:"z", allowUpercase: false},
        NUMBERS: {init:"0", end:"9"},
        SPECIAL_CARECERS: {caracters:[":", ","]}
      }
    );

    const verifier = getVerifier({
      min_length: 5,
      max_length: 10,
      caracters:{
        all_lowercase: true,
        all_upercase: false,
        dont_have: ["a", "d", "j"],
        must_have: ["b", "k"],
      },
      format:{
        model: "***-**(*)*",
        string_to_replace: [
          {key:"*", value: [rules]}
        ]
      },
      verify(){
        return new Map<string,boolean>()
      },
    })

    useEffect(() => {
      if(content)
        console.log(verifier.verify(content))
        console.log(content)
    },[content])

    return (
    <>
      <input {...props} onChange={event => setContent(event.target.value)} value={content} placeholder={verifier.rules.format?.model}/>
    </>
  )
}