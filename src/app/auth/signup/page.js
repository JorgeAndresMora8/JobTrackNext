
import { handleSignupSubmit } from '@/actions/Auth'
import Form from './signUpForm'

export default function SignUpForm(){ 

    

    return ( 
        <Form action={handleSignupSubmit} />
    )

    
}