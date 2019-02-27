import React from 'react'
import Badge from './Badge.js'

const Badges = (props) => {
    const mappedNames = props.names.map((names, key) =>
        <Badge
            key={key}
            firstName={names.firstName}
            lastName={names.lastName}
            email={names.email}
            pob={names.pob}
            phone={names.phone}
            favFood={names.favFood}
            about={names.about}
            colorBorder={names.colorBorder}
            colorHeader={names.colorHeader}
        />
    )

    return (
        <div className="badge-container">
            {mappedNames}
        </div>
    )
}

export default Badges