import Link from "next/link";
import classes from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={classes["footer-container"]}>
      <div className={classes["footer-item"]}>
        <b>A lot of options</b>
        <p>
          Your gateway to endless career opportunities. Find jobs, apply easily,
          thrive. Let's start your journey!
        </p>
      </div>

      <div className={classes["footer-item"]}>
        <b>Navigation</b>
        <ul className={classes["nav-footer"]}>
          <li>
            <Link href={"/jobs"}>jobs</Link>
          </li>
          <li>
            <Link href={"/about-us"}>about us</Link>
          </li>
        </ul>
      </div>

      <div className={classes["footer-item"]}>
        <b>Subscribe</b>
        <p>Your gateway to endless career opportunities.</p>
        <div>
          {" "}
          <input type="text" placeholder="Email" />
          <button>subscribe</button>
        </div>
      </div>

      <div className={classes["footer-item"]}>
        <b>Social Media</b>
        <div style={{ width: "auto", height: "auto", display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
          <img style={{ width: "30px" }} src="/LinkedinIcon.png" />
          <img style={{ width: "30px" }} src="/InstagramIcon.png" />
          <img style={{ width: "30px" }} src="/FacebookIcon.png" />
        </div>
      </div>
    </footer>
  );
}
