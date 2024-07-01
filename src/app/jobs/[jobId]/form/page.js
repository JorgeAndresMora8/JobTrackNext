import classes from "./page.module.css";
import { JobApplicationForm } from "./JobApplicationForm";
import { handleJobApplicationSubmit } from "@/actions/JobApplication";

export default function Form() {

  return (
    <div className={classes["form-container"]}>
      <div className={classes['form-banner']}>
        <img src="/jobTrackWhite.png"  style={{width: '200px'}}/>
        <b>Enjoy a new phase of your life</b>
      </div>
        <div className={classes['form-header']}>
            <b>Join <span style={{color: "#5AB2FF"}}>The Team</span></b>
            <p>Unlock your next career opportunity! Complete the form below to showcase your skills and experience. </p>
        </div>
      <JobApplicationForm action={handleJobApplicationSubmit}/>
    </div>
  );
}
