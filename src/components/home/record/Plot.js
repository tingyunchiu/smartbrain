import React from 'react';
import Paper from '@material-ui/core/Paper';
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
    <Paper>
      <Chart data={data} height={400}>
        <ArgumentAxis />
        <ValueAxis />
        <LineSeries valueField="value" argumentField="argument" />
      </Chart>
    </Paper>
  )
};

export default Plot;
