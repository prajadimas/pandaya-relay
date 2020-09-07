const rpio = require('rpio')
const io = require('socket.io-client')

rpio.init({
	gpiomem: true,
	mapping: 'gpio',
	close_on_exit: true
})

function triggerHigh(gpioPin) {
	console.log('trigger HIGH')
	rpio.write(gpioPin, rpio.HIGH)
}

function triggerLow(gpioPin) {
	console.log('trigger LOW')
	rpio.write(gpioPin, rpio.LOW)
}
		
rpio.open(17, rpio.OUTPUT)

/* const socket = io('http://127.0.0.1:50105')
var config = {
	gpio: 4,
	high: {},
	low: {}
}
socket.on('connect', function () {
	socket.emit('client', 'pandaya-relay')
	socket.on('config', (opts) => {
		config.gpio = opts.gpio || config.gpio
		config.high = opts.high || config.high
		config.low = opts.low || config.low
	})
	socket.on('data', (data) => {
		console.log('Data', data)
		rpio.open(config.gpio, rpio.OUTPUT)
		if (data === config.high) {
			triggerHigh(config.gpio)
		} else if (data === config.low) {
			triggerLow(config.gpio)
		}
	})
})
socket.on('disconnect', function () {
	console.log('Disconnected from Main Process')
}) */

setInterval(function () {
	triggerHigh(17)
	setTimeout(function () {
		triggerLow(17)
	}, 2000)
}, 4000)

