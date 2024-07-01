"use server" 

export default async function SearchJobs(str){
    let searchQuery = `${str}`

    let results = await fetch(`http://localhost:8080/jobs/search?q=${searchQuery}`)

    let resp = results.json()

    return resp
}