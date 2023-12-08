import { ResponsivePieCanvas } from '@nivo/pie'
import { useState, useEffect } from 'react'
import axios from 'axios'



//PieChart ==> number of employees per service
const PieChart = () => {
    
  const [data, setData] = useState([]);

  const services = [
    'commercial','finance et gestion','ressources humaines','juridique','logistique', 
    'assistance commerciale','direction générale','maintenance','achats','cyber sécurité',
    'recherche et développement','informatique','qualité','collecte','marketing','industriel',
    'assistance technique','analyse des données'
  ]


  useEffect(() => {
    const fetchData = async () => {
      const newData = await Promise.all(
        services.map(async (service) => {
          const response = await axios.get('http://localhost:10000/api/v1/employees?service=' + service);
          return {
            'id': service,
            'label': service,
            'value': Object.values(Object.values(response)[0])[0],
            'color': 'hsl(165, 70%, 50%)'
          };
        })
      );

      setData(newData);
    };

    fetchData();
  }, []); // Run only once on component mount
    

  return (
    <>
      <ResponsivePieCanvas
        data={data}
        margin={{ top: 40, right: 180, bottom: 40, left: 180 }}
        startAngle={-13}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        sortByValue={true}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'set3' }}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.6
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={1}
        arcLinkLabelsTextColor="#ffffff"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={1}
        arcLabelsTextColor="#000000"
      />
    
    </>

  )
}


export default PieChart


