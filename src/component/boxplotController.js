import React, { Component }  from 'react';
import ReactDOM from "react-dom";
import {

    XAxis,
    YAxis,
    XYPlot

} from 'react-vis';
import Candlestick from '../lib/boxplot';

import '../css/style.scss';

import '../../node_modules/react-vis/dist/style.css';

export default class CandlestickController extends Component {

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

            <div className="candlestick-example">
                <div className="chart">
                    <XYPlot height={300} width= {300}
                        yDomain={[0, 100]}>
                        <XAxis />
                        <YAxis />
                        <Candlestick
                            colorType="literal"
                            opacityType="literal"
                            stroke="#79C7E3"
                            data={CandlestickController.data} />
                    </XYPlot>
                </div>
            </div>

        );

    }

}

CandlestickController.data = [
    {"x":0,"y":70,"yHigh":99,"yOpen":73,"yClose":67,"yLow":11,"color":"#12939A","opacity":1},
    {"x":1,"y":59.5,"yHigh":92,"yOpen":70,"yClose":49,"yLow":19,"color":"#12939A","opacity":1},
    {"x":2,"y":63,"yHigh":83,"yOpen":80,"yClose":46,"yLow":4,"color":"#12939A","opacity":1},
    {"x":3,"y":54,"yHigh":98,"yOpen":57,"yClose":51,"yLow":38,"color":"#12939A","opacity":1},
    {"x":4,"y":21.5,"yHigh":83,"yOpen":33,"yClose":10,"yLow":7,"color":"#EF5D28","opacity":1},
    {"x":5,"y":60,"yHigh":71,"yOpen":67,"yClose":53,"yLow":2,"color":"#12939A","opacity":1},
    {"x":6,"y":39.5,"yHigh":73,"yOpen":58,"yClose":21,"yLow":0,"color":"#12939A","opacity":1}];


