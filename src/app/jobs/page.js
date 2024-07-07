import JobList from "@/Components/Jobs/JobList/job-list";
import SuggestedJobs from "@/Components/Jobs/SuggestedJobs/SuggestedJobs";
import SearchBar from "@/Components/SearchBar/Searchbar";
import SearchJobs from "@/actions/SearchJobs";
import {
  faBriefcase
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./page.module.css";

const isDevelopment = process.env.NODE_ENV !== 'production';
const apiUrl = isDevelopment
  ? process.env.NEXT_PUBLIC_API_URL
  : `https://${process.env.VERCEL_URL}`;

async function getJobs(){ 
  try {
    const resp = await fetch(`${apiUrl}/api/jobs`);
    if (!resp.ok) {
      throw new Error(`HTTP error! Status: ${resp.status}`);
    }
    const data = await resp.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch jobs:', error);
    return []; // Return an empty array as a fallback
  }
}

export default async function JobHome() {

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
