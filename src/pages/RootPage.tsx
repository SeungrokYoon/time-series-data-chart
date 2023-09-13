import axios from 'axios'
import { useEffect, useState } from 'react'
import { ComposedChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Area, Bar } from 'recharts'
import styled from 'styled-components'

import { ResDataType } from '../types/chart'
import { getIdList, processChartDataToComposeCharData } from '../utils/processData'

export default function RootPage() {
  return <Chart tabButtonKey={'1'} />
}

function Chart({ tabButtonKey }: { tabButtonKey: string }) {
  const [data, setData] = useState<ResDataType>({})
  const composeChartData = processChartDataToComposeCharData(data)
  const idArr = Array.from(new Set(getIdList(data))).sort()

  const [selectedButton, setSelectedButton] = useState('')

  useEffect(() => {
    axios.get('/server/db.json').then((res) => setData(res.data.response))
  }, [])

  return (
    <S_Container>
      <S_ButtonList>
        {idArr.map((v) => (
          <S_Button
            key={v}
            id={v}
            type="button"
            onClick={() => {
              setSelectedButton(v)
            }}
          >
            {v}
          </S_Button>
        ))}
      </S_ButtonList>
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
        <XAxis dataKey="time" scale="band" />
        <YAxis
          dataKey="value_area"
          label={{ value: 'Area', angle: -90, position: 'insideLeft' }}
          orientation="left"
          yAxisId="Area"
        />
        <YAxis
          dataKey="value_bar"
          label={{ value: 'Bar', angle: -90, position: 'insideRight' }}
          orientation="right"
          yAxisId="Bar"
        />
        <Area dataKey="value_area" fill="#84d884" stroke="#8f9908" type="monotone" yAxisId="Area" />
        <Bar barSize={20} dataKey="value_bar" fill="#413ea0" offset={40} yAxisId="Bar" />
        <Tooltip />
        <Legend />
      </ComposedChart>
    </S_Container>
  )
}

const S_Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 50px;
`

const S_ButtonList = styled.div`
  display: flex;
  gap: 8px;
`

const S_Button = styled.button`
  padding: 0.25rem 0.5em;
  font-size: 1rem;
`
