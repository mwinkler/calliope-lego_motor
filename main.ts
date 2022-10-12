let power = 0
let color = 0
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    power = Math.min(power + 10, 100)
    updateMotor()
})
function updateMotor () {
    motors.dualMotorPower(Motor.AB, power)
    color = 255 * (power / 100)
    basic.setLedColor(basic.rgb(color, color, color))
}
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    power = Math.max(power - 10, 0)
    updateMotor()
})
basic.forever(function () {
	
})
