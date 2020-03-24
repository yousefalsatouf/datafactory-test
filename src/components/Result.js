import React, {Component} from 'react';


class Result extends Component
{
    render() {
        return (
                <div className="line-around-result">
                    <div>
                        <h4>+ 1 M $</h4>
                        <p>Revenue vs target</p>
                    </div>
                    <div>
                        <h4>92 % </h4>
                        <p>Forecast Accuracy</p>
                    </div>
                    <div>
                        <h4>+ 10 %</h4>
                        <p>Avg. growth</p>
                    </div>
                    <div>
                        <i className="fa fa-plus-square"></i>
                    </div>
                </div>
        );
    }
}

export default Result;
