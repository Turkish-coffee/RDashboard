import { Card } from '../components'
import tw from 'twin.macro'
import { useEffect, useState } from 'react';
import axios from 'axios';




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

const Insights = () => {

// indicateur 1

const [indicateur1, setIndicateur1] = useState()
useEffect(() => {
  const getIndicateur1 = async () => {
    const axiosInstance = axios.create({
      baseURL: 'https://b3ba-194-199-84-87.ngrok-free.app',
      method:'GET',
      headers: {
        'ngrok-skip-browser-warning': 'true',
      },
    });
  
    axiosInstance.get('/finance/percentage-drones-in-fault')
    .then(res => {setIndicateur1(Object.values(res.data)[0])}).then(() => console.log(indicateur1))
  }
  getIndicateur1();
},[])



// eslint-disable-next-line @typescript-eslint/no-explicit-any
const [data1, setData1] = useState<any[]>([]);

//indicacteur 2 3 4
const routeLists1 = [
  'http://localhost:10000/api/v1/employees?service=achats',
  'http://localhost:10000/api/v1/employees?service=juridique',
  'http://localhost:10000/api/v1/employees',
];

useEffect(() => {
  // Function to fetch data
  const fetchData = async (): Promise<void> => {
    try {
      const responses = await Promise.all(routeLists1.map((route) => axios.get(route)));
      const res = responses.map((response) => Object.values(response.data)[0]);
      console.log(res);
      setData1(res)
            
          } catch (error) {
                console.log(error)
          } 
        };
    fetchData();
}, []);



const [data2, setData2] = useState<any[]>([]);

const routeLists2 = [
  'http://localhost:30000/api/v1/machines/shutdown'
];

useEffect(() => {
  // Function to fetch data
  const fetchData = async (): Promise<void> => {
    try {
      const responses = await Promise.all(routeLists2.map((route) => axios.get(route)));
      const res = responses.map((response) => Object.values(response.data)[0]);
      console.log(res);
      setData2(res)
            
          } catch (error) {
                console.log(error)
          } 
        };
    fetchData();
}, []);


const getData = async ()  => {
  const response = await axios.get('http://169.254.152.154:3000/zone/droneActif')
  console.log('data de fenitra' + response)
}
getData()


    return ( 
            <CardSection>
                <Card handleClick={()=>console.log('heyy lelaa')}
                 Title='Dronnes en panne' Data={indicateur1} Metric='%' Icon='drone'/>   
                <Card Title='Personnel juridique sur site' Data={data1[1]} Icon='personneJ'/>   
                <Card Title='Personnel' Data={data1[2]} Icon='totalpersonne'/>   
                <Card Title='Personnel du service Achats' Data={data1[0]} Icon='personneA'/>   
                <Card Title='Site sans departement IT' Data={'xxx'} Icon='site'/>   
                <Card Title='Zones conformes' Data={'xxx'} Metric='%' Icon='zone'/>
                <Card Title='zone la plus chaude' Data={'xxx'} Icon='temperature'/> 
                <Card Title='Formation la moins appréciée' Data={'xxx'} Icon='formation'/> 
            </CardSection>
    );
}
export default Insights;








