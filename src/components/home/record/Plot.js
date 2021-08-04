import React from 'react';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
} from '@devexpress/dx-react-chart-material-ui';

function Plot ({records}) {

  let data = []
  for (let i = 0; i < records.length; i++) {
    data.push({argument: i+1, value: parseFloat(records[i])})
  }

  return(
    <div>
      <Chart data={data} height={400}>
        <ArgumentAxis />
        <ValueAxis />
        <LineSeries valueField="value" argumentField="argument" />
      </Chart>
    </div>
  )
};

export default Plot;
