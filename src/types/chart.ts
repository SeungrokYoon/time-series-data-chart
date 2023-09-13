export interface AtomData {
  id: string
  value_area: number
  value_bar: number
}

export interface ResDataType {
  [key: string]: AtomData
}

export interface ChartData {
  type: string
  version: number
  response: ResDataType
}
