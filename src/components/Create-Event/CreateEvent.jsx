import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Layout from '../../Layout/Layout1'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useWriteContract } from 'wagmi'
import { config } from '../../config'
import { abi } from '../../abi'
import { Deposit } from '../../blockchain/Functions/WriteFunctions/Deposit'
import { Account } from '../../blockchain/Functions/ReadFunctions/Account'
import { WalletOptions } from '../../blockchain/Functions/ReadFunctions/wallet-options'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ConnectWallet } from '../../blockchain/ConnectWallet'
import { CheckBalance } from '../../blockchain/Functions/ReadFunctions/CheckBalance'
import { CreateEvent } from '../../blockchain/Functions/WriteFunctions/CreateEvent'
import {useAccount} from 'wagmi'


const CreateEventPage = () => {
  const [eventName, setEventName] = useState('')
  const [eventStartDate, setEventStartDate] = useState('')
  const [eventEndDate, setEventEndDate] = useState('')
  const [eventLocation, setEventLocation] = useState('')
  const [eventTicketsPrice, seteventTicketsPrice] = useState('')
  const [eventTicketsCount, setEventTicketsCount] = useState('')
  const [eventDescription, setEventDescription] = useState('')
  const [eventAddress, setEventAddress] = useState('')
  const [isEventCreated, setIsEventCreated] = useState(false)
  const { user } = useAuthContext()

  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    handleCreateEvent()
  }

  const handleCreateEvent = async (e) => {
    try {
      if (!user) {
        console.log('User not logged in')
        return
      }

      console.log('Handling event creation...')
      // Validate that all required fields are filled
      if (
        !eventName ||
        !eventStartDate ||
        !eventEndDate ||
        !eventLocation ||
        !eventTicketsCount ||
        !eventDescription ||
        !eventTicketsPrice||
        !eventAddress
      ) {
        console.error('Please fill in all required fields.')
        return
      }
      // ticket price is a positive number if the ticket type is paid
      
      // ticket count is a positive integer
      if (eventTicketsCount <= 0) {
        console.error('Please enter a valid tickets count.')
        return
      }
      var eventOrganizerEmailId = user.email
      var myDate = new Date(eventStartDate);
      var myEpoch = myDate.getTime()/1000.0;
      // Data to be sent to the backend
      const eventData = {
        eventName,
        eventOrganizerEmailId,
        // myEpoch,
        eventStartDate,
        eventEndDate,
        eventAddress,
        eventLocation,

        eventTicketsCount,
        eventTicketsPrice,
        eventDescription,
      }
      console.log('Event Data:', eventData)


      // await CreateEvent({eventName ,eventTicketsPrice, eventTicketsCount, myEpoch})

      // Send data to backend
      const response = await fetch('http://localhost:5001/events/', {
        method: 'POST',
        body: JSON.stringify(eventData),
        headers: {
          
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
      })

      console.log('Event created successfully:', response.data)
      setIsEventCreated(true)
      await navigate('/events')
    } catch (error) {
      // Handle errors
      console.log('Error creating event:', error)
    }
  }

  let { address } = useAccount()

  return (
    <Layout>
      <div className='bg-gray-1000 min-h-screen flex items-center justify-center'>
        <div
          className='max-w-3xl rounded-lg shadow-xl p-8 sm:p-5'
          style={{
            width: '70%',
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
          }}
        >
          {!address ? (
            <div>
              <div className='text-center text-red-500'>
                Please complete your profile to create an event
              </div>
              <button
                onClick={() => {
                  navigate('/profile')
                }}
              >
                Profile
              </button>
            </div>
          ) : (
            <h1 className='text-4xl font-bold text-gray-800 mb-6 sm:text-2xl text-center'>
              Create Event
            </h1>
          )}
          <form className='space-y-6'>
            <div
              className='space-y-4 px-2'
              style={{ justifyContent: 'center', alignItems: 'center' }}
            >
              <div>
                <label
                  htmlFor='event-name'
                  className='block text-sm font-medium text-gray-700'
                >
                  Event Name
                </label>
                <input
                  id='event-name'
                  type='text'
                  className='input'
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                  required
                  placeholder='Enter Event Name'
                />
              </div>
              <div>
                <div>
                  <label
                    htmlFor='start-date-time'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Start Date and Time
                  </label>
                  <input
                    id='start-date-time'
                    type='datetime-local'
                    className='input'
                    value={eventStartDate}
                    onChange={(e) => setEventStartDate(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor='end-date-time'
                    className='block text-sm font-medium text-gray-700'
                  >
                    End Date and Time
                  </label>
                  <input
                    id='end-date-time'
                    type='datetime-local'
                    className='input'
                    value={eventEndDate}
                    onChange={(e) => setEventEndDate(e.target.value)}
                    min={eventStartDate}
                    disabled={!eventStartDate}
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor='event-location'
                  className='block text-sm font-medium text-gray-700'
                >
                  Event Address
                </label>
                <input
                  id='event-location'
                  type='text'
                  className='input'
                  value={eventAddress}
                  onChange={(e) => setEventAddress(e.target.value)}
                  required
                  placeholder='Enter Event Address'
                />
              </div>
              <div>
                <label
                  htmlFor='City Name'
                  className='block text-sm font-medium text-gray-700'
                >
                  City Name
                </label>
                <select
                  id='visibility'
                  className='input'
                  value={eventLocation}
                  onChange={(e) => setEventLocation(e.target.value)}
                >
                  <option value='' disabled >
                    Select City
                  </option>
                  <option value='Mumbai'>Mumbai</option>
                  <option value='Delhi'>Delhi</option>
                  <option value='Bangalore'>Bangalore</option>
                  <option value='Pune'>Pune</option>
                  <option value='Chennai'>Chennai</option>
                  <option value='Jaipur'>Jaipur</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor='ticket-price'
                  className='block text-sm font-medium text-gray-700'
                >
                  Ticket Price
                </label>
                <input
                  id='ticket-price'
                  type='number'
                  className='input'
                  value={eventTicketsPrice}
                  onChange={(e) => seteventTicketsPrice(e.target.value)}
                  min={1}
                  required
                  placeholder='Enter the price per ticket '
                />
              </div>

              <div>
                <label
                  htmlFor='tickets-count'
                  className='block text-sm font-medium text-gray-700'
                >
                  Tickets Count
                </label>
                <input
                  id='tickets-count'
                  type='number'
                  className='input'
                  value={eventTicketsCount}
                  onChange={(e) => setEventTicketsCount(e.target.value)}
                  min={1}
                  required
                  placeholder='Enter maximum Capacity '
                />
              </div>

              <div className='space-y-4'>
                <div>
                  <label className='block text-sm font-medium text-gray-700'>
                    Event Description
                  </label>
                  <textarea
                    id='event-description'
                    className='input'
                    rows={2}
                    placeholder='Write a brief summary of your event'
                    value={eventDescription}
                    onChange={(e) => setEventDescription(e.target.value)}
                  ></textarea>
                </div>
              </div>

              <div className='flex justify-end'>
                <button
                  type='submit'
                  className='bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                  style={{ width: '100%' }}
                  onClick={handleSubmit}
                >
                  Create Event
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default CreateEventPage
