let power = 0
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    power = Math.min(power + 10, 100)
    motors.dualMotorPower(Motor.AB, power)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    power = Math.max(power - 10, 0)
    motors.dualMotorPower(Motor.AB, power)
})
basic.forever(function () {
	
})
