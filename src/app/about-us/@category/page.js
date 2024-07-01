import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./page.module.css";
import { faComputer } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Category(){ 
    return ( 
        <div className={classes['category-container']}>
            <div className={classes['category-item']}>
                <span>01</span>
                <b>Programming</b>
                <p>+340 jobs offers</p>
                <Link href={'/jobs'}>SEARCH</Link>
            </div>

            <div className={classes['category-item']}>
            <span>02</span>
                <b>Data Science</b>
                <p>+63 jobs offers</p>
                <Link href={'/jobs'}>SEARCH</Link>
            </div>

            <div className={classes['category-item']}>
            <span>03</span>
                <b>UI/UX Design</b>
                <p>+19 jobs offers</p>
                <Link href={'/jobs'}>SEARCH</Link>
            </div>

            <div className={classes['category-item']}>
            <span>04</span>
                <b>Community Manager</b>
                <p>+92 jobs offers</p>
                <Link href={'/jobs'}>SEARCH</Link>
            </div>

            <div className={classes['category-item']}>
            <span>05</span>
                <b>Marketing</b>
                <p>+120 jobs offers</p>
                <Link href={'/jobs'}>SEARCH</Link>
            </div>

            <div className={classes['category-item']}>
            <span>06</span>
                <b>Product Manager</b>
                <p>+230 jobs offers</p>
                <Link href={'/jobs'}>SEARCH</Link>
            </div>
            
        </div>
    )
}