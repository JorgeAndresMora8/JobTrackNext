import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './page.module.css'
import { faBriefcase, faClock, faLocationDot, faUser } from '@fortawesome/free-solid-svg-icons'

export default function UserPage(){ 
    return (
        <div className={classes['user-info-container']}>
            <div className={classes['personal-info-container']}>
            <div className={classes['personal-info-header']}>
                <FontAwesomeIcon className={classes['personal-info-header-icon']} icon={faUser} />
                <b>Jorge Mora</b>
                <span>Full Stack Developer</span>
                </div> 
                <div className={classes['personal-info-body']}>
                <span>Email</span>
                <b>jorgeandresmm2002@gmail.com</b>
                <span>Phone</span>
                <b>+58 414 9493680</b>
                <span>Location</span>
                <b>Caracas, Venezuela</b>
                </div> 
            </div>
            <div className={classes['account-info-container']}>
            <div className={classes['personal-info-header']}>
                <p>Account Information</p>
                </div> 
            <div className={classes['account-info-item']}>
                <p>Login</p>
                <span>2024-10-3</span>
            </div>

            <div className={classes['account-info-item']}>
                <p>email</p>
                <span>jorgeandresmm2002@gmail.com</span>
            </div>

            <div className={classes['account-info-item']}>
                <p>Email Status</p>
                <span>Approved</span>
            </div>

            <div className={classes['account-info-item']}>
                <p>Profile ID</p>
                <span>234-452</span>
            </div>
            </div>

            <div className={classes['latest-job-application']}>
                <b>Latest Job Applications</b>
                <div className={classes["job-list-item"]}>
            <div className={classes["job-item-header"]}>
              <img style={{ width: "45px" }} src='R.png' />
              <div className={classes["job-item-header-title-area"]}>
                <b>Frontend Software Engineer</b>
                <p>Microsoft</p>
              </div>
            </div>
            <div className={classes['job-item-highlight']}>
                <p style={{color: "#61677A"}}>Full Time <FontAwesomeIcon icon={faBriefcase}/></p>
                <p style={{color: "#61677A"}}>1-2 years <FontAwesomeIcon icon={faClock}/></p>
                <p style={{color: "#61677A"}}>NY, USA <FontAwesomeIcon icon={faLocationDot}/></p>
            </div>
            <div className={classes["job-item-body"]}>
              <p>
              Exciting opportunity at Apple for a talented UI/UX designer! Join our innovative team shaping user experiences. Apply now to be part of revolutionizing technology!
              </p>
            </div>
            <div className={classes['job-item-footer']}>
            <p>Application Send</p>
                <p>Waiting for answer</p>
            </div>
          </div>
            </div>
        </div>
    )
}