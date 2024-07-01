"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./ImagePicker.module.css";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import Image from "next/image";

export function ImagePicker({ label, name }) {

    const imageInput = useRef()

    const [picketImage, setPicketImage] = useState(false)

    function handleImageChange(event){ 
        const file = event.target.files[0]

        if(!file){ 
            setPicketImage(null)
            return;
        }

        let fileReader = new FileReader()

        fileReader.onload = () => { 
            setPicketImage(fileReader.result)
        }

        fileReader.readAsDataURL(file)

    }

    function handleImageClick(){ 
        imageInput.current.click()
    }

  return (
    <div className={classes["cv-input-container"]}>
      {/* <label htmlFor={name}>
        <FontAwesomeIcon style={{color: '#5AB2FF'}} icon={faFile} /> {label}
      </label> */}
      <div className={classes['input-area']}>
        { !picketImage && <p style={{margin: 0}}>Please select your CV </p> }
        { picketImage &&  <Image
      src={picketImage}
      width={60}
      height={70}
      alt="Picture of the author"
    /> }
      <input onChange={handleImageChange} ref={imageInput} className={classes['input-cv']} type="file" id={name} name={name} accept="image/png, image.jpg" />
      <button className={classes['cv-image-button']} type="button" onClick={handleImageClick}>Select your CV</button>
      </div>
    </div>
  );
}
