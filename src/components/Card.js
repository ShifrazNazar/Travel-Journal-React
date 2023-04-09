import React from "react"

export default function Card(props) {
    return (
        <body className="all-cards">
        <main className="card-container">
            <img className="imageUrl" src={props.image} alt={props.title}></img>
            <div className="card-content">
                <p className="card-location">{props.location}
                <a className="googleMapsUrl" href={props.map}>View on Google Maps</a></p>
                <h1 className="title">{props.title}</h1>
                <p className="date">{props.startDate} - {props.endDate}</p>
                <p className="description">{props.description}</p>
            </div>
        </main>
        </body>
    )
}