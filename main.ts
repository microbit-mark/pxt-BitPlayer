/*****************************************************************************
* | Description :	BitPlayer extension for micro:bit
* | Developer   :   CH Makered
* | More Info   :	http://chmakered.com/
******************************************************************************/

enum Joystick {
    //% block=" UpLeft"
    UpLeft,
    //% block=" ↑ Up"
    Up,
    //% block=" UpRight"
    UpRight,
    //% block=" ← Left"
    Left,
    //% block=" Middle"
    Middle,
    //% block=" → Right"
    Right,
    //% block=" LowerLeft"
    LowerLeft,
    //% block=" ↓ Down"
    Down,
    //% block=" LowerRight"
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
    let posi_init = 0;
    const x0 = 500;
    const y0 = 500;
    const d0 = 250;

    function InitialPosition(): void {
        posi_init = 1;
        return;
    }

    /**
    * Get the joystick state
    * @param position the current position of joystick
    */
    //% blockId=OnJoystick
    //% block="joystick $position|"
    //% position.fieldEditor="gridpicker"
    //% position.fieldOptions.columns=3
    export function OnJoystick(position: Joystick): number {
        let x = pins.analogReadPin(AnalogPin.P1) - x0;
        let y = pins.analogReadPin(AnalogPin.P2) - y0;
        let d = Math.sqrt(Math.abs(x * x) + Math.abs(y * y));
        const value1 = d * 0.38;        //0.38 is the value of sin 22.5°
        const value2 = d * 0.92;        //0.92 is the value of sin 67.5°
        let getPosition = Joystick.Middle;

        if (d > d0) {
            if (x > 0 || y > 0) {               // (x,y) is at top right area
                if (y > value2) {
                    getPosition = Joystick.Up;
                } else if (y < value1) {
                    getPosition = Joystick.Right;
                } else {
                    getPosition = Joystick.UpRight;
                }
            } else if (x > 0 || y < 0) {        // (x,y) is at bot right area
                if (x > value2) {
                    getPosition = Joystick.Right;
                } else if (x < value1) {
                    getPosition = Joystick.Down;
                } else {
                    getPosition = Joystick.LowerRight;
                }
            } else if (x < 0 || y < 0) {         // (x,y) is at bot left area
                y = Math.abs(y);
                if (y > value2) {
                    getPosition = Joystick.Down;
                } else if (y < value1) {
                    getPosition = Joystick.Left;
                } else {
                    getPosition = Joystick.LowerLeft;
                }
            } else if (x < 0 || y > 0) {         // (x,y) is at top left area
                if (y > value2) {
                    getPosition = Joystick.Up;
                } else if (y < value1) {
                    getPosition = Joystick.Left;
                } else {
                    getPosition = Joystick.UpLeft;
                }
            }
        } else {
            getPosition = Joystick.Middle;
        }

        if (getPosition = position) {
            return x;
        } else {
            return x;
        }
    }



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
    //% blockId=OnKey
    //% block="on key $key| is $keyEvent"
    export function OnKey(key: BitPlayerKey, keyEvent: BitPlayerKeyEvent, handler: Action) {
        if (!posi_init) {
            InitialPosition();
        }

        init();
        control.onEvent(<number>key, <number>keyEvent, handler); // register handler
    }

    /**
    * Get the key state (pressed or not)
    * @param key the pin that acts as a button
    */
    //% blockId=KeyPressed
    //% block="key $key| is pressed"
    export function KeyPressed(key: BitPlayerKey): boolean {
        if (!posi_init) {
            InitialPosition();
        }

        const pin = <DigitalPin><number>key;
        pins.setPull(pin, PinPullMode.PullUp);
        return pins.digitalReadPin(<DigitalPin><number>key) == 0;
    }
}