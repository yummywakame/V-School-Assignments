import React, { Component } from 'react'
import { withDatas } from './BigDataProvider.js'
import './style.css'

class App extends Component {
    componentDidMount(){
        this.props.getDatas()
    }

    render(){
        return (
            <div>
                <h1>{this.props.errMsg}</h1>
                <div classNames="loader"></div>
                {/* <button onClick={this.props.getDatas}>Get Rick and morty stuff</button> */}
                <div>{
                    this.props.characters.length 
                        ? this.props.characters.map(c => <h1 style={{color: "teal"}}>{c.name}</h1>) 
                        : <div className="spinner"></div>}
                </div>
                <div>{this.props.locations.map(l  => <h1 style={{color: 'blue'  }}>{l.name}</h1>)}</div>
                <div>{this.props.episodes.map(e   => <h1 style={{color: 'green' }}>{e.name}</h1>)}</div>
                <div>{this.props.swVehicles.map(v => <h1 style={{color: 'red'   }}>{v.name}</h1>)}</div>
                <div>{this.props.swFilmData.map(f => <h1 style={{color: 'purple'}}>{f.title}</h1>)}</div>
            </div>
        )
    }
}

export default withDatas(App)