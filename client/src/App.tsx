import './App.css'
import { Card, Header } from './components'
import tw from 'twin.macro'
import React, { useEffect, useState } from 'react';
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

    const [data, setData] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(():void => {
        // Function to fetch data
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:10000/api/v1/employees?service=achats');
            setData(response.data.totalEmployees);
            console.log(response.data.totalEmployees)
          } catch (error) {
            setError(error.message);
          } finally {
            setLoading(false);
          }
        };
         // Call the fetch data function
    fetchData();
}, []); // Empty dependency array means this effect runs once when the component mounts


    return (
        <MainContainer>
            <Header /> 
            <CardSection>
                <Card Title='Dronnes en panne' Data={10} Metric='%' Icon='drone'/>   
                <Card Title='Personnel juridique sur site' Data={10} Icon='personneJ'/>   
                <Card Title='Personnel' Data={10} Icon='totalpersonne'/>   
                <Card Title='Personnel du service Achats' Data={data} Icon='personneA'/>   
                <Card Title='Site sans departement IT' Data={10} Icon='site'/>   
                <Card Title='Zones conformes' Data={10} Metric='%' Icon='zone'/>
                <Card Title='Formation la moins appréciée' Data={10} Icon='formation'/> 
            </CardSection>
        </MainContainer>
    );
}






