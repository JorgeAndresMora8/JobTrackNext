"use client"

import classes from "./SearchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import Category from "@/app/about-us/@category/page";

export default function SearchBar() {

  const [searchValue, setSearchValue] = useState("");
  const [searchCategory, setSearchCategory] = useState("");

  const { replace } = useRouter(); 


  const pathname = usePathname()
  const searchParams = useSearchParams()

  const handleSearchValue = (e) => setSearchValue(e.target.value);
  const handleSearchCategory = (e) => setSearchCategory(e.target.value)

  
  const handleSearch = async () => { 

    let params = new URLSearchParams(searchParams)

    if(searchCategory.length <= 0) { 
      params.delete('category')
    }else{ 
      params.set('category', searchCategory)
    }

    if(searchValue.length <= 0) { 
      params.delete('query')
    }else{ 
      params.set('query', searchValue)
    }

    
    replace(`${pathname}?${params.toString()}`)

  }

  return (
    <div className={classes["search-bar-container"]}>
      <b>Find your dream job here!</b>
      <p>
        Explore the latest jobs opening and apply for the best jobs
        opportunities <br />
        Avaliable today
      </p>
      <div className={classes["search-bar-area"]}>
        <div className={classes["search-bar-input-area"]}>
          <span>
            {" "}
            <FontAwesomeIcon
              style={{
                fontSize: "20px",
                marginRight: "10px",
                color: "#A9A9A9",
              }}
              icon={faSearch}
            ></FontAwesomeIcon>
          </span>
          <input defaultValue={searchParams.get('query')?.toString()} onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder="Search job" />
          <button onClick={handleSearch}>search</button>
        </div>
        <div className={classes["search-category-select-area"]}>
          <select onChange={handleSearchCategory}>
          <option value="">categories</option>
            <option value="programming">programming</option>
            <option value="design">UI/UX Design</option>
            <option value="data science">Data Science</option>
            <option value="community manager">Community Manager</option>
            <option value="marketing">Marketing</option>
            <option value="product manager">Product Manager</option>
          </select>
        </div>
      </div>
    </div>
  );
}
