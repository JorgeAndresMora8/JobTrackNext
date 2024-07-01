import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './JobsNotFound.module.css'
import { faSadTear } from '@fortawesome/free-solid-svg-icons'

export default function JobsNotFound(){ 
    return (
        <div className={classes['not-found-container']}>
            <FontAwesomeIcon className={classes['not-found-icon']} icon={faSadTear} />
            <b>Jobs <span>Not Found</span></b>
        </div>
    )
}