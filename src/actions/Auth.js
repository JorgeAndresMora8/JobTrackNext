"use server"

import { redirect } from 'next/navigation';

export async function handleSignupSubmit(prevState, formData){ 

    console.log(prevState)

    const firstname = formData.get('firstname'); 
    const lastname = formData.get('lastname');
    const email = formData.get('email');
    const password = formData.get('password');

    let errors = []

    if(!firstname || firstname.length < 0){ 
        errors.push("firstname is required")
    }

    if(!lastname || lastname.length < 0){ 
        errors.push("lastname is required")
    }

    if(!email || email.length < 0){ 
        errors.push("email is required")
    }

    if(!password || password.length < 0){ 
        errors.push("password is required")
    }

    if(errors.length > 0){ 
        return { errors }
    }

    

    await new Promise((resolve, reject) => setTimeout(resolve, 4000))

    redirect('/jobs')
}

export async function handleLoginSubmit(prevState, formData){ 


    const email = formData.get('email')
    const password = formData.get('password')

    let errors = []; 

    if(!email || email.length < 0) errors.push("Email must be provided")
    if(!password || email.length < 0) errors.push('password must be required')


    if(errors.length >= 1) { 
        return { errors }
    }

    await new Promise((resolve, reject) => setTimeout(resolve, 3000))
    
    redirect('/jobs')
}