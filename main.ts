input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 2; index++) {
        basic.showNumber(3 - index)
    }
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.SmallSquare)
    basic.showIcon(IconNames.Square)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    if (input.temperature() < 20) {
        basic.showIcon(IconNames.No)
    } else if (input.temperature() < 23) {
        basic.showString("vrienden?")
    } else if (input.temperature() < 27) {
        basic.showIcon(IconNames.SmallHeart)
    } else if (28 < input.temperature()) {
        for (let index = 0; index < 5; index++) {
            basic.showIcon(IconNames.Heart)
            basic.showIcon(IconNames.SmallHeart)
        }
    } else {
    	
    }
})
basic.forever(function () {
	
})
