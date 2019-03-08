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

enum BitPlayerKey {
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
    key_R = <number>DAL.MICROBIT_ID_IO_P16,
}

/**
 * Button Events of BitPlayer
 */
//%
enum BitPlayerKeyEvent {
    //% block="click"
    click = DAL.MICROBIT_BUTTON_EVT_CLICK,
    //% block="pressed"
    pressed = DAL.MICROBIT_BUTTON_EVT_DOWN,
    //% block="released"
    released = DAL.MICROBIT_BUTTON_EVT_UP,
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

	/**
	 * 
	 */
    //% shim=bitplayer::init
    function init(): void {
        return;
    }


    /**
     * Do something when a key is pressed, releassed or clicked
     */
    //% blockId=OnButton
    //% block="on key $key| is $keyEvent"
    export function OnButton(key: BitPlayerKey, keyEvent: BitPlayerKeyEvent, handler: Action) {
        init();
        control.onEvent(<number>key, <number>keyEvent, handler); // register handler
    }
}