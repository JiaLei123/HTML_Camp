import React, { Component } from 'react';
import { Chart, Geom, Axis, Tooltip, Legend, Coord, Label } from 'bizcharts';

class Acc_Scatter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    "gender": "female",
                    "height": "2017/9/20",
                    "weight": 51.6
                }, {
                    "gender": "female",
                    "height": "2017/10/20",
                    "weight": 59
                }, {
                    "gender": "female",
                    "height": "2017/11/2",
                    "weight": 49.2
                }, {
                    "gender": "female",
                    "height": "2017/11/20",
                    "weight": 63
                }, {
                    "gender": "female",
                    "height": "2017/12/12",
                    "weight": 53.6
                }, {
                    "gender": "female",
                    "height": "2017/12/20",
                    "weight": 59
                }, {
                    "gender": "female",
                    "height": "2017/12/25",
                    "weight": 47.6
                }
            ],
            clos : {
                height: {
                    type: 'time',
                    min:'2017/06/06',
                    max:'2018/12/30',
                    mask: "YYYY-MMMM"
                },
            },
        }
    }

    componentDidMount(){

    }
    
    // 渲染图表
    render() {
        return (
            <Chart width={800} height={400} data={this.state.data} scale={this.state.clos}>
                <Axis name="height" />
                <Axis name="weight" />
                <Legend />
                <Tooltip />
                <Geom type='point' position="height*weight" color='gender' opacity={0.65} shape="circle" size={4}>
                </Geom>
            </Chart>
        )
    }
}

export default Acc_Scatter;
