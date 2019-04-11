import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = (props) => {
    const { token, path, redirectTo, component: Component, ...rest} = props
    return (
        token 
        ?
            <Route path={path} render={routerProps => <Component {...routerProps} {...rest}/>}/>
        :
            <Redirect to={redirectTo}/>
    )
}

export default ProtectedRoute