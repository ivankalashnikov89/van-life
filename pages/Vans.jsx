import React from "react"
import { Link, useSearchParams } from "react-router-dom"


export function loader(){
    return "Vans data";
}

export default function Vans() {

    const [searchParams, serSearchParams] = useSearchParams();
    const [vans, setVans] = React.useState([])

    const typeFilter = searchParams.get("type");
    console.log(typeFilter);

    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])
    

    /*Filter vans */
    const displayedVans = typeFilter 
    ? vans.filter(van => van.type.toLowerCase() === typeFilter)
    : vans
  
    const vanElements = displayedVans.map(van => (
        <div key={van.id} className="van-tile">
            <Link to={van.id} state={{ search: `?${searchParams.toString()}`, type: typeFilter }}>
                <img src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            {/*Link to filtered lists */}
            <div className="van-list-filter-buttons">
                <Link to="?type=simple" className={
                        `van-type simple ${typeFilter === "simple" ? "selected" : ""}`
                    }>Simple</Link>
                <Link to="?type=luxury" className={
                        `van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`
                    }>Luxury</Link>
                <Link to="?type=rugged" className={
                        `van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`
                    }>Rugged</Link>
                {typeFilter ? <Link to="." className="van-type clear-filters">Clear filter</Link> : null}
            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}