import JobList from "@/Components/Jobs/JobList/job-list";
import SuggestedJobs from "@/Components/Jobs/SuggestedJobs/SuggestedJobs";
import SearchBar from "@/Components/SearchBar/Searchbar";
import SearchJobs from "@/actions/SearchJobs";
import {
  faBriefcase
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import classes from "./page.module.css";
import { PORT } from "../../../Config/Config";

async function getJobs(){ 
  const resp = await fetch(`http://localhost:${PORT}/api/jobs`)
  const data = await resp.json();
  return data
}

export default async function JobHome({ searchParams }) {

  const jobs = await getJobs()

  return (
    <div className={classes["home-job-container"]}>
      <div className={classes["job-list-container"]}>
        <SearchBar searchJobs={SearchJobs} />
        <JobList jobs={jobs} />
      </div>
      <div className={classes["job-suggest-list-container"]}>
        <div className={classes["container-header"]}>
          <b>Latest Jobs</b>
          <span>
            <FontAwesomeIcon
              className={classes["suggested-job-icon"]}
              icon={faBriefcase}
            />
          </span>
        </div>

        <SuggestedJobs />
      </div>
      
    </div>
  );
}
