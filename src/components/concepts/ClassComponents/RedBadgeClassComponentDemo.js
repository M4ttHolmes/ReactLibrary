import React, { Component } from 'react';
import {FiThumbsUp, FiThumbsDown} from 'react-icons/fi';

export default class ClassComponentDemo extends Component {   // must extend react component    // uses Export like functional components
    constructor(props) {                                      // will often have a constructor
        super(props);                                         // class components are considered the "react way" of writing components / known as intelligent components
        this.state = { incrementCount: 0, decrementCount: 0 };
    }

    incrementCount = () => {                                  // have lifecycle hooks/methods, different phases in the lifecycle where different events should happen
        this.setState(
            { incrementCount: this.state.incrementCount + 1 }
        );
    };

    decrementCount = () => {
        this.setState(
            { decrementCount: this.state.decrementCount - 1 }
         );
    };

    render() {                                                  // must always have a render method
        console.log("[Re-render]");                             // multiple class components can be in one file, but only one should be exported in each file. 
        return (
            <div className="main">
                <div className="mainDiv">                      
                    <ClassComponentNotes />                   
                    <hr />
                    <h1>Like it!!!</h1>
                    <h4>
                        <button onClick={this.incrementCount}>
                            <FiThumbsUp /> 
                            {this.state.incrementCount}
                        </button>
                    </h4>
                    <h1>Dislike it!!!</h1>
                    <h4>
                        <button onClick={this.decrementCount}>
                            <FiThumbsDown />
                            {this.state.decrementCount}
                        </button>
                    </h4>
                </div>
            </div>
        );
    }
}

const ClassComponentNotes = function () {
    return (
        <div>
            <h1>Class Components</h1>

            <p>Class components are considered the "React way" of writing components.</p>
            <dl>
                <dt>ES6 JS Classes</dt>
                <dd>Build on these, must understand them</dd>
                <dt>must extend Component</dt>
                <dd>Class components need to extend the React Component.</dd>   
                <dt>render()</dt>   
                <dd>Class components must always have a render method</dd>
                <dt>export</dt>
                <dd>Only one class component exported per file.</dd>
            </dl>
        </div>
    )
}