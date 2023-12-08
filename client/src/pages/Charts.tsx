import { PieChart } from '../charts'
import { BarChart } from '../charts'
import tw from 'twin.macro'


const ChartContainer = tw.div`
  w-10/12 
  h-full
  top-[179px] 
  left-[135px] 
  rounded-[10px]
  flex
  flex-row
  justify-between

`;

const Charts = () => {

    return (
        <ChartContainer>
            <PieChart/>
            <BarChart />
        </ChartContainer>
    )
  }


  export default Charts



