"use client"
import { ErrorMessage } from '@/Components/ErrorForm/ErrorMessage'
import { useFormState } from 'react-dom'
import classes from "./page.module.css"
import FormSubmit from '@/Components/Jobs/Form/FormSubmit'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faBriefcase, faEnvelope, faGlobe, faLocation, faPerson, faPhone, faUser, faUsersLine, faVoicemail } from '@fortawesome/free-solid-svg-icons'
import { ImagePicker } from '@/Components/imagePicker/ImagePicker'
import { usePathname } from 'next/navigation'

export const JobApplicationForm = ({ action }) => { 

    const [state, formAction] = useFormState(action, {})

    const path = usePathname()

    const getPath = path.split('/')[2]

    return ( 
        <form action={formAction} className={classes["form"]}>
            {/* { state.errors && <ErrorMessage error={state.errors}/> } */}
        <div className={classes["form-input-area"]}>
          <div className={classes["form-input"]}>
            <label htmlFor="fullName"><FontAwesomeIcon icon={faUser} style={{color: "#5AB2FF"}}/> Full Name</label>
            <input  type="text" id="fullNameInput" name="fullName" placeholder="your full name..."/>
          </div>
          <div className={classes["form-input"]}>
            <label htmlFor="email"><FontAwesomeIcon style={{color: "#5AB2FF"}} icon={faEnvelope} /> Email Address</label>
            <input  type="text" id="emailInput" name="email" placeholder="name@gmail.com"/>
          </div>

          <input style={{display: 'none'}} defaultValue={getPath}  type="text" id="jobIdInput" name="jobId" placeholder="job id..."/>
          
        </div>

        <div className={classes["form-input-area"]}>
          <div className={classes["form-input"]}>
            <label htmlFor="phoneNumber"><FontAwesomeIcon style={{color: "#5AB2FF"}} icon={faPhone} /> Phone Number</label>
            <input  type="text" id="phoneNumberInput" name="phoneNumber" placeholder="your phone number..."/>
          </div>
          <div className={classes["form-input"]}>
            <label htmlFor="contactMethod"><FontAwesomeIcon style={{color: "#5AB2FF"}} icon={faAddressBook} /> Preferred Method Of Contact</label>
            <input  type="text" id="contactMethod" name="contactMethod" />
          </div>
        </div>

        <div className={classes["form-input-area"]}>
          <div className={classes["form-input"]}>
            <label htmlFor="countryLocation"><FontAwesomeIcon style={{color: "#5AB2FF"}} icon={faLocation} /> Country Location</label>
            <input  type="text" id="countryLocationInput" name="countryLocation" placeholder="your location..."/>
          </div>
          <div className={classes["form-input"]}>
            <label htmlFor="countryLocation"><FontAwesomeIcon style={{color: "#5AB2FF"}} icon={faLocation} /> Country Location</label>
            <input  type="text" id="countryLocationInput" name="countryLocation" placeholder="your location..."/>
          </div>
        </div>

        <div className={classes["form-input-area"]}>
          <div className={classes["form-input"]}>
            <label htmlFor="profesionalReferenceOne"><FontAwesomeIcon style={{color: "#5AB2FF"}} icon={faBriefcase} /> Professional Reference 1 (Optional)</label>
            <input  type="text" id="profesionalReferenceOneInput" name="profesionalReferenceOne" placeholder="reference"/>
          </div>
          <div className={classes["form-input"]}>
            <label htmlFor="profesionalReferenceTwo"><FontAwesomeIcon style={{color: "#5AB2FF"}} icon={faBriefcase} /> Professional Reference 2 (Optional)</label>
            <input  type="text" id="profesionalReferenceTwoInput" name="profesionalReferenceTwo" placeholder="reference"/>
          </div>
        </div>
        <div className={classes['form-input-text-area']}>
            <label htmlFor="proffesionalSkills"><FontAwesomeIcon style={{color: "#5AB2FF"}} icon={faPerson} /> Proffesional Skills</label>
            <textarea type="text" id="proffesionalSkillsInput" name="proffesionalSkills"  placeholder="your proffesional skills..."/>
        </div>

        <div className={classes['form-input-text-area']}>
            <label htmlFor="aboutYourself"><FontAwesomeIcon style={{color: "#5AB2FF"}} icon={faUsersLine} /> Tell Us About Yourself</label>
            <textarea type="text" id="aboutYourselfInput" name="aboutYourself" placeholder="talk about you..."/>
        </div>
        <ImagePicker name={'image'} label={'select a cv'}/>
        <div className={classes['form-footer']}>
           <FormSubmit />
        </div>
      </form>
    )
}