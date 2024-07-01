"use client";
import { useFormState } from "react-dom";
import Link from 'next/link'
import classes from './page.module.css'
import SignUpFormSubmit from './FormSubmit';
import { ErrorMessage } from "@/Components/ErrorForm/ErrorMessage";

export default function Form({action}){ 
    const [state, formAction] = useFormState(action, {})


    return ( 
        <div className={classes['login-container']}>
            <div className={classes['login-image-area']}>
                <img src='/signupBanner.jpg' style={{width: '100%'}}/>
            </div>
            <form action={formAction} className={classes['login-form-area']}>
                <div className={classes['login-form-header']}>
                    { state.errors && <ErrorMessage error={state.errors}/> }
                    <div className={classes['login-title-area']}>
                    <b>Sign Up</b>
                    <p className={classes['dont-have-account-flag']}>Already have an account? <br /> <span><Link href={'/auth'}>Login</Link></span></p>
                    </div>
                </div>
                
                <div className={classes['form-input-area']}>
                    <label htmlFor='firstname'>Firstname</label>
                    <input type="text" name='firstname' placeholder='name@gmail.com'/>
                </div>
                <div className={classes['form-input-area']}>
                    <label htmlFor='lastname'>Lastname</label>
                    <input type="text" name='lastname' placeholder='Password'/>
                </div>
                <div className={classes['form-input-area']}>
                    <label htmlFor='email'>Email</label>
                    <input type="text" name='email' placeholder='name@gmail.com'/>
                </div>
                <div className={classes['form-input-area']}>
                    <label htmlFor='password'>Password</label>
                    <input type="password" name='password' placeholder='Password'/>
                </div>
                
                {/* <button className={classes['login-form-btn']} type="submit" >Create New Account</button> */}
                <SignUpFormSubmit />
            </form>
        </div>
    )
}