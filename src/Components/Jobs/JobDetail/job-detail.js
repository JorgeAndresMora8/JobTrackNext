import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './job-detail.module.css'
import { faClock, faHandHoldingDollar, faWifi } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function JobDetailItem({ job }){ 
    // console.log(job.jobname)
    return ( 
        <>
        <div className={classes["job-detail-area"]}>
        <div className={classes["job-detail-header"]}>
          <img src={job.image} style={{ width: "80px" }} />
          <p className={classes["job-detail-name"]}>
            { job.jobname }
          </p>
          <p className={classes["job-detail-company"]}>{job.company}</p>
          <p className={classes["job-detail-location"]}>{job.location}</p>
        </div>
        <div className={classes["job-detail-hightlight"]}>
          <div className={classes["job-detail-hightlight-item"]}>
            <FontAwesomeIcon className={classes['icon-detail-job']} icon={faClock} />
            <p>{job.workMode}</p>
          </div>

          <div className={classes["job-detail-hightlight-item"]}>
            <FontAwesomeIcon className={classes['icon-detail-job']} icon={faWifi}/>
            <p>{job.location}</p>
          </div>

          <div className={classes["job-detail-hightlight-item"]}>
          <FontAwesomeIcon className={classes['icon-detail-job']} icon={faHandHoldingDollar}/>
            <p>{job.salary}000$</p>
          </div>
        </div>
      </div>
      <div className={classes["job-detail-body"]}>
        <div className={classes["job-detail-body-description"]}>
          <b>Who We Are</b>
          <p>
            { job.companyDescription }
          </p>
        </div>

        <div className={classes["job-detail-body-description"]}>
          <b>Description</b>
          <p>
            {job.jobDescription}
          </p>
        </div>

        <div className={classes["job-detail-body-description"]}>
          <b>Jobs Skills</b>
          <p>
           {job.requirements}
          </p>
        </div>
        
      </div>
      <div className={classes['btn-detail-option']}>
      <button className={classes['btn-apply-now']}>
        {/* <Link href={`/jobs/${job.id}/form`}>Apply Now</Link> */}
      </button>
      <button className={classes['btn-apply-now']}>
        {/* <Link href={job.resource}>About the company</Link> */}
      </button>
      </div>
      </>
    )
}