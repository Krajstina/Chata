import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import TextInput from "./form/TextInput";
import NumberInput from "./form/NumberInput";
import { ReservationContext, ReservationContextType } from "../App";
import DateRangeInput from "./form/DateRangeInput";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { addDaysToDate, reservationSchema, schema } from "../helpers/utils";
import { toast } from "react-toast";

interface Reservations {
  ref?: any;
}

const Reservations = (props: Reservations) => {
  const reservationContext = useContext(
      ReservationContext
  ) as ReservationContextType;
  const defaultValues = reservationContext.defaultReservation;

  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues,
    resolver: yupResolver(reservationSchema),
  });

  const submitData = (data) => {
    const reservationData = data.reservation;
    if (reservationData.length === 0) return;

    reservationContext.setReservationHandler(reservationData);
    window.location.pathname = "/rooms";
  };
  const ErrorMessageRes = (props: { message: string | undefined }) => {
    return <div className={"absolute top-0"}>{props.message}</div>;
  };

  const onErrorHandler = (data: any) => {
    toast.error("Vyplnte spravne vsetky polia");
  };
  const onSubmitHandler = (data: any) => {
    // handleSubmit(data);
    toast.success("Vyberte si izbu");
    submitData({ reservation: data });
    reset();
  };
  const onDateChangeHandler = (name, value) => {
    setValue(name, value);
  };
  const formValues = watch();

  return (
      <div className="Reservations relative z-10 mt-16 lg:mt-20 mx-auto sm:ml-16 flex max-w-[300px] lg:min-w-[350px] lg:py-4 items-start flex-col rounded rounded-lg shadow bg-orange-400 justify-self-start">
        {props.ref}
        <div className="logoHolder lg:ml-6 p-4 h-[200px] w-[300px] flex flex-col">
          <img src="assets/images/logoChata.png" alt={""} />
        </div>
        <span className="font-bold text-white lg:ml-6 pl-24 text-xl">
        Rezervácia
      </span>

        <div className="Form flex items-center p-6 lg:p-10">
          <div className="w-full max-w-[550px]">
            <form onSubmit={handleSubmit(onSubmitHandler, onErrorHandler)}>
              <div className="w-full px-3">
                <TextInput
                    name={"name"}
                    label={"Krstné meno"}
                    placeholder={"Tatiana"}
                    register={register}
                >
                  <ErrorMessageRes message={errors.name?.message} />
                </TextInput>
              </div>
              <div className="w-full px-3  ">
                <TextInput
                    name={"lastName"}
                    label={"Priezvisko"}
                    placeholder={"Mokra"}
                    register={register}
                >
                  <ErrorMessageRes message={errors.lastName?.message} />
                </TextInput>
              </div>
              <div className="w-full px-3 ">
                <NumberInput
                    placeholder={5}
                    label={"Pocet hosti"}
                    name={"guests"}
                    register={register}
                >
                  <ErrorMessageRes message={errors.guests?.message} />
                </NumberInput>
              </div>

              <div className="w-full px-3 pt-4">
                <div className="text-white">
                  <input type={"hidden"} {...register("dateFrom")} />
                  <input type={"hidden"} {...register("dateTo")} />
                  <DateRangeInput
                      labelFrom={"Od"}
                      minDateFrom={new Date()}
                      minDateTo={
                        formValues.dateFrom
                            ? new Date(formValues.dateFrom)
                            : addDaysToDate(new Date(), 1)
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
                    onClick={handleSubmit(onSubmitHandler, onErrorHandler)}
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
