export default function CategoryLayout({ category, latest }){ 
    return ( 
        <div>
            <h1>{category}</h1>
            <h1>{latest}</h1>
        </div>
    )
}