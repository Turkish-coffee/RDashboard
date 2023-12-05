import React from 'react'
import tw from 'twin.macro'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'



type Props = {
    Title: string,
    Icon: string,
    Data?: string | number,
    Metric?: string,
}

const CardContainer = tw.div`
  w-[247px] 
  h-[171px] 
  top-[179px] 
  left-[135px] 
  shadow-[0px_2px_6px_#00000040]
  [background:linear-gradient(180deg,rgb(86.49,103.34,255)_0%,rgb(35,150,239)_100%)]  
  rounded-[20px]
  flex
  flex-col
`;

const DataWrapper = tw.div`
  flex
  flex-col
  items-center
  px-2
  py-2
  gap-y-2
`;


const TitleContainer = tw.div`
  text-xl
  
`;

const DataContainer = tw.div`

`;

const IconContainer = tw.div`

`;
const iconMap: { [key:string] : IconDefinition} = { 
  coffee : faCoffee,

}





const Card = (props: Props) => {
    const { Title, Icon, Data, Metric } = props

  return (
    <CardContainer>
      <IconContainer>
        <FontAwesomeIcon icon={iconMap[Icon]} />
      </IconContainer>
      <DataWrapper>
        <TitleContainer>
          {Title}
        </TitleContainer>
        <DataContainer>
          {Data} {Metric}
        </DataContainer>
      </DataWrapper>
    </CardContainer>
  )
}

export default Card