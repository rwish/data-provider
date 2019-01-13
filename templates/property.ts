import { Room } from './room';

export class Property {

    propID: number;
    propName: string;
    existingRooms: Array<Room> = [];

    /* constructor (propID: number, propName: string) {
        this.propID = propID;
        this.propName = propName;
    } */
}