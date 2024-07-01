import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./page.module.css";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function SuccessStatus() {
  return (
    <div className={classes["status-container"]}>
      <div className={classes["status-item"]}>
        <FontAwesomeIcon className={classes["status-item-title-icon"]} icon={faCircleCheck} />
        <b  className={classes["status-item-title"]}>
          Application <br />
          Send Succesfully
        </b>
        <p className={classes["status-item-text"]}>
          Application Sent! Explore More Remote Job Opportunities Below for
          Exciting Career Paths. Best of Luck on Your Journey!
        </p>

        {/* <div className={classes["job-suggest-list"]}>
          <div className={classes["job-suggest-item"]}>
            <div className={classes["suggested-job-item-header"]}>
              <img src="./meta.jpg" style={{ width: "45px" }} />
              <b>Junior UX/UI</b>
            </div>
            <div className={classes["suggested-job-item-body"]}>
              <p>
                Seeking talented Software Engineer for Microsoft, responsible
                for developing innovative software solutions.
              </p>
            </div>
            <div className={classes["suggested-job-item-footer"]}>
              <p>23 days ago</p>
              <button>
                <FontAwesomeIcon icon={faCircleCheck} />
              </button>
            </div>
          </div>
        </div> */}
        <div className={classes["btn-container"]}>
          <Link href={'/jobs'}>EXPLORE NEW Opportunities</Link>
         
        </div>
      </div>
    </div>
  );
}
