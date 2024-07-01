import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./page.module.css";
import { faArrowLeftLong, faClock, faHandHoldingDollar, faWifi } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import JobDetailItem from "@/Components/Jobs/JobDetail/job-detail";
import { notFound } from "next/navigation";

export default async function JobDetail({ params }) {

  const response = await fetch(`http://localhost:8080/jobs/${params.jobId}`, { cache: 'no-store' })

  if(!response.ok){ 
    throw new Error('failed to fetch job details')
  }

  const job = await response.json()
  
  return (
    <div className={classes["job-detail-container"]}>
      <div className={classes["job-detail-header-option"]}>
        <Link href={'/jobs'}><FontAwesomeIcon style={{backgroundColor: "#2A85FF", fontSize:"1.45rem", padding: '0.4rem', borderRadius: '0.5rem', color: '#fff'}} icon={faArrowLeftLong} /></Link>
        <div>
        </div>
      </div>

      <JobDetailItem job={job}/> 
      
    </div>
  );
}
