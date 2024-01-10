import React from 'react'
// import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

const Top = () => {
  const [alignment, setAlignment] = React.useState('Upcoming')

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment)
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <h1 style={{fontSize:'50px'}}>Events</h1>
      <ToggleButtonGroup
        color='primary'
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label='Platform'
      >
        <ToggleButton value='Upcoming'>Upcoming</ToggleButton>
        <ToggleButton value='Past'>Past</ToggleButton>
      </ToggleButtonGroup>
    </div>
  )
}

export default Top;
