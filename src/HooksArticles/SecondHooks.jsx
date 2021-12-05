import React,{useState,useEffect} from 'react'

const SecondHooks = (props) => {
    const [loading,setLoading] = useState(true)
    const [user,setUser] = useState(null)
    const [error,setError] = useState(null)

    useEffect(()=>{
        fetch(`https://myApi.io/users/${props.userId}`)
        .then(res=>res.json())
        .then(data=>{
            setLoading(false)
            setUser(data)
        })
        .catch(err=>{
            setLoading(false)
            setError(err)
        })
    },[props.userId])
    if(loading){
        return <p>Loading...</p>
    }
    if(error){
        return <p>Error:</p>
    }
    return <p>Greetings,{user.name}!</p>
    // return (
    //     <div>
            
    //     </div>
    // )
}

export default SecondHooks
