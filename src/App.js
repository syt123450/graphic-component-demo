import React, {Component} from 'react';
import './css/App.css';
import CandlestickController from "./component/boxplotController";
import ScatterController from "./component/scatterController";
import BarController from "./component/barController";
import LineController from "./component/lineController";

import './toolbox/theme.css';
import theme from './toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';

import Button from 'react-toolbox/lib/button/Button';

class App extends Component {

    constructor() {

        super();
        this.state = {

            box: 'none',
            scatter: 'block',
            bar: 'none',
            line: 'none'

        };

    }

    switchToBox() {

        this.setState({

            'box': 'block',
            'scatter': 'none',
            'bar': 'none',
            'line': 'none'

        });

    }

    switchToScatter() {

        this.setState({

            'box': 'none',
            'scatter': 'block',
            'bar': 'none',
            'line': 'none'

        });

    }

    switchToBar() {

        this.setState({

            'box': 'none',
            'scatter': 'none',
            'bar': 'block',
            'line': 'none'

        });

    }

    switchToLine() {

        this.setState({

            'box': 'none',
            'scatter': 'none',
            'bar': 'none',
            'line': 'block'

        });

    }

    render() {

        return (

            <ThemeProvider theme={theme}>
                <div>
                    <header className={"title"}>
                        React Chart and Controls Demo
                    </header>
                    <header className={"sub-title"}>
                        click button to change charts
                    </header>
                    <div className={"graphic"}>
                        <CandlestickController display={this.state.box}/>
                        <ScatterController display={this.state.scatter} />
                        <BarController display={this.state.bar}/>
                        <LineController display={this.state.line}/>
                    </div>

                    <Button label="Box Plot"
                            raised
                            primary
                            className={"box-button"}
                            onMouseUp={this.switchToBox.bind(this)}/>

                    <Button label="Scatter Plot"
                            raised
                            primary
                            className={"scatter-button"}
                            onMouseUp={this.switchToScatter.bind(this)}/>

                    <Button label="Bar Chart"
                            raised
                            primary
                            className={"bar-button"}
                            onMouseUp={this.switchToBar.bind(this)}/>

                    <Button label="Line Chart"
                            raised
                            primary
                            className={"line-button"}
                            onMouseUp={this.switchToLine.bind(this)}/>

                </div>
            </ThemeProvider>
        );

    }

}

export default App;
