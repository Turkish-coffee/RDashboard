import tw from 'twin.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { 
  faPlugCircleExclamation, 
  faPersonChalkboard, 
  faThumbsDown, 
  faUserTie, 
  faPeopleLine, 
  faBuildingCircleExclamation, 
  faClipboardCheck,
  faTemperatureArrowUp
} from '@fortawesome/free-solid-svg-icons'



type Props = {
    Title: string,
    Icon: string,
    Data?: string | number,
    Metric?: string,
}

const CardContainer = tw.div`
  w-[247px] 
  min-h-[190px]
  top-[179px] 
  left-[135px]
  transition duration-300 hover:scale-105 
  shadow-[0px_2px_6px_#00000040]
  [background:linear-gradient(180deg,rgb(86.49,103.34,255)_0%,rgb(35,150,239)_100%)]  
  rounded-[20px]
  flex
  flex-col
  items-center
`;

const DataWrapper = tw.div`
  w-[247px]
  h-full 
  flex
  flex-col
  items-center
  justify-between
  pb-5
`;


const TitleContainer = tw.div`
  text-center
  text-lg
  font-semibold
  px-2
`;

const DataContainer = tw.div`
  text-cyan-50
font-extrabold
text-3xl
font-mono
`;

const IconContainer = tw.div`
  flex
  flex-col
  justify-center
  h-20
  w-20
  text-4xl
  py-12
`;
const iconMap: { [key:string] : IconDefinition} = { 
  drone : faPlugCircleExclamation,
  personneJ : faUserTie,
  totalpersonne : faPeopleLine,
  personneA : faPersonChalkboard,
  site : faBuildingCircleExclamation,
  zone : faClipboardCheck,
  formation : faThumbsDown,
  temperature: faTemperatureArrowUp,
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