makerbit.onIrDatagram(function () {
	
})
makerbit.connectIrReceiver(DigitalPin.P1, IrProtocol.Keyestudio)
OLED12864_I2C.init(60)
timeanddate.setDate(7, 27, 2025)
timeanddate.setTime(13, 30, 0, timeanddate.MornNight.PM)
basic.forever(function () {
    OLED12864_I2C.showString(
    0,
    0,
    timeanddate.date(timeanddate.DateFormat.MDY),
    1
    )
})
