import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import Nav from './Nav'


function FoodItems() {
    const log = localStorage.getItem('log')

    const [data, setData] = useState({ data: [] })

    const getData = () => {
        fetch('data/feed.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setData({ data })
            }
            );
    }



   

    return (
        console.log(data),
        <div>
            <Nav />
            <div className="fooditem">
                <div className="row">
                    {
                        data && data.data.length > 0 && data.data.map((item) =>
                            <div className="card">
                                <img key={item.image} src={`../assests/${item.image}`} className="card-img-top" alt={item.image}></img>
                                <div className="card-body">
                                    <h5>{item.name}</h5>
                                    <p>Price : {item.price} </p>
                                    <button className="btn btn-primary">+</button>
                                    <button className="btn btn-secondary">-</button>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default FoodItems
