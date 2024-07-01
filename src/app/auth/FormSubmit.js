"use client"
import { useFormStatus } from 'react-dom'
import classes from "./page.module.css"

export default function AuthFormSubmit(){ 
    const status = useFormStatus()

    if(status.pending){ 
        return <p>Sending...</p>
    }

    return ( 
        <button className={classes['login-btn-submit']}>Login</button>
    )
}