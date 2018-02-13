import React, { Component } from 'react';
import ReactDOM from "react-dom";
import {XYPlot, XAxis, YAxis,VerticalGridLines, HorizontalGridLines, VerticalBarSeries} from 'react-vis';
import '../../node_modules/react-vis/dist/style.css';

class BarController extends Component {

    componentDidMount() {

        if (this.props.display === "block") {
            ReactDOM.findDOMNode(this).style.display = "block";
        } else {
            ReactDOM.findDOMNode(this).style.display = "none";
        }

    }

    componentWillReceiveProps(nextProps) {

        if (this.props.display === "block" && nextProps.display === "none") {
            ReactDOM.findDOMNode(this).style.display = "none";
        }

        if (this.props.display === "none" && nextProps.display === "block") {
            ReactDOM.findDOMNode(this).style.display = "block";
        }

    }

    render() {
        return (
            <div>

                <XYPlot height={300} width= {300}>
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis />
                    <YAxis />
                    <VerticalBarSeries data={BarController.data} />
                </XYPlot>
            </div>
        );
    }
}

BarController.data = [
    {x: 0, y: 8},
    {x: 1, y: 5},
    {x: 2, y: 4},
    {x: 3, y: 9},
    {x: 4, y: 1},
    {x: 5, y: 7},
    {x: 6, y: 6},
    {x: 7, y: 3},
    {x: 8, y: 2},
    {x: 9, y: 0}
];

export default BarController;