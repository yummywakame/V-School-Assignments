import React from 'react'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            favMovie: "",
            favActor: "",
            isDead: false,
            gender: "",
            favCity: "",
            actorCollection: []
        }
    }

    handleChange = (event) => {
        const { name } = event.target
        const value = (event.target.type === "checkbox") ? event.target.checked : event.target.value
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const actorObj = {
            favMovie: this.state.favMovie,
            favActor: this.state.favActor,
            isDead: this.state.isDead,
            gender: this.state.gender,
            favCity: this.state.favCity
        }

        this.setState(prevState => {
            return {
                actorCollection: [...prevState.actorCollection, actorObj],
                favMovie: "",
                favActor: "",
                isDead: false,
                gender: "",
                favCity: ""
            }
        })
    }

    render() {

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="favMovie"
                        value={this.state.favMovie}
                        onChange={this.handleChange}
                        placeHolder="Favorite Movie"
                    />
                    <input
                        type="text"
                        name="favActor"
                        value={this.state.favActor}
                        onChange={this.handleChange}
                        placeHolder="Favorite Actor"
                    />
                    <label for="isDead">Is this actor dead?</label>
                    <input
                        type="checkbox"
                        name="isDead"
                        checked={this.state.isDead}
                        onChange={this.handleChange}
                    />
                    <label for="gender">What is their gender?</label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        onChange={this.handleChange}
                        checked
                    /> Male
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        onChange={this.handleChange}
                    /> Female
                    <input
                        type="radio"
                        name="gender"
                        value="other"
                        onChange={this.handleChange}
                    /> Other
                    <select name="favCity" onChange={this.handleChange}>
                        <option>Choose their favorite city:</option>
                        <option value="Paris">Paris</option>
                        <option value="Amsterdam">Amserdam</option>
                        <option value="Cape Town">Cape Town</option>
                        <option value="Reykajavik">Reykajavik</option>
                    </select>
                    <button>Submit</button>
                </form>

                <div>
                    {this.state.actorCollection.map((item, key) => {
                        return (
                            <div>
                                <h1>{item.favMovie}</h1>
                                <h2>{item.favActor}</h2>
                                <p>Dead? {item.isDead.toString()}</p>
                                <p>Fav City: {item.favCity}</p>
                                <p>Gender: {item.gender}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default App