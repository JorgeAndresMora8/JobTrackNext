import JobItem from '../JobItem/job-item'
import JobsNotFound from '../NotFound/JobsNotFound'
import classes from './job-list.module.css'

export default function JobList({ jobs }){ 

    return ( 
        <div className={classes["job-list"]}>
          { jobs.length <= 0 ? <JobsNotFound /> : jobs.map((job) => <JobItem key={job.id} job={job}/>) }
        </div>
    )
}