import JobDetailItem from "@/Components/Jobs/JobDetail/job-detail";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import classes from "./page.module.css";
import { PORT } from "../../../../Config/Config";

async function getJob(id){ 
  const resp = await fetch(`https://job-track-next-l83o0mv0i-jorgemoras-projects.vercel.app/api/jobs/${id}`)
  const data = await resp.json(); 
  return data
}

export default async function JobDetail({ params }) {

  const job = await getJob(params.jobId)
  console.log(process.env.PORT)
  
  return (
    <div className={classes["job-detail-container"]}>
      <div className={classes["job-detail-header-option"]}>
        <Link href={'/jobs'}><FontAwesomeIcon style={{backgroundColor: "#2A85FF", fontSize:"1.45rem", padding: '0.4rem', borderRadius: '0.5rem', color: '#fff'}} icon={faArrowLeftLong} /></Link>
        <div>
        </div>
      </div>

      <JobDetailItem job={job[0]}/> 
      
    </div>
  );
}
