
import { useState } from 'react'

export default function Total({entry, exit}){

  




    return(
        <ul>
            <li>
                <p>Quantidade total das entradas</p>
                {   
                    entry.reduce((s,a) => a.quantity + s ,0)
                }
            </li>
            <li>
                <p>Quantidade total das  saídas</p>
                {   
                    exit.reduce((s,a) => a.quantity + s ,0   )
                }
            </li>
            <li>
                <p>Valor total das saídas</p>
                {   
                    exit.reduce((s,a) =>  a.price + s , 0)
                }
            </li>
        </ul>
    )
}