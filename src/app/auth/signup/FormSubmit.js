"use client"
import { useFormStatus } from 'react-dom'

export default function SignUpFormSubmit(){ 

    const status = useFormStatus()

    if(status.pending){ 
        return <p>Loading...</p>
    }

    return ( 
        <button>Create New Account</button>
    )

}