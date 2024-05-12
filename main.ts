let anologValue = 0
basic.forever(function () {
    for (let index = 0; index < 1023; index++) {
        pins.analogWritePin(AnalogPin.P14, anologValue)
        anologValue += 1
        basic.pause(10)
    }
    basic.pause(1000)
    for (let index = 0; index < 1023; index++) {
        pins.analogWritePin(AnalogPin.P14, anologValue)
        anologValue += -1
        basic.pause(10)
    }
})
