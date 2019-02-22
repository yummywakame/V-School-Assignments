import React from 'react'
import VacationList from './VacationList.js'

const App = () => {

    let vacationSpots = [
        {
            place: "Hyderabad (HYD)",
            price: 1125,
            imgURL: "https://c.ekstatic.net/shared/images/destination/v1/airports/HYD/510x340.jpg"
        }, {
            place: "Cape Town (CPT)",
            price: 1339,
            imgURL: "https://c.ekstatic.net/shared/images/destination/v1/airports/CPT/510x340.jpg"
        }, {
            place: "Dubai (DXB)",
            price: 1250,
            imgURL: "https://c.ekstatic.net/shared/images/destination/v1/airports/DXB/510x340.jpg"
        }, {
            place: "Colombo (CMB)",
            price: 7575,
            imgURL: "https://c.ekstatic.net/shared/images/destination/v1/airports/CMB/510x340.jpg"
        }, {
            place: "Entebbe (EBB)",
            price: 9052,
            imgURL: "https://c.ekstatic.net/shared/images/destination/v1/airports/EBB/510x340.jpg"
        }, {
            place: "Sialkot (SKT)",
            price: 1100,
            imgURL: "https://c.ekstatic.net/shared/images/destination/v1/airports/SKT/510x340.jpg"
        }
    ]
    
    return (
        <div>
            <h1>Travel Cards</h1>
            <VacationList data={vacationSpots} />
        </div>
    )
}

export default App