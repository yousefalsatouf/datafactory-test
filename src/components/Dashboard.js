import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class Dashboard extends Component
{
    constructor(props){
        super(props);
        this.state = {
            chartData:props.chartData,
            forecastHandler: props.forecastHandler
        }
    }
    static defaultProps = {
        displayTitle:true,
    };

    render() {
        console.log(this.state.chartData);
        return (
            <div className="line-around">
                <div className="bar-chart">
                    <Bar
                        data={this.state.chartData}
                        options={{
                            title:{
                                display:this.props.displayTitle,
                                text:'',
                                fontSize:25
                            },
                        }}
                    />
                </div>

                <button className=" w-50 text-white"
                            onClick={this.state.forecastHandler}>
                        Forecast For The Next 6 Weeks
                </button>
            </div>
        );
    }
}

export default Dashboard;
