import logo from '../assets/react.svg'
import tw from 'twin.macro'

const HeaderContainer = tw.div`
  w-full
  flex
  flex-row
  justify-center
  py-8
`;
const HeaderBox = tw.div`
  flex
  flex-row
  items-center
  justify-between
  w-10/12
  px-6
  h-[64px]
  bg-[#f5e8c7]
  shadow-[0px_4px_4px_#00000040]
  rounded-[15px]
`;

const LogoContainer = tw.img`
  my-2
`;
const TitleContainer = tw.div`
  flex
  flex-col
  [align-content: center]
  [font-family:'Chivo-Regular',Helvetica]
  font-normal
  text-black
  text-[20px] 
  tracking-[0] 
  leading-[normal] 
  whitespace-nowrap
`;
const Header = () => {
  return (
    <HeaderContainer>
      <HeaderBox>
        <LogoContainer src={logo}/>
        <TitleContainer>
          Welcome to the Lactalis's Dashboard !!
        </TitleContainer>
      </HeaderBox>
    </HeaderContainer>
  )
}

export default Header