import React from 'react'

const AddThingForm = (props) => {
    const { title, imgUrl, handleChange, handleSubmit, btnText } = props
    
    return (

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={handleChange}
                        placeholder="Title"
                        required />

                    <input
                        type="text"
                        name="imgUrl"
                        value={imgUrl}
                        onChange={handleChange}
                        placeholder="Image Url"
                        required />

                    <button className="waves-effect waves-light light-blue btn"><i className="material-icons left">save</i>{btnText}</button>
                </form>

    )
}

export default AddThingForm