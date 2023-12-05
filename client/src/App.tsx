import './App.css'

import { Card, Header } from './components'
import tw from 'twin.macro'

const MainContainer = tw.div`
    flex
    flex-col
    [background-color: #363062]
    items-center
    w-full
    h-screen
`;

const CardSection = tw.div`
    w-10/12
    flex
    flex-row
    flex-wrap
    justify-center
    px-2
    pt-14
    gap-x-10
    gap-y-20
`;

export  function App() {
    return (
        <MainContainer>
            <Header /> 
            <CardSection>
                <Card Title='dronne en panne' Data={10} Metric='%' Icon='coffee'/>   
                <Card Title='dronne en panne' Data={10} Metric='%' Icon='coffee'/>  
                <Card Title='dronne en panne' Data={10} Metric='%' Icon='coffee'/>  
                <Card Title='dronne en panne' Data={10} Metric='%' Icon='coffee'/>  
                <Card Title='dronne en panne' Data={10} Metric='%' Icon='coffee'/>  
                <Card Title='dronne en panne' Data={10} Metric='%' Icon='coffee'/>  
                <Card Title='dronne en panne' Data={10} Metric='%' Icon='coffee'/>  
                <Card Title='dronne en panne' Data={10} Metric='%' Icon='coffee'/>  
            </CardSection>
        </MainContainer>
    );
}






