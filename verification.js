const axios = require('axios').default

axios.defaults.headers.common['x-auth-license'] = 'xxxxxxx'
axios.defaults.baseURL = 'https://api-v1.banktopup.com'
axios
  .post('/api/v1/scb/verification', {
    deviceid: 'xxxxx',
    pin: 'xxxxxx',
    account_no: 'xxxx4696xx',
    account_to: 'xxxxx56xxx',
    bank_code: '004', //ดูที่ Bank List
    amount: 1.51,
  })
  .then(
    (response) => {
      console.log(JSON.stringify(response.data))
    },
    (error) => {
      console.log(JSON.stringify(error.response.data))
    }
  )
