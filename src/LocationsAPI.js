const api = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=53.55,10&radius=1500&type=museums&keyword=museum&key=AIzaSyBck9KYKnvVvEeYaJdZfRAGLGi1MA4FSAw'

// Generate a unique token for storing your location data
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const getAll = () => 
    fetch(`${api}`, { headers })
        .then(res => res.json().results)
        .then(data => data)