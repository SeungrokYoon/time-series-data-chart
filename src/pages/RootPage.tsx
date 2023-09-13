import axios from 'axios'
import { useEffect, useState } from 'react'
import { ComposedChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Area, Bar } from 'recharts'

import { ResDataType } from '../types/chart'
import { processChartDataToComposeCharData } from '../utils/processData'

export default function RootPage() {
  return <Chart tabButtonKey={1} />
}

function Chart({ tabButtonKey }: { tabButtonKey: number }) {
  const [data, setData] = useState<ResDataType>({})
  const composeChartData = processChartDataToComposeCharData(data)

  useEffect(() => {
    axios.get('/server/db.json').then((res) => setData(res.data.response))
  }, [])

  return (
    <ComposedChart
      data={composeChartData}
      height={1000}
      margin={{
        top: 20,
        right: 80,
        bottom: 20,
        left: 20,
      }}
      width={1000}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="time" label={{ value: 'Pages', position: 'insideBottomRight', offset: 0 }} />
      <YAxis label={{ value: 'Index', angle: -90, position: 'insideLeft' }} />
      <Tooltip />
      <Legend />
      <Bar barSize={20} dataKey="value_bar" fill="#413ea0" />
      <Area dataKey="value_area" fill="#84d884" stroke="#8f9908" type="monotone" />
    </ComposedChart>
  )
}
