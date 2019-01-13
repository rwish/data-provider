
export class Room {
    roomID: number;
    roomName: string;
    onlineUserCount: number;
    booked: Array<number> = [];
    priceStChartData: Array<any> = [
        {data: [], label: 'Buyer'},
        {data: [], label: 'Seller'}
    ];
    priceStChartLabels: Array<any> = [];
}
