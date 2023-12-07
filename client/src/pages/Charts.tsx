import { ResponsivePieCanvas } from '@nivo/pie'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Charts = () => {

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
        margin={{ top: 40, right: 200, bottom: 40, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'paired' }}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.6
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#ffffff"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor="#000000"
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'ruby'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'c'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'go'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'scala'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}
        
    />
    </>
  )
}


export default Charts


