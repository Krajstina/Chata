export interface Reservation {
    email?: string,
    address?: string,
    phone?: string,
    name: string,
    lastName: string,
    guests:number,
    dateFrom: Date,
    dateTo: Date,
    roomId: number | null,
}