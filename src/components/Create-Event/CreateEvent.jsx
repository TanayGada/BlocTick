import React, { useState } from 'react'
import styles from './event.module.css';


const EventForm = () => {
  const [formState, setFormState] = useState({
    eventName: '',
    eventStart: '',
    eventEnd: '',
    eventLocation: '',
    tickets: 'Free',
    requireApproval: false,
    capacity: 'Unlimited',
    visibility: 'Public',
  })

  const handleInputChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    })
  }

  const handleCheckboxChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.checked,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formState)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label >
        Event Name:
        <input
          type='text'
          name='eventName'
          value={formState.eventName}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Start Time:
        <input
          type='datetime-local'
          name='eventStart'
          value={formState.eventStart}
          onChange={handleInputChange}
        />
      </label>
      <label>
        End Time:
        <input
          type='datetime-local'
          name='eventEnd'
          value={formState.eventEnd}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Event Location:
        <input
          type='text'
          name='eventLocation'
          value={formState.eventLocation}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Tickets:
        <select
          name='tickets'
          value={formState.tickets}
          onChange={handleInputChange}
        >
          <option value='Free'>Free</option>
          <option value='Paid'>Paid</option>
        </select>
      </label>
      <label>
        Require Approval:
        <input
          type='checkbox'
          name='requireApproval'
          checked={formState.requireApproval}
          onChange={handleCheckboxChange}
        />
      </label>
      <label>
        Capacity:
        <input
          type='text'
          name='capacity'
          value={formState.capacity}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Visibility:
        <select
          name='visibility'
          value={formState.visibility}
          onChange={handleInputChange}
        >
          <option value='Public'>Public</option>
          <option value='Private'>Private</option>
        </select>
      </label>
      <input type='submit' value='Create Event' />
    </form>
  )
}

export default EventForm
