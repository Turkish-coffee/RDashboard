import { ResponsiveBarCanvas } from '@nivo/bar'
import { useState, useEffect } from 'react'
import axios from 'axios'



// BarChar1 to present total sales per site
const BarChart1 = () => {
  const [data, setData] = useState<Array<{ id: string; label: string; value: unknown; color: string; }>>([]);

  const sites = [
    'Etat-Unis','Brazil','Urugway','Chili','France'
  ]


  useEffect(() => {
    const fetchData = async () => {
      const newData = await Promise.all(
        sites.map(async (site) => {
          const response = await axios.get('http://localhost:10000/api/v1/sales?site='+site);
          return {
            'id': site,
            'label': site,
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
    <ResponsiveBarCanvas
          data={data}
          keys={[
            'Etat-Unis',
            'Brazil',
            'Urugway',
            'Chili',
            'France'
          ]}
          indexBy="etat"
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          padding={0.3}
          valueScale={{ type: 'linear' }}
          indexScale={{ type: 'band', round: true }}
          colors={{ scheme: 'nivo' }}
          
          axisTop={null}
          axisRight={null}
          axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'country',
              legendPosition: 'middle',
              legendOffset: 32,
              truncateTickAt: 0
          }}
          axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'food',
              legendPosition: 'middle',
              legendOffset: -40,
              truncateTickAt: 0
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{
              from: 'color',
              modifiers: [
                  [
                      'darker',
                      1.6
                  ]
              ]
          }}
          role="application"
          ariaLabel="Nivo bar chart demo"
          barAriaLabel={(e: { id: string; formattedValue: number; indexValue: string }) => e.id + ": " + e.formattedValue + " in country: " + e.indexValue}

      />
  )

}
    



//Percentage of zones validated this year through a compliance audit per site

const BarChart2 = () => {
  const [data, setData] = useState<Array<{ id: string; label: string; value: unknown; color: string; }>>([]);

  const sites = [
    'Etat-Unis','Brazil','Urugway','Chili','France'
  ]


  useEffect(() => {
    const fetchData = async () => {
      const newData = await Promise.all(
        sites.map(async (site) => {
          const response = await axios.get('http://localhost:10000/api/v1/zones/operationnal-rate?site='+site);
          return {
            'id': site,
            'label': site,
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
    <ResponsiveBarCanvas
          data={data}
          keys={[
            'Etat-Unis',
            'Brazil',
            'Urugway',
            'Chili',
            'France'
          ]}
          indexBy="etat"
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          padding={0.3}
          valueScale={{ type: 'linear' }}
          indexScale={{ type: 'band', round: true }}
          colors={{ scheme: 'nivo' }}
          
          axisTop={null}
          axisRight={null}
          axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'country',
              legendPosition: 'middle',
              legendOffset: 32,
              truncateTickAt: 0
          }}
          axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'food',
              legendPosition: 'middle',
              legendOffset: -40,
              truncateTickAt: 0
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{
              from: 'color',
              modifiers: [
                  [
                      'darker',
                      1.6
                  ]
              ]
          }}
          role="application"
          ariaLabel="Nivo bar chart demo"
          barAriaLabel={(e: { id: string; formattedValue: number; indexValue: string }) => e.id + ": " + e.formattedValue + " in country: " + e.indexValue}
          />
  )

}
    

export default BarChart2





