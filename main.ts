input.onGesture(Gesture.LogoUp, function () {
    basic.showIcon(IconNames.Heart)
    music.playTone(659, music.beat(BeatFraction.Whole))
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showIcon(IconNames.Duck)
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.showIcon(IconNames.Sword)
    music.playTone(277, music.beat(BeatFraction.Whole))
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Confused)
    music.playTone(659, music.beat(BeatFraction.Whole))
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showIcon(IconNames.Rollerskate)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showIcon(IconNames.Sad)
})
