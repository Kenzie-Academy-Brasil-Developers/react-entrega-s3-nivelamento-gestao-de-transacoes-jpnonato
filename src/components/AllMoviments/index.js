import Display from '../Display'

export default function AllMoviments({transactions}){


    return(
        <>
        {
            transactions.map((elt) => <Display elt={elt} />)
        }
        </>
    )
}