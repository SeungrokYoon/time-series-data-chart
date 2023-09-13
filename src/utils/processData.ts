import { ResDataType } from '../types/chart'

interface ComposeChartAtomData {
  id: string
  time: string
  value_area: number
  value_bar: number
}

export const processChartDataToComposeCharData = (data: ResDataType) => {
  const timeList = Object.keys(data).map((time) => time.split(' ')[1])
  const valueList = Object.values(data)
  const composeChartDataList: ComposeChartAtomData[] = Array.from(
    { length: timeList.length },
    (_, i) => ({ time: timeList[i], ...valueList[i] })
  )
  return composeChartDataList
}

export const getIdList = (data: ResDataType) => {
  return Object.values(data).map((d) => d.id)
}
