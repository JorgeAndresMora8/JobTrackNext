"use client"
import classes from './page.module.css'
import AuthFormSubmit from "./FormSubmit"
import { useFormState } from "react-dom";
import Link from 'next/link';
import { ErrorMessage } from '@/Components/ErrorForm/ErrorMessage';

export const LoginForm = ({ action }) => {
    
    const [state, formAction] = useFormState(action, {})


    return ( 
        <form action={formAction} className={classes['login-form-area']}>
                <div className={classes['login-form-header']}>
                    { state.errors && <ErrorMessage error={state.errors}/>}
                    <div className={classes['login-title-area']}>
                    <b>Login</b>
                    <div>
                        <p className={classes['dont-have-account-flag']}>Dont you have an account? <br /> <span><Link href={'/auth/signup'}>Signup</Link></span></p>
                    </div>
                    </div>
                </div>
                
                <div className={classes['form-input-area']}>
                    <label htmlFor='email'>Email</label>
                    <input type="text" name='email' placeholder='name@gmail.com'/>
                </div>
                <div className={classes['form-input-area']}>
                    <label htmlFor='password'>Password</label>
                    <input type="text" name='password' placeholder='Password'/>
                </div>
               <AuthFormSubmit />
            </form>
    )
}