import moment from "moment";
import {Reservation} from "../interfaces/Reservation";
import {roomsList} from "../Pages/roomsPage/Rooms";

export const reservationDays = (dateFrom, dateTo) => {
  const diff = moment(dateTo).diff(moment(dateFrom));
  // return moment(diff / 1000, "s").days()
  return diff / 1000 / 3600 / 24;
};

export const formattedPrice = (price) =>
  new Intl.NumberFormat("sk-SK", {
    style: "currency",
    currency: "EUR",
  }).format(price);

export const numberOfReservationDays = (reservation: Reservation | null) => {
    if(!reservation) {
        return 0;
    }
    return Number(reservationDays(reservation.dateFrom, reservation.dateTo).toString());

}

export const reservationRoom = (reservation: Reservation|null) => {

    if(!reservation || reservation.roomId === null) {
        return null;
    }
    const roomsListIndex = roomsList.findIndex(room => room.id === reservation.roomId);
    if(roomsListIndex === -1 ) {
        return null;
    }
    return roomsList[roomsListIndex];
}


