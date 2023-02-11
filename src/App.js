import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import data from "./data";
import Footer from "./Footer";
import "./styles.css";

export default function App() {
    const cards = data.map(item => {
        return <Card 
            key = {item.id}
            item = {item}
        />
    });

    return (
        <div>
            <Navbar />
            <section className="cards-list">
                {cards}
            </section>
            <Footer />
        </div>   
    )
}