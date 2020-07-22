# Welcome to API-v1!

# API EndPoint : https://api-v1.banktopup.com

# วิธีการลงทะเบียนบัญชี

1. /api/v1/scb/register ส่งข้อมูลต่างๆไปเพิ่มเพิ่มบัญชี จากนั้นระบบจะตอบกลับมาด้วย deviceid เช่น ba8ff1f5-7ba6-4678-83fe-8abf004eab4c
2. /api/v1/scb/register/:deviceid ใส่ deviceid จากขั้น 1. จะเป็น /api/v1/scb/register/ba8ff1f5-7ba6-4678-83fe-8abf004eab4c แบบนี้ขั้นตอนนี้ส่ง otp เพื่อลงทะเบียน เสร็จแล้วระบบจะให้ deviceid แล้วนำสิ่งนี้ไปเก็บไว้ ถ้าหายหรือใช้ไม่ได้ก็ต้องลงทะเบียนใหม่ อารมแบบลงบัญชีในแอปใหม่ เก็บไปใช้ได้เรื่อยๆ
3. วิธีเช็คว่า deviceid เรามันพังหรือใช้ได้มั้ย ใช้วิธีนี้ /api/v1/scb/check_device ส่งข้อมูลไปที่นี่

# วิธีการดึงรายการ

1./api/v1/scb/transactions พร้อมด้วยข้อมูลระบบจะส่งรายการกลับมาให้

# API

| #                              | param                                                                                                                                                                                                                                                                                    |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| /api/v1/scb/check_device       | {"deviceid":"deviceid ของบัญชีที่จะเช็ค"}                                                                                                                                                                                                                                                |
| /api/v1/scb/register           | {"identification":"1849XXXXXXXXX เลขบัตรประชาชน","year":"2001 ปี ค.ส.","month":"01 เลขเดือน 2 หลัก","day":"31 เลขวัน 2 หลัก","pin":"123456 PIN","mobile_phone_no":"06XXXXXXXX เบอร์","account_no":"42XXXXXXXX เลขบัญชี","device_brand":"VIVO ชื่อมือถือ","device_code":"M00001 เลขรุ่น"} |
| /api/v1/scb/register/:deviceid | {"otp":"otp ที่รับจากมือถือ"}                                                                                                                                                                                                                                                            |
| /api/v1/scb/login              | {"deviceid":"xxx","pin":"xxxxx","account_no":"xxxxxxxx"}                                                                                                                                                                                                                                 |
| /api/v1/scb/transactions       | { "deviceid":"xxx", "pin":"xxxxx", "account_no" :"xxxxxxxx", "previous_day":7, "page_number":1, "page_size":20 }                                                                                                                                                                         |

# HTTP Header

    Content-Type : application/json
    x-auth-license : license ของท่าน

# Errors

| Code | MsgTH                                         |
| ---- | --------------------------------------------- |
| 100  | สำเร็จ                                        |
| 101  | ข้อมูลที่สมบูรณ์                              |
| 102  | ไม่พบหน้านี้                                  |
| 103  | ข้อผิดพลาดจาก SCB                             |
| 104  | บัตรประชาชน หรือ วันเดือนปีเกิด ไม่ถูกต้อง    |
| 105  | เบอร์ ไม่ถูกต้อง                              |
| 106  | ไม่พบ session register นี้                    |
| 107  | OTP ไม่ถูกต้อง                                |
| 108  | ข้อผิดพลาดจาก SCB 0x1                         |
| 109  | PIN หรือ รหัสผ่านไม่ถูกต้อง                   |
| 110  | เพิ่มอุปกรณ์ไม่สำเร็จ 0x1                     |
| 111  | เพิ่มอุปกรณ์ไม่สำเร็จ 0x2                     |
| 112  | PIN หรือ รหัสผ่านไม่ถูกต้อง                   |
| 113  | ไม่พบ License นี้                             |
| 114  | License นี้โดน Ban                            |
| 115  | เกิดข้อผิดพลาดในการดึงรายการ                  |
| 116  | DeviceID ไม่ตรงตาม License โปรด reigster ใหม่ |
| 199  | ข้อผิดพลาดอื่นๆ                               |

# Resp

    "error": {
    	"code": 100, code การตอบกลับ
    	"data": null, //null เมื่อ ไม่ error
    	"msg_th": "สำเร็จ" ภาษาไทย
    },

    "result": {
    	ข้อมูล
    }
