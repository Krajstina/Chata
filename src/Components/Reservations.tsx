import React, {useContext} from "react";
import {useForm} from "react-hook-form";
import TextInput from "./form/TextInput";
import NumberInput from "./form/NumberInput";
import {ReservationContext, ReservationContextType} from "../App";
import DateRangeInput from "./form/DateRangeInput";

interface Reservations {
ref?:any
}

const Reservations = (props: Reservations) => {
  const reservationContext = useContext(
    ReservationContext
  ) as ReservationContextType;
  const defaultValues = reservationContext.defaultReservation;

  const { register, setValue, handleSubmit, watch, reset } = useForm({
    defaultValues,
  });

  const submitData = (data) => {
    const reservationData = data.reservation;
    if (reservationData.length === 0) return;

    reservationContext.setReservationHandler(reservationData);
    window.location.pathname = "/rooms";
  };

  const onSubmitHandler = (data: any) => {
    // handleSubmit(data);
    submitData({ reservation: data });
    reset();
  };
  const onDateChangeHandler = (name, value) => {
    setValue(name, value);
  };
  const formValues = watch();
  return (
    <div  className="Reservations relative z-10 mt-20 mx-auto sm:ml-16 flex lg:w-[300px] px-10 py-4 items-start flex-col rounded rounded-lg shadow bg-orange-400 justify-self-start">
      {props.ref}
      <div className="logoHolder p-4 h-[200px] w-[300px] flex flex-col">
        <img src="assets/images/logoChata.png" alt={""} />
      </div>
      <span className="font-bold text-white pl-24 text-xl">Rezervácia</span>

      <div className=" Form flex items-center p-4">
        <div className=" w-full max-w-[550px]">
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <div className="">
              <div className="w-full px-3">
                <TextInput
                  name={"name"}
                  label={"Krstné meno"}
                  placeholder={"Tatiana"}
                  register={register}
                />
              </div>
              <div className="w-full px-3 ">
                <TextInput
                  name={"lastName"}
                  label={"Priezvisko"}
                  placeholder={"Mokra"}
                  register={register}
                />
              </div>
            </div>

            <div className="w-full px-3 ">
              <NumberInput
                placeholder={5}
                label={"Pocet hosti"}
                name={"guests"}
                register={register}
              />
            </div>

            <div className="w-full px-3">
              <div className="text-white">
                <input type={"hidden"} {...register("dateFrom")} />
                <input type={"hidden"} {...register("dateTo")} />
                <DateRangeInput
                  labelFrom={"Od"}
                  minDateFrom={new Date()}
                  minDateTo={
                    formValues.dateFrom
                      ? new Date(formValues.dateFrom)
                      : new Date()
                  }
                  labelTo={"Do"}
                  nameFrom={"dateFrom"}
                  nameTo={"dateTo"}
                  onDateChange={onDateChangeHandler}
                  defaultValue={formValues}
                />
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={handleSubmit(onSubmitHandler)}
                className="hover:shadow-form rounded-md bg-green-800 py-3 my-4 px-8 text-center text-base text-left font-semibold text-white outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
};

export default Reservations;
