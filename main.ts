let X = 0
let Y = 0
basic.forever(function () {
    X = pins.analogReadPin(AnalogPin.P0)
    Y = pins.analogReadPin(AnalogPin.P1)
    if (X < 500 && Y == 1) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.No)
    }
})
