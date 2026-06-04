// Long press the micro:bit logo to stop all motors
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    jellystem.wheelStop(jellystem.Motors.AllMotors)
})
// Press button A to turn the steering servo left (135 degrees)
input.onButtonPressed(Button.A, function () {
    jellystem.extendServoControl(jellystem.PwmAndServoIndex.S4, jellystem.ServoType.Servo180, 135)
    basic.showLeds(`
        # . . . .
        . # . . .
        . . # . .
        . . # . .
        . . # . .
        `)
})
// Press buttons A and B together to center the steering servo (90 degrees)
input.onButtonPressed(Button.AB, function () {
    jellystem.extendServoControl(jellystem.PwmAndServoIndex.S4, jellystem.ServoType.Servo180, 90)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
})
// Press button B to turn the steering servo right (45 degrees)
input.onButtonPressed(Button.B, function () {
    jellystem.extendServoControl(jellystem.PwmAndServoIndex.S4, jellystem.ServoType.Servo180, 45)
    basic.showLeds(`
        . . . . #
        . . . # .
        . . # . .
        . . # . .
        . . # . .
        `)
})
// Short press the micro:bit logo to run all motors forward at 50% speed
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    jellystem.setMotorsDirectionSpeed(jellystem.Motors.AllMotors, jellystem.MotorsDirection.CC, 50)
})
// Startup initialization settings
jellystem.wheelStop(jellystem.Motors.AllMotors)
jellystem.setS1ToS4Type(jellystem.S1ToS4Type.Servo)
jellystem.extendServoControl(jellystem.PwmAndServoIndex.S4, jellystem.ServoType.Servo180, 90)
// Display the "Electronics Test v1" program string
basic.showString("et-v1")
// Display a straight line at start
basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    `)
