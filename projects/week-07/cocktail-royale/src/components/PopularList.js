import React from 'react'
import { withListData } from '../context/BigDataProvider.js'

const PopularList = (props) => {

    return (
        <main className="container">

            <h1 className="glow">Popular Cocktails</h1>
            <div id="drink-list" className="row">

                {props.popularList.map((item) =>

                    <div key={item.idDrink} className="col s12 m6 l4">

                        <div className="card waves-effect black">
                            <div className="card-image">
                                <img src={item.strDrinkThumb} alt="{item.strDrink}" />
                            </div>
                            <div className="card-content">
                                <h2>{item.strDrink}</h2>
                            </div>
                        </div>
                    </div>

                )}


            </div>

        </main>
    )
}

export default withListData(PopularList)