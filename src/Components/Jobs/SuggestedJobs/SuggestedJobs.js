import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SuggestedJobsItem from "../SuggestedJobItem/SuggestedJobItem";
import classes from "./suggested-jobs.module.css";
import { faClock, faLocation, faMoneyBill } from "@fortawesome/free-solid-svg-icons";

export default async function SuggestedJobs() {

  const url = `http://localhost:8080/jobs/search?category=programming`;

  const response = await fetch(url, { cache: "no-store" });

  if (!response.ok) {
    throw new Error("failed to fetch jobs");
  }

  const jobs = await response.json();

  return (
    <>
    <div className={classes["suggested-job-list"]}>
      { jobs.map((job) => <SuggestedJobsItem job={job}/>) }
    </div>
    <div className={classes["suggested-job-list"]}>
    <div className={classes['suggest-job-banner']}>
      <img src="/suggestedJobBanner.png" style={{width: '90%', borderRadius: '1rem'}}/>
      <div className={classes['suggest-job-banner-text-area']}>
        <b>Finds Remote Jobs</b>
        <p>
Remote jobs offer flexibility, work-life balance, and access to global opportunities, fostering productivity and reducing commute stress.</p>
        <ul>
          <li><FontAwesomeIcon icon={faClock} /> Work on your way</li>
          <li><FontAwesomeIcon icon={faLocation} /> Be wherever you want to be</li>
          <li><FontAwesomeIcon icon={faMoneyBill} /> Earn competitive incomes</li>
        </ul>
      </div>
    </div>
  </div>
  </>
    
  );
}
