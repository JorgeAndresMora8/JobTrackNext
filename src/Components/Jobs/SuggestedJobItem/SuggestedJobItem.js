import Link from "next/link";
import classes from "./suggestedJobItem.module.css";

export default function SuggestedJobsItem({job}) {
  return (
    
      <div className={classes["suggested-job-item"]}>
        <div className={classes["suggested-job-item-header"]}>
          <img src={job.image} style={{ width: "30px" }} />
          <b>{job.jobname}</b>
        </div>
        <div className={classes["suggested-job-item-body"]}>
          <p>
            {job.jobDescription.slice(0, 160)}
          </p>
        </div>
        <div className={classes["suggested-job-item-footer"]}>
          <p>{job.date}</p>
          <Link href={`/jobs/${job.id}`}>view</Link>
        </div>
    </div>
  );
}
