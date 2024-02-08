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
import { ConnectWallet } from '../../main'
import { CheckBalance } from '../../blockchain/Functions/ReadFunctions/CheckBalance'
import { CreateEvent } from '../../blockchain/Functions/WriteFunctions/CreateEvent'


// const queryClient = new QueryClient()
// function ConnectWallet() {
//   const { isConnected } = Account()
//   if (isConnected) return <Account />
//   return <WalletOptions />
// }

const CreateEventPage = () => {
  const [eventName, setEventName] = useState('')
  const [startDateTime, setStartDateTime] = useState('')
  const [endDateTime, setEndDateTime] = useState('')
  const [eventLocation, setEventLocation] = useState('')
  const [eventTicketType, setEventTicketType] = useState('free')
  const [eventTicketPrice, setEventTicketPrice] = useState('')
  const [requireApproval, setRequireApproval] = useState(false)
  const [eventTicketsCount, setEventTicketsCount] = useState('')
  const [visibility, setVisibility] = useState('public')
  const [eventDescription, setEventDescription] = useState('')
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
        !startDateTime ||
        !endDateTime ||
        !eventLocation ||
        !eventTicketsCount ||
        !eventDescription
      ) {
        console.error('Please fill in all required fields.')
        return
      }
      // ticket price is a positive number if the ticket type is paid
      if (eventTicketType === 'paid' && eventTicketPrice <= 0) {
        console.error('Please enter a valid ticket price.')
        return
      }
      // ticket count is a positive integer
      if (eventTicketsCount <= 0) {
        console.error('Please enter a valid tickets count.')
        return
      }
      var myDate = new Date(startDateTime);
      var myEpoch = myDate.getTime()/1000.0;
      // Data to be sent to the backend
      const eventData = {
        eventName,
        myEpoch,
        // endDateTime,
        // eventLocation,
        // eventTicketType,
        eventTicketPrice,
        // requireApproval,
        eventTicketsCount,
        // visibility,
        // eventDescription,
      }

      CreateEvent({eventName , eventTicketsCount, myEpoch})

      // Send data to backend
      const response = await fetch('/events', {
        method: 'POST',
        body: JSON.stringify(eventData),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
      })

      console.log('Event created successfully:', response.data)
      setIsEventCreated(true)
      navigate('/events')
    } catch (error) {
      // Handle errors
      console.log('Error creating event:', error)
    }
  }

  return (
    // <WagmiProvider config={config}>
    //     <QueryClientProvider client={queryClient}>
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
          <h1 className='text-4xl font-bold text-gray-800 mb-6 sm:text-2xl text-center'>
            Create Event
          </h1>
          <form className='space-y-6'>
            <div className='space-y-4 px-2'>
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
                    value={startDateTime}
                    onChange={(e) => setStartDateTime(e.target.value)}
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
                    value={endDateTime}
                    onChange={(e) => setEndDateTime(e.target.value)}
                    min={startDateTime}
                    disabled={!startDateTime}
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor='event-location'
                  className='block text-sm font-medium text-gray-700'
                >
                  Event Location
                </label>
                <input
                  id='event-location'
                  type='text'
                  className='input'
                  value={eventLocation}
                  onChange={(e) => setEventLocation(e.target.value)}
                  required
                  placeholder='Offline location or virtual link'
                />
              </div>
            </div>
            <div className='space-y-4'>
              <fieldset>
                <legend className='text-sm font-medium text-gray-700'>
                  Ticket Type
                </legend>
                <div className='mt-2 space-y-4'>
                  <div className='flex items-center'>
                    <input
                      id='ticket-type-free'
                      type='radio'
                      className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300'
                      name='eventTicketType'
                      value='free'
                      checked={eventTicketType === 'free'}
                      onChange={(e) => setEventTicketType(e.target.value)}
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}
                    />
                    <label
                      htmlFor='ticket-type-free'
                      className='ml-3 block text-sm font-medium text-gray-700'
                    >
                      Free
                    </label>
                  </div>
                  <div className='flex items-center'>
                    <input
                      id='ticket-type-paid'
                      type='radio'
                      className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300'
                      name='eventTicketType'
                      value='paid'
                      checked={eventTicketType === 'paid'}
                      onChange={(e) => setEventTicketType(e.target.value)}
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}
                    />
                    <label
                      htmlFor='ticket-type-paid'
                      className='ml-3 block text-sm font-medium text-gray-700'
                    >
                      Paid
                    </label>
                  </div>
                </div>
              </fieldset>
              {eventTicketType === 'paid' && (
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
                    value={eventTicketPrice}
                    onChange={(e) => setEventTicketPrice(e.target.value)}
                    min={1}
                    required
                    placeholder='Enter the price per ticket '
                  />
                </div>
              )}
              <div className='flex items-center'>
                <label
                  htmlFor='require-approval'
                  className='block text-sm font-medium text-gray-700'
                >
                  Require Approval
                </label>
                <input
                  id='require-approval'
                  type='checkbox'
                  className=' ml-4 focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded'
                  value={requireApproval}
                  onChange={(e) => setRequireApproval(e.target.checked)}
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}
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
                  placeholder='Enter the maximum number of tickets available'
                />
              </div>
              <div>
                <label
                  htmlFor='visibility'
                  className='block text-sm font-medium text-gray-700'
                >
                  Visibility
                </label>
                <select
                  id='visibility'
                  className='input'
                  value={visibility}
                  onChange={(e) => setVisibility(e.target.value)}
                >
                  <option value='public'>Public</option>
                  <option value='private'>Private</option>
                </select>
              </div>
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

            {/* <button
                type='submit'
                className='bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                style={{ width: '100%' }}
                onClick={handleDeposit}
              >
                Deposit
              </button> */}
          </form>
          <div>
            <Deposit />
            <ConnectWallet />
            <CheckBalance />
            <Account />
          </div>
        </div>
      </div>
    </Layout>
    // </QueryClientProvider>
    // </WagmiProvider>
  )
}

export default CreateEventPage
