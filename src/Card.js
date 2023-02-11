import React from "react";
import locationIcon from "./images/location-icon.png"

export default function Card(props) {
    let datesSeparator;
    if(props.item.startDate === props.item.endDate) {
        props.item.endDate = "";
        datesSeparator = "";
    } else {
        datesSeparator = " - ";
    }

    return (
        <section className="card">
            <div>
                <img src = {props.item.imageUrl} className="card--image" alt=""/>
            </div>
            <div>
                <div className="card--info">
                    <img src={locationIcon} className="card--icon" alt=""/>
                    <p className="card--location">{props.item.location}</p>
                    <a className="card--link" href={props.item.googleMapsUrl} target="_blank" rel="noreferrer">View on Google Maps</a>
                </div>
                <h1 className="card--title bold">{props.item.title}</h1>
                <div className="card--dates">
                    <p className="card--start bold">{props.item.startDate}</p>
                    {datesSeparator}
                    <p className="card--end bold">{props.item.endDate}</p>
                </div>
                <p className="card--description">{props.item.description}</p>
            </div>
        </section>
    )
}