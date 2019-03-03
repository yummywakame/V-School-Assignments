import React from 'react'
import Toggle from '../shared/Toggle.js'
import AddThingForm from './AddThingForm.js'

const AddThing = (props) => {
    const { title, imgUrl, handleChange, handleSubmit } = props
    
    return (
        <div className="card">

            <Toggle render={({ isToggled, toggler }) =>
                <>
                    {!isToggled
                        ? <>
                            <div className="left-align pink" onClick={toggler}>
                                <div className="waves-effect waves-light white-text pink btn-flat">
                                    <i className="material-icons left">keyboard_arrow_down</i>Add a Cat
                                </div>
                            </div>

                        </>
                        : <>
                            <div className="left-align pink" onClick={toggler}>
                                <div className="waves-effect waves-light white-text pink btn-flat">
                                    <i className="material-icons left">keyboard_arrow_up</i>Add a Cat
                                </div>
                            </div>

                            <div className="card-content">

                                <AddThingForm
                                    title={title}
                                    imgUrl={imgUrl}
                                    btnText="Save"
                                    handleChange={handleChange}
                                    handleSubmit={(event) => {
                                        handleSubmit(event)
                                        toggler()
                                    }}
                                />  
                                        
                                <button className="waves-effect waves-light pink secondary-content btn close-button" onClick={toggler}><i className="material-icons left">close</i>close</button>

                            </div>

                        </>
                    }
                </>
            } />

        </div>
    )
}

export default AddThing