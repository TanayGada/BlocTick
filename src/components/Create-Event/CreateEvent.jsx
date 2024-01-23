import React from 'react'
import './CreateEvent.css'

const EventForm = () => {
  return (
    <div className='event-form'>
      <h1 className='form-title'>Create under: Personal Calendar</h1>
      <div className='form-group'>
        <label className='form-label'>
          Event Name
          <input type='text' className='form-input' />
        </label>
        <label className='form-label'>
          Start
          <input type='datetime-local' className='form-input' />
        </label>
        <label className='form-label'>
          End
          <input type='datetime-local' className='form-input' />
        </label>
        <label className='form-label'>
          Add Event Location
          <input
            type='text'
            className='form-input'
            placeholder='Offline location or virtual link'
          />
        </label>
      </div>
      <h2 className='form-subtitle'>Event Options</h2>
      <div className='form-group'>
        <label className='form-label'>
          Tickets
          <select className='form-select'>
            <option value='free'>Free</option>
            {/* Add other options as needed */}
          </select>
        </label>
        <label className='form-label'>
          Require Approval
          <input type='checkbox' className='form-checkbox' />
        </label>
        <label className='form-label'>
          Capacity
          <select className='form-select'>
            <option value='unlimited'>Unlimited</option>
            {/* Add other options as needed */}
          </select>
        </label>
        <label className='form-label'>
          Visibility
          <select className='form-select'>
            <option value='public'>Public</option>
            {/* Add other options as needed */}
          </select>
        </label>
      </div>
      <button className='form-button'>Create Event</button>
    </div>
  )
}

export default EventForm
