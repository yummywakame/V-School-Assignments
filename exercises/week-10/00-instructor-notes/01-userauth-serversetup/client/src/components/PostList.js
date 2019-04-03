import React, {Component} from 'react'
import PostForm from './PostForm.js'

class PostList extends Component {
    constructor(){
        super()
        this.state = {
            caption: "",
            imgUrl: ""
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()

        this.setState({
            caption: "",
            imgUrl: ""
        })
    }

    render(){
        return (
            <div>
                <PostForm 
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    caption={this.state.caption}
                    imgUrl={this.state.imgUrl}
                />
                POST LIST
            </div>
        )
    }
}

export default PostList