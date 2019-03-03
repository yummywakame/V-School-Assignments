import React from 'react'
import AuthForm from './AuthForm.js'
import Toggle from './shared/Toggle.js'
import Form from './shared/Form.js'

const App = () => {
    return (
        <div className="auth-form-container">
            <Toggle render={({isToggled, toggler}) => 
                <>
                { !isToggled 
                    ?   <Form 
                            render={props => <AuthForm {...props} toggler={toggler} formTitle="Sign Up"/>}
                            inputs={{ username: "", password: "" }}
                            submit={inputs => alert(inputs.username)}
                        />
                    :   <Form 
                            render={props => <AuthForm {...props} toggler={toggler} formTitle="Login"/> }
                            inputs={{ username: "", password: "" }}
                            submit={inputs => alert(inputs.username)}
                        />
                }
                </>
            }/>
        </div>
    )
}


export default App