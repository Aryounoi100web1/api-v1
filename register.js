const axios = require('axios').default

axios.defaults.headers.common['x-auth-license'] = 'xxxxxxx'
axios.defaults.baseURL = 'https://api-v1.banktopup.com'
axios
  .post('/api/v1/scb/register', {
    identification: 'xxxxxxxxxxxxx',
    year: '1947',
    month: '06',
    day: '22',
    pin: 'xxxxxx',
    mobile_phone_no: '0951731xxx',
    account_no: '672218xxxx',
    device_brand: 'ONEPLUS',
    device_code: 'ONEPLUS NT2031',
  })
  .then(
    (response) => {
      console.log(JSON.stringify(response.data))
    },
    (error) => {
      console.log(JSON.stringify(error.response.data))
    }
  )
