
const QRCode = require('qrcode')
let data = {
	name:"Employee Name",
	age:27,
	department:"Police",
	id:"aisuoiqu3234738jdhf100223"
}
let stringdata = JSON.stringify(data)
QRCode.toString(stringdata,{type:'terminal'},
					function (err, QRcode) {

	if(err) return console.log("error occurred")

	console.log(QRcode)
})

QRCode.toDataURL(stringdata, function (err, code) {
	if(err) return console.log("error occurred")

	console.log(code)
})
