"use client"

import { useFormStatus } from 'react-dom'

export default function FormSubmit(){ 

    const status = useFormStatus()

    if(status.pending){ 
        return <p>Sending Application...</p>
    }

    return ( 
        <>
        <button>Apply Now</button>
        </>
    )
}