"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"


export const handleJobApplicationSubmit = async (prevState, formData) => {
    
        const fullName = formData.get('fullName')
        const email = formData.get('email')
        const phoneNumber = formData.get('phoneNumber')
        const contactMethod = formData.get('contactMethod')
        const countryLocation = formData.get('countryLocation')
        const profesionalReferenceOne = formData.get('profesionalReferenceOne')
        const profesionalReferenceTwo = formData.get('profesionalReferenceTwo')
        const proffesionalSkills = formData.get('proffesionalSkills')
        const aboutYourself = formData.get('aboutYourself')
        const jobId = formData.get('jobId')

        let errors = []
    
        if(!fullName || fullName.length < 0){ 
            errors.push('Fullname must be required')
        }

        if(!email || email.length < 0){ 
            errors.push('email must be required')
        }

        if(!phoneNumber || phoneNumber.length < 0){ 
            errors.push('phoneNumber must be required')
        }

        if(!contactMethod || contactMethod.length < 0){ 
            errors.push('contactMethod must be required')
        }

        if(!countryLocation || countryLocation.length < 0){ 
            errors.push('countryLocation must be required')
        }

        if(!profesionalReferenceOne || profesionalReferenceOne.length < 0){ 
            errors.push('profesionalReferenceOne must be required')
        }

        if(!profesionalReferenceTwo || profesionalReferenceTwo.length < 0){ 
            errors.push('profesionalReferenceTwo must be required')
        }

        if(!proffesionalSkills || proffesionalSkills.length < 0){ 
            errors.push('proffesionalSkills must be required')
        }

        if(!aboutYourself || aboutYourself.length < 0){ 
            errors.push('about yourself must be required')
        }

        if(errors.length >= 1) { 
            return { errors }
        }

        console.log(jobId)

        const user = { 
            fullName: fullName, 
            email: email, 
            phoneNumber: phoneNumber, 
            contactMethod: contactMethod, 
            countryLocation: countryLocation, 
            profesionalReferenceOne: profesionalReferenceOne, 
            profesionalReferenceTwo: profesionalReferenceTwo, 
            proffesionalSkills: proffesionalSkills, 
            aboutYourself: aboutYourself, 
            jobId: jobId
        }

        const response = await fetch('http://localhost:8080/jobs/application', { 
            method: 'POST', 
            body: JSON.stringify(user), 
            cache: 'no-store', 
            headers: {
                'Content-Type': 'application/json' 
              },
        }).then((resp) => resp.json())
        .catch((error) => console.log(error))

        console.log('response => ', response)


        revalidatePath('/jobs', 'page')
        redirect('/status')
    
    
      }
