/*****************************************************************************
* | Description :	BitPlayer extension for micro:bit
* | Developer   :   CH Makered
* | More Info   :	http://chmakered.com/
******************************************************************************/

enum Joystick {
    //% block=" ← Left"
    Left,
    //% block=" → Right"
    Right,
    //% block=" ↑ Up"
    Up,
    //% block=" ↓ Down"
    Down,
    //% block=" ↖ UpLeft"
    UpLeft,
    //% block=" ↗ UpRight"
    UpRight,
    //% block=" ↙ LowerLeft"
    LowerLeft,
    //% block=" ↘ LowerRight"
    LowerRight
}

enum AnalogPort {
    //% block="P0"
    P0,
    //% block="P1"
    P1,
    //% block="P2"
    P2
}

enum DistanceUnit {
    //% block="cm"
    cm,
    //% block="inch"
    inch
}

/**
 * Provides access to BitTest blocks for micro: bit functionality.
 */
//% color=190 icon="\uf126" block= "BitPlayer"
//% groups="['Analog', 'Digital', 'I2C', 'Grove Modules']"
namespace BitPlayer {
    /**
     * read the status of a digital input
     */
    //% blockId=read_Din_status
    //% block="digital pin $grove| is $high"
    //% high.shadow="toggleHighLow"
    //% high.defl="true"
    //% group="Digital"
    //% weight=10
    export function read_Din_status(grove: Joystick, high: boolean): boolean {
        return false;
    }

}