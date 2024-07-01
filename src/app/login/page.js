import Link from 'next/link'
import classes from './page.module.css'

export default function LoginForm(){ 
    return ( 
        <div className={classes['login-container']}>
            <div className={classes['login-image-area']}></div>
            <div className={classes['login-form-area']}>
                <div className={classes['login-form-header']}>
                    <div className={classes['login-title-area']}>
                    <b>Logins</b>
                    <div>
                        <p className={classes['dont-have-account-flag']}>Dont you have an acscount? <br /> <span><Link href={'/auth/signup'}>Sign Up</Link></span></p>
                    </div>
                    </div>
                </div>
                
                <div className={classes['form-input-area']}>
                    <label>Email</label>
                    <input type="text" placeholder='name@gmail.com'/>
                </div>
                <div className={classes['form-input-area']}>
                    <label>Password</label>
                    <input type="text" placeholder='Password'/>
                </div>
                <button className={classes['loginFormBtnSubmit']} style={{backgroundColor: "green"}} type="submit" >Login</button>
            </div>
        </div>
    )
}