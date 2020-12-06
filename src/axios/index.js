import Axios from 'axios'

export default Axios.create({
  baseURL: 'http://aray.hibiki.work',
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  timeout: 3000
})
