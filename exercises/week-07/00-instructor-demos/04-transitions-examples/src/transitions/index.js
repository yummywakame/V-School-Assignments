import { TransitionGroup, CSSTransition } from 'react-transition-group'
import React from 'react'


export const PageFade = props => {
    const { location, children } = props
    return (
        <TransitionGroup component={null}>
            <CSSTransition
                in={true}
                appear={true}
                classNames="page-fade"
                timeout={600}
                key={location.key}>
                { children }
            </CSSTransition>
        </TransitionGroup>
    )
}

