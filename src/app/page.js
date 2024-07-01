import { redirect } from "next";
import styles from "./page.module.css";
import classes from "./page.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  redirect;
  return (
    <main className={styles.main}>
      <div className={classes['banner-header']}>
        <b>Find Opportunities everywhere</b>
        <p>We’re connecting the best remote talent with the best remote companies.</p>
        <Link href={'/jobs'}>Browse Jobs</Link>
      </div>

    <div className={classes['intro-container']}>
      <div className={classes['intro-container-item']}>
        <b>Find Your Dream Job</b>
        <p>We’re connecting the best remote talent with the best We’re connecting the best remote talent with the bestWe’re connecting the best remote talent with the best</p>
        <Link className={classes['browse-jobs']} href={'/jobs'}>Browse Jobs Now</Link>
      </div>
      <div className={classes['intro-container-image-container']}>
        <img style={{width: '100%'}} src="/remoteJobImage.png"/>
      </div>
    </div>

      <div className={classes["review-container"]}>
        <b>Loved By <span>Remoters</span></b>
        <p className={classes['review-container-header-text']} >See all the people happy from all of this great platform</p>
        <div className={classes["review-area"]}>

          <div className={classes["review-item"]}>
            <div className={classes["review-item-header"]}>
              <img
                src="/ReviewPerson1.jpg"
                style={{ width: "60px", borderRadius: "1rem" }}
              />
              <b>Julia Martin</b>
              <span>Product Manager</span>
            </div>
            <div className={classes["review-item-body"]}>
              <p className={classes['review-item-body-text']}>
              JobTrack's personalized job recommendations matched me with my dream role. Smooth interface, helpful features. A game-changer...
              </p>
            </div>
            <div className={classes["review-item-footer"]}>
              <span>20-05-2023</span>
            </div>
          </div>

          <div className={classes["review-item"]}>
            <div className={classes["review-item-header"]}>
              <img
                src="/ReviewPerson3.jpg"
                style={{ width: "60px", borderRadius: "1rem" }}
              />
              <b>Luis Querella</b>
              <span>Full Stack Developer</span>
            </div>
            <div className={classes["review-item-body"]}>
              <p className={classes['review-item-body-text']}>
              JobTrack's tracking tools made managing applications effortless. Found my perfect remote job quickly. Highly recommend for job seekers
              </p>
            </div>
            <div className={classes["review-item-footer"]}>
              <span>20-05-2023</span>
            </div>
          </div>

          <div className={classes["review-item"]}>
            <div className={classes["review-item-header"]}>
              <img
                src="/ReviewPerson2.jpg"
                style={{ width: "60px", borderRadius: "1rem" }}
              />
              <b>Angelina Paez</b>
              <span>Data Scientes</span>
            </div>
            <div className={classes["review-item-body"]}>
              <p className={classes['review-item-body-text']}>
              JobTrack's remote job listings were extensive and relevant. The platform's ease of use and tailored suggestions greatly simplified my job search.
              </p>
            </div>
            <div className={classes["review-item-footer"]}>
              <span>20-05-2023</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
