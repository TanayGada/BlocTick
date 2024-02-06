import React, { useState } from 'react'
import Past from './Past/Past'
import Upcoming from './Upcoming/Upcoming'
import Layout from '../../Layout/Layout1'
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react'



const EventsPage = () => {
  const [activeTab, setActiveTab] = useState('Upcoming')

  const data = [
    {
      label: 'Upcoming',
      value: 'Upcoming',
    },
    {
      label: 'Past',
      value: 'Past',
    },
  ]

  return (
    <Layout>
      <Tabs value={activeTab} onChange={(newValue) => setActiveTab(newValue)}>
        <TabsHeader
          className='bg-transparent'
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{ fontSize: '3rem' }}>Events</div>
          <div>
            {data.map(({ label, value }) => (
              <Tab key={value} value={value} >
                {label}
              </Tab>
            ))}
          </div>
        </TabsHeader>

        <TabsBody>
       
          {data.map(({ value }) => (
            <TabPanel key={value} value={value}>
              {value === 'Upcoming' ? <Upcoming /> : <Past />}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </Layout>
  )
}

export default EventsPage
