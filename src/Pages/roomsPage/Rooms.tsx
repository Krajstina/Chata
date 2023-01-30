import React, {useContext, useEffect, useState} from "react";
import RoomCard from "./RoomCard";
import {Room} from "../../interfaces/Room";
import clsx from "clsx";
import {ChevronLeftIcon} from "@heroicons/react/24/solid";
import RoomDetailCard from "./RoomDetailCard";
import {ReservationContext, ReservationContextType} from "../../App";

interface RoomsProps {}
export const roomsList: Room[] = [
  {
    label: "Room 1",
    images: ["/assets/images/Room1.jpg", "/assets/images/Room4.jpg"],
    description:
      "From the beginning of the day, this will be the occasion for a strong moment of conviviality during which your host will be at your service to help you prepare your visits in the region!",
    detail:
      "Lorem ipsum dolor sit amet, id ceteros legendos tacimates mei, ignota aliquando referrentur eum ei, dolore tamquam civibus no qui. Cu euismod blandit nec, ei ignota facilis mediocrem eam. Usu id cetero assentior definiebas, eu has oportere deseruisse, nostrud nonumes has ad. Mel volumus neglegentur consectetuer ex.Lorem ipsum dolor sit amet, id ceteros legendos tacimates mei, ignota aliquando referrentur eum ei, dolore tamquam civibus no qui. Cu euismod blandit nec, ei ignota facilis mediocrem eam. Usu id cetero assentior definiebas, eu has oportere deseruLorem ipsum dolor sit amet, id ceteros legendos tacimates mei, ignota aliquando referrentur eum ei, dolore tamquam civibus no qui. Cu euismod blandit nec, ei ignota facilis mediocrem eam. Usu id cetero assentior definiebas, eu has oportere deseru",
    price: 50,
    id: 1,
  },
  {
    label: "Room 2",
    images: ["/assets/images/Room2.jpg"],
    description:
      "From the beginning of the day, this will be the occasion for a strong moment of conviviality during which your host will be at your service to help you prepare your visits in the region!",
    detail:
      "Lorem ipsum dolor sit amet, id ceteros legendos tacimates mei, ignota aliquando referrentur eum ei, dolore tamquam civibus no qui. Cu euismod blandit nec, ei ignota facilis mediocrem eam. Usu id cetero assentior definiebas, eu has oportere deseruisse, nostrud nonumes has ad. Mel volumus neglegentur consectetuer ex.Lorem ipsum dolor sit amet, id ceteros legendos tacimates mei, ignota aliquando referrentur eum ei, dolore tamquam civibus no qui. Cu euismod blandit nec, ei ignota facilis mediocrem eam. Usu id cetero assentior definiebas, eu has oportere deseruLorem ipsum dolor sit amet, id ceteros legendos tacimates mei, ignota aliquando referrentur eum ei, dolore tamquam civibus no qui. Cu euismod blandit nec, ei ignota facilis mediocrem eam. Usu id cetero assentior definiebas, eu has oportere deseru",
    price: 40,
    id: 2,
  },
  {
    label: "Room 3",
    images: ["/assets/images/Room.jpg"],
    description:
      "From the beginning of the day, this will be the occasion for a strong moment of conviviality during which your host will be at your service to help you prepare your visits in the region!",
    detail:
      "Lorem ipsum dolor sit amet, id ceteros legendos tacimates mei, ignota aliquando referrentur eum ei, dolore tamquam civibus no qui. Cu euismod blandit nec, ei ignota facilis mediocrem eam. Usu id cetero assentior definiebas, eu has oportere deseruisse, nostrud nonumes has ad. Mel volumus neglegentur consectetuer ex.Lorem ipsum dolor sit amet, id ceteros legendos tacimates mei, ignota aliquando referrentur eum ei, dolore tamquam civibus no qui. Cu euismod blandit nec, ei ignota facilis mediocrem eam. Usu id cetero assentior definiebas, eu has oportere deseruLorem ipsum dolor sit amet, id ceteros legendos tacimates mei, ignota aliquando referrentur eum ei, dolore tamquam civibus no qui. Cu euismod blandit nec, ei ignota facilis mediocrem eam. Usu id cetero assentior definiebas, eu has oportere deseru",
    price: 30,
    id: 3,
  },
];
const Rooms = (props: RoomsProps) => {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [isChoosingRoom, setIsChoosingRoom] = useState(false);

  const reservationContext = useContext(
    ReservationContext
  ) as ReservationContextType;
  const onSubmit = async () => {
    const reservation = reservationContext.reservation;
    if (!reservation) return Promise.reject();
    if (selectedRoom) {
      reservation.roomId = selectedRoom.id;
      const result = await reservationContext.setReservationHandler(
        reservation
      );
      const fulfilled = Promise.all([result]).then((r) => {
        window.location.pathname = "/checkout";
      });
      return fulfilled;
    }
  };

  const selectRoomHandler = (id: number) => {
    setSelectedRoom(roomsList[id]);
    setIsChoosingRoom(true);
  };
  const resetRoom = () => {
    setIsChoosingRoom(false);
    // setSelectedRoom(null);
  };

  useEffect(() => {
    console.log(reservationContext.reservation);
    if (reservationContext.reservation === null) {
      reservationContext.createNewReservationHandler();
    }
  }, []);
  return (
    <div className="Rooms w-full h-screen flex flex-col lg:p-0  justify-center overflow-hidden items-center gap-12 bg-green-100/50">
      <div className="relative w-full  h-full">
        <section
          id={"chooseRoom"}
          className={clsx(
            isChoosingRoom ? "translate-x-full" : "",
            "transform-gpu duration-700 ease-in-out absolute p-4 overflow-y-auto inset-0"
          )}
        >
          <div className="flex flex-col justify-center items-center w-full sm:h-full">
            <h4 className="text-gray-800 lg:text-[70px] text-xl pt-4  font-bold font-roboto pb-20 text-center">
              Vyberte si izbu:
            </h4>
              <div className=" flex  flex-col lg:flex-row justify-between gap-16 ">
                {roomsList.map((room, index) => {
                  return (
                    <RoomCard
                      key={index}
                      room={room}
                      onClick={() => selectRoomHandler(index)}
                    />
                  );
                })}
            </div>
          </div>
        </section>
        <section
          id={"roomDetail"}
          className={clsx(
            isChoosingRoom ? "translate-x-0" : "translate-x-full",
            "transform-gpu duration-700 ease-in-out absolute inset-0 "
          )}
        >
          <h4 className="text-gray-800 lg:text-[70px] font-bold font-roboto pt-6 lg:pt-14">
            Detail izby:
          </h4>
          <RoomDetailCard room={selectedRoom ? selectedRoom : roomsList[0]} />
          <div className="flex flex-row items-center justify-center gap-12">
            <button
              type={"submit"}
              onClick={onSubmit}
              className="bg-green-800 h-12 lg:py-4 lg:px-10 px-6 py-1 rounded-full text-white font-bold font-roboto lg:text-12 text-6"
            >
              Vybrat
            </button>
            <button type={"button"} onClick={resetRoom}>
              <ChevronLeftIcon
                className={" bg-red-500 rounded-full h-12 p-2 lg:p-2 text-white lg:w-20 lg:h-14"}
              />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Rooms;
