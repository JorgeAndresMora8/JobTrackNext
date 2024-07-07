import classes from './page.module.css'
import { LoginForm } from './LoginForm'
import { handleLoginSubmit } from '@/actions/Auth'





export default function Login(){ 

    return ( 
        <div className={classes['login-container']}>
            <div className={classes['login-image-area']}>
                <img src='/loginBanner.jpg' style={{width: "100%"}}/>
            </div>
            <LoginForm action={handleLoginSubmit}/>
        </div>
    )
}