import React, {Component} from 'react';
import items from "../data";
import axios from '../axios';
import moment from "moment";
import Result from "../components/Result";
import Dashboard from "../components/Dashboard";
import Toolbar from "../components/Toolbar";

class Container extends Component
{
    constructor(){
        super();
        this.state = {
            chartData:{},
            items: items,
            comingItems: [
                {
                    "name": "printer",
                    "qty": 70,
                    "soldDate": moment().add(1, 'week').format("MMM DD YYYY")
                },
                {
                    "name": "screen",
                    "qty": 50,
                    "soldDate": moment().add(2, 'week').format("MMM DD YYYY")
                },
                {
                    "name": "ps4",
                    "qty": 80,
                    "soldDate": moment().add(3, 'week').format("MMM DD YYYY")
                },
                {
                    "name": "xbox",
                    "qty": 5,
                    "soldDate": moment().add(4, 'week').format("MMM DD YYYY")
                },
                {
                    "name": "dvd",
                    "qty": 25,
                    "soldDate": moment().add(5, 'week').format("MMM DD YYYY")
                },
                {
                    "name": "keyboards",
                    "qty": 49,
                    "soldDate": moment().add(6, 'week').format("MMM DD YYYY")
                }
            ],
        }
    }

    componentWillMount()
    {
        this.getChartData();
    }

    getChartData()
    {
        // api calls here
       /* axios.get('/items.json').then(res=>{
            const weeks = [];
            const qty = [];
            //console.log(res.data);
            res.data.map((value) => {
                weeks.push(value.soldDate);
                qty.push(value.qty)
            });
            //console.log(weeks);
            //console.log(qty);
            //console.log(this.state.chartData)
        });*/
        const weeks = [];
        const qty = [];

        this.state.items.map((value) => {
            weeks.push(value.soldDate);
            qty.push(value.qty)
        });

        this.setState({
            chartData:{
                //date here
                labels: weeks,
                datasets:[
                    {
                        label:'Quantity',
                        // quantity here
                        data:qty,
                        backgroundColor:[
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(255, 99, 132, 0.6)'
                        ]
                    }
                ]
            }
        });
    }

    addForecastHandler = () =>{
        const copydates = this.state.chartData.labels;
        const copyQtys = this.state.chartData.datasets[0].data;

        this.state.comingItems.map(date => {
            copydates.push(date.soldDate);
            copyQtys.push(date.qty)
        });
        this.setState({});

        console.log(copydates)
    };

    render()
    {
        //console.log(this.state.chartData);

        return (
            <main>
                <Toolbar/>
                <div className="container">
                    <Result />
                    <Dashboard chartData={this.state.chartData}
                               forecastHandler={this.addForecastHandler}/>
                </div>
            </main>
        )
    }
}
export default Container;
