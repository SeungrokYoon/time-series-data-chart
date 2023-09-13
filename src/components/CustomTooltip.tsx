import { TooltipProps } from 'recharts'
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent'
import styled from 'styled-components'

import { AtomData } from '../types/chart'

function Tooltip({ active, payload }: TooltipProps<ValueType, NameType>) {
  if (active && payload && payload.length) {
    const data = payload[0].payload as AtomData

    return (
      <S_Container>
        <span>Id: {data.id}</span>
        <span>Area: {data.value_area}</span>
        <span>Bar: {data.value_bar}</span>
      </S_Container>
    )
  }

  return <></>
}

export default Tooltip

const S_Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 1rem;
  padding: 0.75rem;
  border-radius: 0.25rem;
  background-color: white;
  box-shadow: 2px #999;
`
