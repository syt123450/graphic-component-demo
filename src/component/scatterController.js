import React, { Component } from 'react';
import ReactDOM from "react-dom";
import '../../node_modules/react-vis/dist/style.css';
import {

    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    MarkSeries

} from 'react-vis';


export default class scatterController extends Component {

    componentDidMount () {

        if ( this.props.display === "block" ) {

            ReactDOM.findDOMNode( this ).style.display = "block";

        } else {

            ReactDOM.findDOMNode( this ).style.display = "none";

        }

    }

    componentWillReceiveProps ( nextProps ) {

        if ( this.props.display === "block" && nextProps.display === "none" ) {

            ReactDOM.findDOMNode( this ).style.display = "none";

        }

        if ( this.props.display === "none" && nextProps.display === "block" ) {

            ReactDOM.findDOMNode( this ).style.display = "block";

        }

    }

    render () {

        return (

            <XYPlot
                width={ 300 }
                height={ 300 }>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis />
                <YAxis />
                <MarkSeries
                    className = "mark-series-example"
                    strokeWidth = { 2 }
                    opacity = "0.8"
                    sizeRange = { [ 5, 15 ] }
                    data = { [

                        { x: 1, y: 10, color: 0xFF0000,  size: 30 },
                        { x: 1.7, y: 12, size: 10 },
                        { x: 2, y: 5, size: 1 },
                        { x: 3, y: 15, size: 12 },
                        { x: 2.5, y: 7, size: 4 }
                        
                    ] }/>
            </XYPlot>

        );

    }

}