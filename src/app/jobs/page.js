import SearchBar from "@/Components/SearchBar/Searchbar";
import classes from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import {
  faBriefcase,
  faClock,
  faLocationDot,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import JobList from "@/Components/Jobs/JobList/job-list";
import { unstable_noStore as noStore } from "next/cache";
import SearchJobs from "@/actions/SearchJobs";
import SuggestedJobs from "@/Components/Jobs/SuggestedJobs/SuggestedJobs";

export default async function JobHome({ searchParams }) {
  const url = `http://localhost:8080/jobs/search?q=${ searchParams.query ? searchParams.query : ""}&category=${ searchParams.category ? searchParams.category : "" }`;

  const response = await fetch(url, { cache: "no-store" });

  if (!response.ok) {
    throw new Error("failed to fetch jobs");
  }

  const jobs = await response.json();

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
