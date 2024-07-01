import Link from "next/link";
import classes from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowRightArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutUs() {
  return (
    <>
      <div className={classes["about-us-container"]}>
        <div className={classes["about-us-image-area"]}>
          <img src="/headerRemoteJob.png" style={{width: '100%'}}/>
        </div>

        <div className={classes["about-us-text-area"]}>
          <b><span style={{color: "#404DFE"}}>Grow</span> Your Carreer</b>
          <p>
            Enjoy the freedom and flexibility of work that adapts to your
            lifestyle. Be free to choose the projects to commit to, making sure
            they match your goals and aspirations. On top of that, our
            remote-forever positions leave ample room for living your best life
            — on the job and beyond it.
          </p>
          <Link href={"/jobs"}>
            SEE ALL OPORTUNITYES
          </Link>
        </div>
      </div>

      <div className={classes["company-logo-container"]}>
        <div className={classes["company-logo-item"]}>
          <img src="/microsoftLogo.jpg" style={{width: '100%'}}/>
        </div>

        <div className={classes["company-logo-item"]}>
          <img src="/amazonLogo.jpg" style={{width: '90%'}}/>
        </div>

        <div className={classes["company-logo-item"]}>
          <img src="/Meta_Inc._logo.jpg" style={{width: '100%'}}/>
        </div>

        <div className={classes["company-logo-item"]}>
          <img src="/pedidos-ya-logo.png" style={{width: '70%'}}/>
        </div>
      </div>

      <div className={classes["about-us-container"]}>
        <div className={classes["about-us-image-area"]}>
        <img src="/community.png" style={{width: '100%'}}/>
        </div>

        <div className={classes["about-us-text-area"]}>
          <b><span style={{color: "#404DFE"}}>Find</span> your perfect role</b>
          <p>
            Enjoy the freedom and flexibility of work that adapts to your
            lifestyle. Be free to choose the projects to commit to, making sure
            they match your goals and aspirations. On top of that, our
            remote-forever positions leave ample room for living your best life
            — on the job and beyond it.
          </p>
          <Link href={"/jobs"}>
            BROWSE JOBS <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>

      <div className={classes["how-we-work-container"]}>
        <div className={classes["how-we-work-header"]}>
          <b>How We Hire</b>
        </div>
        <div className={classes["how-we-work-body"]}>
          <div className={classes["how-we-work-body-item"]}>
            <span>01</span>
            <b>Apply</b>
            <p>Debes aplicar a nuestras vacantes disponibles, y pasar las pruebas en línea que correspondan. </p>
          </div>

          <div className={classes["how-we-work-body-item"]}>
            <span>02</span>
            <b>Interviews</b>
            <p>Debes aplicar a nuestras vacantes disponibles, y pasar las pruebas en línea que correspondan. </p>
          </div>

          <div className={classes["how-we-work-body-item"]}>
            <span>03</span>
            <b>Get a Opportunity</b>
            <p>Debes aplicar a nuestras vacantes disponibles, y pasar las pruebas en línea que correspondan. </p>
          </div>

          <div className={classes["how-we-work-body-item"]}>
            <span>04</span>
            <b>Join Us!</b>
            <p>Debes aplicar a nuestras vacantes disponibles, y pasar las pruebas en línea que correspondan. </p>
          </div>
        </div>
      </div>

      <div className={classes["about-us-container"]}>
        <div className={classes["about-us-image-area"]}>
        <img src="/remoteComputer.png" style={{width: '100%'}}/>
        </div>

        <div className={classes["about-us-text-area"]}>
          <b>join the <span style={{color: "#404DFE"}}>Anywhere</span> community</b>
          <p>
            Enjoy the freedom and flexibility of work that adapts to your
            lifestyle. Be free to choose the projects to commit to, making sure
            they match your goals and aspirations. On top of that, our
            remote-forever positions leave ample room for living your best life
            — on the job and beyond it.
          </p>
          <Link href={"/jobs"}>
            BROWSE JOBS <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>
    </>
  );
}
