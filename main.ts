/*****************************************************************************
* | Description :	BitPlayer extension for micro:bit
* | Developer   :   CH Makered
* | More Info   :	http://chmakered.com/
******************************************************************************/

enum Joystick {
    //% block=" ↖ UpLeft"
    UpLeft,
    //% block=" ↑ Up"
    Up,
    //% block=" ↗ UpRight"
    UpRight,
    //% block=" ← Left"
    Left,
    //% block=" ○ Middle"
    Middle,
    //% block=" → Right"
    Right,
    //% block=" ↙ LowerLeft"
    LowerLeft,
    //% block=" ↓ Down"
    Down,
    //% block=" ↘ LowerRight"
    LowerRight
}

enum Key {
    //% block="A"
    key_A = <number>DAL.MICROBIT_ID_IO_P5,
    //% block="B"
    key_B = <number>DAL.MICROBIT_ID_IO_P11,
    //% block="C"
    key_C = <number>DAL.MICROBIT_ID_IO_P13,
    //% block="D"
    key_D = <number>DAL.MICROBIT_ID_IO_P14,
    //% block="L"
    key_L = <number>DAL.MICROBIT_ID_IO_P15,
    //% block="R"
    key_R = <number>DAL.MICROBIT_ID_IO_P16
}

/**
 * Button Events of BitPlayer
 */
//%
enum KeyEvent {
    //% block="click"
    click = DAL.MICROBIT_BUTTON_EVT_CLICK,
    //% block="pressed"
    pressed = DAL.MICROBIT_BUTTON_EVT_DOWN,
    //% block="released"
    released = DAL.MICROBIT_BUTTON_EVT_UP
}


/**
 * Provides access to BitPlayer blocks for micro: bit functionality.
 */
//% color=190 icon="\uf126" block= "BitPlayer"
//% groups="['Analog', 'Digital', 'I2C', 'Grove Modules']"
namespace BitPlayer {
    let pin_init: number = 0;

    let joystick_X = AnalogPin.P1;
    let joystick_Y = AnalogPin.P2;

    function init(): void {
        return;
    }

    //Initialize the pins of the push buttons 
    function PinInit(): void {
        pins.setPull(DigitalPin.P5, PinPullMode.PullNone);
        pins.setPull(DigitalPin.P11, PinPullMode.PullNone);
        pins.setPull(DigitalPin.P13, PinPullMode.PullNone);
        pins.setPull(DigitalPin.P14, PinPullMode.PullNone);
        pins.setPull(DigitalPin.P15, PinPullMode.PullNone);
        pins.setPull(DigitalPin.P16, PinPullMode.PullNone);
        pin_init = 1;
        return;
    }

    /**
     * Do something when a key is pressed, releassed or clicked
     */
    //% blockId=OnButton
    //% block="on key $key| is $keyEvent"
    export function OnButton(key: Key, keyEvent: KeyEvent, handler: Action) {
        init();
        //Initialize the pins if it's not initialized
        if (!pin_init) {
            PinInit();
        }
        control.onEvent(<number>key, <number>keyEvent, handler); // register handler
    }
}