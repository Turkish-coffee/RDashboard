import { ResponsiveBarCanvas } from '@nivo/bar'





const BarChart = () => {
  const data = [
    {
      "etat": "AD",
      "pourcentage": 59,
      "hot dogColor": "hsl(314, 70%, 50%)",
    },
    
  ]
  return (
    <ResponsiveBarCanvas
          data={data}
          keys={[
              'hot dog',
              'burger',
              'sandwich',
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
          barAriaLabel={e=>e.id+": "+e.formattedValue+" in country: "+e.indexValue}
      />
  )

}
    

export default BarChart