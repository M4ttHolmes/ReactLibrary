import React from "react";
import ChildComponent from "./ChildComponent/ChildComponent";

class LifecycleMethods extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            baseURL: "https://api.openweathermap.org/data/2.5/weather",
            city: "Indianapolis",
            apiKey: "49a9f688dda98bbf5b08e9dab96e0d10",
            main: {},
            weather: [],
            time: null
        }
    }

    componentDidMount() {
        this.fetchInterval = setInterval(() => {
            fetch(`${this.state.baseURL}?q=${this.state.city}&units=imperial&appid=${this.state.apiKey}`)
                .then(response => response.json())
                .then(json => this.setState({
                    main: json.main,
                    weather: json.weather
                }))
                .catch(err => console.log(err))
        }, 15000)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log((prevState.main.temp, this.state.main.temp));

        let localTime = new Date().toLocaleTimeString();

        if (prevState.main.temp !== this.state.main.temp) {
            console.log("State has changed.");
            this.setState({
                time: localTime
            })
        }
    }

    componentWillUnmount() {
        console.log("Clearing interval");
        clearInterval(this.fetchInterval);
    }

    render() {
        return(
            <div className="main">
                <div className="mainDiv" style={{textAlign: "center"}}>
                    <ChildComponent city={this.state.city} main={this.state.main} weather={this.state.weather} time={this.state.time} />
                </div>  
            </div>
        )
    }
}



export default LifecycleMethods;