import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

const UserContext = React.createContext()

const dataAxios = axios.create()

dataAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})


class UserProvider extends Component {
    constructor(){
        super()
        this.state = {
            user: JSON.parse(localStorage.getItem("user")) || {},
            token: localStorage.getItem("token") || "",
            posts: [],
            errMsg: ""
        }
    }

    signup = credentials => {
        axios.post("/auth/signup", credentials)
            .then(response => {
                const { user, token } = response.data
                // localStorage.setItem("user", JSON.stringify(user))
                localStorage.user = JSON.stringify(user)
                localStorage.setItem("token", token)
                this.setState({ 
                    user, 
                    token,
                    errMsg: ""
                }, () => this.props.history.push("/posts"))

            })
            .catch(err => this.setState({ errMsg: err.response.data.errMsg }))
    }

    login = credentials => {
        axios.post("/auth/login", credentials)
            .then(response => {
                const { user, token } = response.data
                localStorage.setItem("user", JSON.stringify(user))
                localStorage.setItem("token", token)
                this.setState({ 
                    user, 
                    token,
                    errMsg: ""
                }, () => this.props.history.push("/posts"))
            })
            .catch(err => this.setState({ errMsg: err.response.data.errMsg }))
    }

    logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        this.setState({
            user: {},
            token: "",
            posts: []
        })
    }

    addPost = newPost => {
        dataAxios.post("/api/posts", newPost)
            .then(response => {
                this.setState(prevState => ({
                    posts: [...prevState.posts, response.data]
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    getUserPosts = () => {
        dataAxios.get("/api/posts")
            .then(res => {
                this.setState({
                    posts: res.data
                })
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    render(){
        return (
            <UserContext.Provider 
                value={{
                    ...this.state,
                    signup: this.signup,
                    login: this.login,
                    logout: this.logout,
                    addPost: this.addPost,
                    getUserPosts: this.getUserPosts
                }}>
                { this.props.children }
            </UserContext.Provider>
        )
    }
}

export default withRouter(UserProvider)

export const withUser = C => props => (
    <UserContext.Consumer>
        { value => <C {...props} {...value}/> }
    </UserContext.Consumer>
)