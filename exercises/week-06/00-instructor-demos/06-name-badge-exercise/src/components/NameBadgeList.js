import React from 'react'
import NameBadge from './NameBadge'

const NameBadgeList = props => {
    const style1 = {
        backgroundColor: "red"
    }
    const style2 = {
        backgroundColor: "violet"
    }

    const mappedBadges = props.badges.map((badge, i) => 
                    <NameBadge
                        style={i % 2 === 0 ? style1 : style2}
                        {...badge} 
                        key={i}/>)

    return (
        <div className="name-badge-list">
            { mappedBadges }
        </div>
    )
}

export default NameBadgeList