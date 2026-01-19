import {useEffect} from "react";

const UseEffects = () => {

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos')
            const data = await response.json()
            data.forEach(e => {
                console.log(e.title)
            })
        }
        fetchData()
    })

    return (
        <>

        </>
    )
}
export default UseEffects