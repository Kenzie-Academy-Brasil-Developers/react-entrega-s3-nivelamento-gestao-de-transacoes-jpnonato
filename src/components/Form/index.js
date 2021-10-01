
import { useEffect, useState } from 'react'
import Display from '../Display'
import Allmoviments from '../AllMoviments'
import Total from '../Total'

export default function Form({elt}){

    const [transactions, setTransactions ] = useState([
        {name: "banana", quantity: 100, price: 5 },
        {name: "morango", quantity: -10, price: 2 },
        {name: "laranja", quantity: 50, price: 6 },
    ])
    const [entry, setEntry] = useState(transactions.filter((elt) => {
        return elt.quantity >= 0
    }))
   const [exit, setExit] = useState(transactions.filter((elt) => {
       return elt.quantity < 0
    }))
    const [nome,setNome] = useState('')
    const [quant,setQuant] = useState('')
    const [prec,setPrec] = useState('')
    const [isTrue,setIsTrue] = useState(true)

    console.log(exit)

    const handleClick = () => {

        const item = {
            name: nome,
            quantity: parseInt(quant),
            price: parseFloat(prec)
        }

        setTransactions([...transactions, item])
    }

    useEffect(() => {
        setEntry(transactions.filter((elt) => elt.quantity >= 0))
        setExit(transactions.filter((elt) => elt.quantity < 0))

    }, [transactions])

    const entradas = () => {
      setIsTrue(false)

    }

    const saidas = () => {
        setIsTrue(true)
  
      }

   
    return(
        
        <div>
            <section >
                <Total entry={entry} exit={exit}/>
            </section>
            <section>
                <input type='text' placeholder='nome' onChange={(e) => setNome(e.target.value)}></input>
                <input type='text' placeholder='quantidade' onChange={(e) => setQuant(e.target.value)}></input>
                <input type='text' placeholder='preço' onChange={(e) => setPrec(e.target.value)}></input>
                <button onClick={handleClick}>cadastrar</button>
            </section>
            <section>
                <h2> Todos os  movimentos:</h2>
                <Allmoviments transactions={transactions}/>
            </section>
            <section>
                {
                    isTrue === true ? 
                    <div>
                        <section>
                          <button onClick={entradas}>Mostrar Saídas</button>
                        </section>
                       <h21>Todas as entradas:</h21>
                    </div> : <></>
                }
                
                {   isTrue === true ? 
                    entry.map((elt) => 
                    <div>     
                        <Display elt={elt} /> 
                    </div>) : <></>
                }
                
                {console.log(transactions)}
            </section>
            <section>
                {
                    isTrue === false ? 
                    <div>
                        <section>
                            <button onClick={saidas}>Mostrar Entradas</button>
                        </section>
                       <h21>Todas as saidas:</h21>
                    </div> : <></>
                }
                {   isTrue === false ? 
                    exit.map((elt) => <Display elt={elt} />) : <></>
                }
            </section>
        </div>
    )
}