import React, { Component } from 'react';
import './css/App.css';
import CandlestickController from "./component/boxplotController";
import ScatterController from "./component/scatterController";
import BarController from "./component/barController";
import LineController from "./component/lineController"
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';

class App extends Component {

    constructor () {

        super();
        this.state = {

            box: 'block',
            scatter: 'none',
            bar: 'none',
            line: 'none'

        };

    }

    switchToBox () {

        this.setState( {

            'box': 'block',
            'scatter': 'none',
            'bar': 'none',
            'line': 'none'

        } );

    }

    switchToScatter() {

        this.setState( {

            'box': 'none',
            'scatter': 'block',
            'bar': 'none',
            'line': 'none'

        } );

    }

    switchToBar() {

        this.setState( {

            'box': 'none',
            'scatter': 'none',
            'bar': 'block',
            'line': 'none'

        } );

    }

    switchToLine() {

        this.setState( {

            'box': 'none',
            'scatter': 'none',
            'bar': 'none',
            'line': 'block'

        } );

    }

    render() {

        return (

            <div>
                <header className = { "title" }>
                    React Chart and Controls Demo
                </header>
                <header className = { "sub-title" }>
                    click button to change charts
                </header>
                <div className = { "graphic" }>
                    <CandlestickController display = { this.state.box } />
                    <ScatterController display = { this.state.scatter } />
                    <BarController display = { this.state.bar } />
                    <LineController display = { this.state.line } />
                </div>

                <Button className = { "box-button" }
                        color = "info"
                        onClick = { this.switchToBox.bind( this ) }>
                    Box Plot
                </Button>
                <Button className = { "scatter-button" }
                        color = "info"
                        onClick = { this.switchToScatter.bind( this ) }>
                    Scatter Plot
                </Button>
                <Button className = { "bar-button" }
                        color = "info"
                        onClick = { this.switchToBar.bind( this ) }>
                    Bar Chart
                </Button>
                <Button className = { "line-button" }
                        color = "info"
                        onClick = { this.switchToLine.bind( this ) }>
                    Line Chart
                </Button>
            </div>

        );

    }

}

export default App;
