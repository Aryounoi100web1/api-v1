const axios = require('axios').default

axios.defaults.headers.common['x-auth-license'] = 'xxxxxxx'
axios.defaults.baseURL = 'https://api-v1.banktopup.com'
axios
  .post('/api/v1/scb/transactions', {
    deviceid: 'xxx',
    pin: 'xxxxxx',
    account_no: 'xxxxxxxxxx',
    previous_day: 7,
    page_number: 1,
    page_size: 20,
  })
  .then(
    (response) => {
      console.log(JSON.stringify(response.data))
    },
    (error) => {
      console.log(JSON.stringify(error.response.data))
    }
  )
