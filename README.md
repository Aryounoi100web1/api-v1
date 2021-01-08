# Welcome to API-v1!

# API EndPoint : https://api-v1.banktopup.com

# วิธีการลงทะเบียนบัญชีแบบ Online


1. เข้าเว็บ https://register-scb.banktopup.com/

2. กรอกข้อมูล แล้วกดส่งข้อมูล

3. ถ้าเว็บตอบกลับว่าให้ลงทะเบียนด้วยแอปก่อน กรอก OTP ให้โหลดแอปจาก https://raw.githubusercontent.com/Banktopup/api-v1/master/banktopup_register.apk
	3.1 กดติดตั้งแอป
	3.2 ใส่ซิมของบัญชีท่าน
	3.3 เปิดใช้เน็ตของซิมมือถือ
	3.4 กด ตรวจสอบเบอร์
	3.5 กด ลงทะเบียน เสร็จแล้วไปขั้นตอนต่อไปได้เลย ถ้าเบอร์ได้ลงทะเบียนแล้วอนาคตไม่ต้องลงทะเบียนซ้ำอีก นอกจากเปลี่ยนเบอร์ที่ผูกกับบัญชี
4. กลับมาที่เว็บ กรอก otp แล้วกดส่ง
5. จะได้รับ deviceid มา ให้นำไปเก็บหรือใช้ได้ตามสะดวก

6. วิธีเช็คว่า deviceid เรามันพังหรือใช้ได้มั้ย ใช้วิธีนี้ /api/v1/scb/check_device ส่งข้อมูลไปที่นี่


# วิธีการลงทะเบียนบัญชี

1. /api/v1/scb/register ส่งข้อมูลต่างๆไปเพิ่มเพิ่มบัญชี จากนั้นระบบจะตอบกลับมาด้วย deviceid เช่น ba8ff1f5-7ba6-4678-83fe-8abf004eab4c
2. /api/v1/scb/register/:deviceid ใส่ deviceid จากขั้น 1. จะเป็น /api/v1/scb/register/ba8ff1f5-7ba6-4678-83fe-8abf004eab4c แบบนี้ขั้นตอนนี้ส่ง otp เพื่อลงทะเบียน เสร็จแล้วระบบจะให้ deviceid แล้วนำสิ่งนี้ไปเก็บไว้ ถ้าหายหรือใช้ไม่ได้ก็ต้องลงทะเบียนใหม่ อารมแบบลงบัญชีในแอปใหม่ เก็บไปใช้ได้เรื่อยๆ
3. วิธีเช็คว่า deviceid เรามันพังหรือใช้ได้มั้ย ใช้วิธีนี้ /api/v1/scb/check_device ส่งข้อมูลไปที่นี่

# วิธีการดึงรายการ

1./api/v1/scb/transactions พร้อมด้วยข้อมูลระบบจะส่งรายการกลับมาให้

# API (Method : POST)

| #                              | param                                                                                                                                                                                                                                                                                    |resp|
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |--------|
| /api/v1/scb/check_device       | {"deviceid":"deviceid ของบัญชีที่จะเช็ค"}                                                                                                                                                                                                                                                |{ "error": { "code": 100, "data": null, "msg_th": "สำเร็จ" }, "result": { "status": true } }|
| /api/v1/scb/register           | {"identification":"1849XXXXXXXXX เลขบัตรประชาชน","year":"2001 ปี ค.ส.","month":"01 เลขเดือน 2 หลัก","day":"31 เลขวัน 2 หลัก","pin":"123456 PIN","mobile_phone_no":"06XXXXXXXX เบอร์","account_no":"42XXXXXXXX เลขบัญชี","device_brand":"VIVO ชื่อมือถือ","device_code":"M00001 เลขรุ่น"} |{ "error": { "code": 100, "data": null, "msg_th": "สำเร็จ" }, "result": { "deviceid": "", "msg": "ลงทะเบียนเรียบร้อย", "pin": "" } }|
| /api/v1/scb/register/:deviceid | {"otp":"otp ที่รับจากมือถือ"}                                                                                                                                                                                                                                                            |{ "error": { "code": 100, "data": null, "msg_th": "สำเร็จ" }, "result": { "deviceid": "", "msg": "ส่ง OTP เรียบร้อย" } }|
| /api/v1/scb/transactions       | { "deviceid":"xxx", "pin":"xxxxx", "account_no" :"xxxxxxxx", "previous_day":7, "page_number":1, "page_size":20 }                                                                                                                                                                         |{ "error": { "code": 100, "data": null, "msg_th": "สำเร็จ" }, "result": { "accountNo": "429xxxxx", "txnList": [ { "txnBatchRunDate": "2020-08-24", "txnSequence": 2, "sortSequence": 0, "txnDateTime": "2020-08-24T19:06:36+07:00", "txnAmount": 1001, "txnCurrency": "764", "txnDebitCreditFlag": "D", "txnRemark": "โอนไป KBANK x6096 xxxx   ", "annotation": null, "txnChannel": { "code": "ENET", "description": "EASY" }, "txnCode": { "code": "X2", "description": "ถอนเงิน" } } ], "pageSize": 20, "nextPageNumber": null, "endOfListFlag": "1" } }|
| /api/v1/scb/verification       | { "deviceid": "xxx", "pin": "xxxxx", "account_no": "xxxxxxxx", "account_to": "xxxxxxxx", "bank_code": "bankCode ดูได้จาก bank list", "amount": 1.00 }                                                                                                                                    |{ "error": { "code": 100, "data": null, "msg_th": "สำเร็จ" }, "result": { "totalFee": 0, "scbFee": 0, "botFee": 0, "channelFee": 0, "accountFromName": "นาย xxxx xxxx", "accountTo": "0xxxxx6", "accountToName": "นาย xxx xxxxx", "accountToType": "00", "accountToDisplayName": "นาย xxxx xxx", "accountToBankCode": "004", "pccTraceNo": "023815000585", "transferType": "ORFT", "feeType": "", "terminalNo": "00055", "sequence": "000585", "transactionToken": "d8141e4f-b2xxxxxxx", "bankRouting": "ITMX", "fastpayFlag": null, "ctReference": "" } }|
| /api/v1/scb/transfer           | { "deviceid": "xxx", "pin": "xxxxx", "account_no": "xxxxxxxx", "account_to": "xxxxxxxx", "bank_code": "bankCode ดูได้จาก bank list", "amount": 1.00 }                                                                                                                                    |{ "error": { "code": 100, "data": null, "msg_th": "สำเร็จ" }, "result": { "transactionId": "xxxxxx", "transactionDateTime": "2020-08-25T22:07:12+07:00", "remainingBalance": 15.19, "status": null, "orgRquid": null, "additionalMetaData": { "paymentInfo": null }, "isForcePost": "0" } }|

# HTTP Header

    Content-Type : application/json
    x-auth-license : license ของท่าน
    x-legit : true|false ค่าความเนียน

# Bank List

| bankCode | bankAbbrevEn | bankNameTh                                    |
| -------- | ------------ | --------------------------------------------- |
| 014      | null         | ธนาคารไทยพาณิชย์ จำกัด (มหาชน)                |
| 034      | BAAC         | ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร          |
| 025      | BAY          | ธนาคารกรุงศรีอยุธยา จำกัด (มหาชน)             |
| 002      | BBL          | ธนาคารกรุงเทพ จำกัด (มหาชน)                   |
| 022      | CIMB         | ธนาคารซีไอเอ็มบี ไทย จำกัด (มหาชน)            |
| 017      | CITI         | ธนาคารซิตี้แบงก์                              |
| 032      | DB           | ธนาคารดอยช์แบงก์                              |
| 033      | GHB          | ธนาคารอาคารสงเคราะห์                          |
| 030      | GSB          | ธนาคารออมสิน                                  |
| 031      | HSBC         | ธนาคารฮ่องกงและเซี่ยงไฮ้ จำกัด                |
| 070      | ICBC         | ธนาคารไอซีบีซี (ไทย) จำกัด (มหาชน)            |
| 066      | ISBT         | ธนาคารอิสลามแห่งประเทศไทย                     |
| 004      | KBANK        | ธนาคารกสิกรไทย จำกัด (มหาชน)                  |
| 069      | KK           | ธนาคารเกียรตินาคิน จำกัด (มหาชน)              |
| 006      | KTB          | ธนาคารกรุงไทย จำกัด (มหาชน)                   |
| 073      | LHBANK       | ธนาคารแลนด์ แอนด์ เฮ้าส์ จำกัด (มหาชน)        |
| 039      | MHCB         | ธนาคารมิซูโฮ คอร์ปอเรต                        |
| 020      | SCBT         | ธนาคารสแตนดาร์ดชาร์เตอร์ด (ไทย) จำกัด (มหาชน) |
| 018      | SMBC         | ธนาคารซูมิโตโม มิตซุย แบงกิ้ง คอร์ปอเรชั่น    |
| 065      | TBANK        | ธนาคารธนชาต จำกัด (มหาชน)                     |
| 071      | TCRB         | ธนาคารไทยเครดิต เพื่อรายย่อย จำกัด (มหาชน)    |
| 011      | TMB          | ธนาคารทหารไทย จำกัด (มหาชน)                   |
| 067      | TSCO         | ธนาคารทิสโก้ จำกัด (มหาชน)                    |
| 024      | UOB          | ธนาคารยูโอบี จำกัด (มหาชน)                    |

# Errors

| Code | MsgTH                                                    |
| ---- | -------------------------------------------------------- |
| 100  | สำเร็จ                                                   |
| 101  | ข้อมูลที่สมบูรณ์                                         |
| 102  | ไม่พบหน้านี้                                             |
| 103  | ข้อผิดพลาดจาก SCB                                        |
| 104  | บัตรประชาชน หรือ วันเดือนปีเกิด ไม่ถูกต้อง               |
| 105  | เบอร์ ไม่ถูกต้อง                                         |
| 106  | ไม่พบ session register นี้                               |
| 107  | OTP ไม่ถูกต้อง                                           |
| 108  | ข้อผิดพลาดจาก SCB 0x1                                    |
| 109  | PIN หรือ รหัสผ่านไม่ถูกต้อง                              |
| 110  | เพิ่มอุปกรณ์ไม่สำเร็จ 0x1                                |
| 111  | เพิ่มอุปกรณ์ไม่สำเร็จ 0x2                                |
| 112  | PIN หรือ รหัสผ่านไม่ถูกต้อง                              |
| 113  | ไม่พบ License นี้                                        |
| 114  | License นี้โดน Ban                                       |
| 115  | เกิดข้อผิดพลาดในการดึงรายการ                             |
| 116  | DeviceID ไม่ตรงตาม License โปรด reigster ใหม่            |
| 117  | ไม่ได้รับอนุญาต ให้ใช้เข้าถึงฟังก์ชั่นนี้                |
| 118  | เกิดข้อผิดพลาดในการตรวจสอบยอดโปรดลองให้ด้วยจำนวนเงินอื่น |
| 119  | เกิดข้อผิดพลาดในการโอนเงินโปรดลองให้ด้วยจำนวนเงินอื่น    |
| 199  | ข้อผิดพลาดอื่นๆ                                          |

# Resp

    "error": {
    	"code": 100, code การตอบกลับ
    	"data": null, //null เมื่อ ไม่ error
    	"msg_th": "สำเร็จ" ภาษาไทย
    },

    "result": {
    	ข้อมูล
    }
