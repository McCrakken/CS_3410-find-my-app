// MyBarChart.js
import React from 'react';
import {
    XYPlot,
    XAxis, // Shows the values on x axis
    YAxis, // Shows the values on y axis
    VerticalBarSeries,
    LabelSeries
} from 'react-vis';

class MyBarChart extends React.Component {
    render() {
        const data = this.props.data;
        const chartWidth = 300;
        const chartHeight = 300;
        const chartDomain = [0, chartHeight];
        return (
            <XYPlot 
            xType="ordinal" 
            width={chartWidth} 
            height={chartHeight} 
            yDomain={chartDomain}
          >
             <XAxis />
             <VerticalBarSeries
                 data={data}
             />
                <LabelSeries
                    data={data.map(obj => {
                        return { ...obj, label: obj.y.toString() }
                    })}
                    labelAnchorX="middle"
                    labelAnchorY="text-after-edge"
                />

         </XYPlot>
        );
    }
}

export default MyBarChart;