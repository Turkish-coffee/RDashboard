import './App.css'
import { Card, Header } from './components'
import tw from 'twin.macro'
import { useEffect, useState } from 'react';
import axios from 'axios';


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
    pt-10
    gap-x-10
    gap-y-16
`;

export  function App() {

    const [data, setData] = useState<any[]>([]);

const routeLists = [
  'http://localhost:10000/api/v1/employees?service=achats',
  'http://localhost:10000/api/v1/employees?service=juridique',
  'http://localhost:10000/api/v1/employees',
  'http://localhost:10000/api/v1/machines/shutdown'
];

useEffect(() => {
  // Function to fetch data
  const fetchData = async (): Promise<void> => {
    try {
      const responses = await Promise.all(routeLists.map((route) => axios.get(route)));
      const res = responses.map((response) => Object.values(response.data)[0]);
      console.log(res);
      setData(res)
            
          } catch (error) {
                console.log(error)
          } 
        };
         // Call the fetch data function
    fetchData();
}, []); // Empty dependency array means this effect runs once when the component mounts


    return (
        <MainContainer>
            <Header /> 
            <CardSection>
                <Card Title='Dronnes en panne' Data={data[3]} Metric='%' Icon='drone'/>   
                <Card Title='Personnel juridique sur site' Data={data[1]} Icon='personneJ'/>   
                <Card Title='Personnel' Data={data[2]} Icon='totalpersonne'/>   
                <Card Title='Personnel du service Achats' Data={data[0]} Icon='personneA'/>   
                <Card Title='Site sans departement IT' Data={'xxx'} Icon='site'/>   
                <Card Title='Zones conformes' Data={'xxx'} Metric='%' Icon='zone'/>
                <Card Title='zone la plus chaude' Data={'xxx'} Icon='temperature'/> 
                <Card Title='Formation la moins appréciée' Data={'xxx'} Icon='formation'/> 
            </CardSection>
        </MainContainer>
    );
}






