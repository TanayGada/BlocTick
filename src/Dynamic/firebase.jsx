import { useEffect, useState } from 'react'

export const useFetch = (authToken) => {
  const [data, setData] = useState({})

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch('your_server_url/api/verifyToken', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token: authToken }),
        })

        if (response.ok) {
          const result = await response.json()
          setData(result)
        } else {
          console.error('Failed to verify token')
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchApi()
  }, [authToken])

  return { data }
}
