import React, { useState } from "react"
import { useParams } from "react-router-dom";

function HostVanDetails() {

    const { id } = useParams()
    const [currentVan, setCurrentVan] = useState(null)

    React.useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setCurrentVan(data.vans))
    }, [])
    
   

    return (
        <div>
            <img src={currentVan.imageUrl} width={150} />
            <h2>{currentVan.name}</h2>
            <p>{currentVan.price}</p>
            <p>{currentVan.type}</p>
        </div>
    )
}

export default HostVanDetails;