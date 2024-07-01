import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './job-item.module.css'
import { faBriefcase, faClock, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function JobItem({ job }){
  console.log(job)
    return ( 
        <div className={classes["job-list-item"]}>
            <div className={classes["job-item-header"]}>
              <img style={{ width: "45px" }} src={job.image} />
              <div className={classes["job-item-header-title-area"]}>
                <b>{ job.jobname }</b>
                <p>{ job.company }</p>
              </div>
            </div>
            <div className={classes['job-item-highlight']}>
                <p style={{color: "#1e1e1e"}}>{job.workMode} <FontAwesomeIcon  style={{color: "darkgray"}}icon={faBriefcase} /></p>
                <p style={{color: "#1e1e1e"}}>1-2 years <FontAwesomeIcon style={{color: "darkgray"}} icon={faClock}/></p>
                <p style={{color: "#1e1e1e"}}>{job.location} <FontAwesomeIcon style={{color: "darkgray"}} icon={faLocationDot}/></p>
            </div>
            <div className={classes["job-item-body"]}>
              <p>
                { job.jobDescription.slice(0, 200) }
              </p>
            </div>
            <div className={classes['job-item-footer']}>
                <p><span>{job.salary}k</span>/ Month</p>
                <button><Link href={`/jobs/${job.id}`}>Apply Now</Link></button>
            </div>
          </div>
    )
}