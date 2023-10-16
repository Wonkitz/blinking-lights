basic.forever(function () {
    basic.showIcon(IconNames.No)
    basic.pause(200)
    basic.clearScreen()
    basic.pause(500)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.pause(500)
})
