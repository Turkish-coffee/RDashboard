import { PieChart } from '../charts'
import { BarChart } from '../charts'
import tw from 'twin.macro'


const ChartContainer = tw.div`
  w-screen
  h-screen
  top-[179px] 
  left-[135px] 
  rounded-[10px]
  flex
  flex-col
  
`;
const TitleContainer = tw.div`
  text-center
  text-lg
  font-semibold
  px-2
  text-white
`;

const Charts = () => {
    return (
        <ChartContainer>
            <TitleContainer>
                Nombre d'employés par service
            </TitleContainer>
            <PieChart/>
        </ChartContainer>
    )
  }


  export default Charts



