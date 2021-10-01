export default function Display({elt}){


    return(
        <ul>
            <li>Nome: {elt.name} </li>
            <li>Quantid: {elt.quantity}</li>
            <li>Preço: {elt.price}</li>
        </ul>
    )
}