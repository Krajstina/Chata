import React, {useContext, useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import TextInput from "./form/TextInput";
import NumberInput from "./form/NumberInput";
import moment from "moment";
import DateRangeInput from "./form/DateRangeInput";
import TermsOfUse from "../TermsOfUse";
import {ChevronLeftIcon} from "@heroicons/react/24/outline";
import {useDispatch} from "react-redux";
import ReservationAction from "../reducers/actions/ReservationAction";
import {openModal} from "../reducers/actions/PopupActions";
import ConfirmPopup from "./ConfirmPopup";
import Summary from "./Summary";
import {ReservationContext, ReservationContextType} from "../App";
import {Reservation} from "../interfaces/Reservation";
import EmailInput from "./form/EmailInput";

interface CheckoutProps {}

const Checkout = (props: CheckoutProps) => {
  const dispatch = useDispatch();
  const reservationContext = useContext(
    ReservationContext
  ) as ReservationContextType;

  //vytahovanie z reduxu
  const backHandler = () => {
    window.location.pathname = "/rooms";
  };
  const defaultValues: Reservation = {
    email: "",
    phone: "",
    address: "",
    roomId: reservationContext.reservation?.roomId || null,
    name: reservationContext.reservation?.name || "",
    lastName: reservationContext.reservation?.lastName || "",
    guests: reservationContext.reservation?.guests || 0,
    dateFrom: reservationContext.reservation?.dateFrom
      ? new Date(reservationContext.reservation.dateFrom)
      : new Date(),
    dateTo: reservationContext.reservation?.dateTo
      ? new Date(reservationContext.reservation.dateTo)
      : new Date(),
  };

  const { register, handleSubmit, watch, reset, setValue } = useForm({
    defaultValues,
  });
  const onDateChangeHandler = (name, value) => {
    if (name === "dateFrom") {
      setValue("dateTo", moment(value).add(1, "days").toDate());
    }
    setValue(name, value);
  };
  const formValues = watch();
  const onSubmitHandler = (data) => {
    alert("THIS SHIT NEVER HAPPENS");
    dispatch(ReservationAction.setReservation(data));
  };

  const [checked, setChecked] = useState(false);

  const onConfirmPopup = () => {
    // @ts-ignore
    dispatch(openModal(<ConfirmPopup />, {}));
  };

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      reservationContext.setReservationHandler(value);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [watch]);

  useEffect(() => {
    if(reservationContext.reservation?.roomId===null||reservationContext.reservation===null){
      window.location.pathname="/rooms"
    }

  }, []);
  return (
    <div className="Checkout w-full  flex flex-col sm:flex-row   sm:justify-center  sm:p-24 p-4  gap-12 bg-green-100/50">
      <div className=" backButton relative flex sm:items-start justify-end  mt-4 flex   ">
        <div className="bg-white rounded-lg ">
          <button
            onClick={backHandler}
            type="button"
            className="rounded-lg sm:p-4 p-2 shadow-lg shadow-gray-600/20 "
          >
            <ChevronLeftIcon className="sm:h-6 sm:w-6 h-6 w-6 text-gray-800" />
          </button>
        </div>
      </div>
      <div className=" flex flex-col justify-between gap-10 ">
        <section className="sm:min-w-[800px] sm:min-h-[500px]  bg-orange-400 p-6 rounded-lg shadow-gray-600/50">
          <form
            onSubmit={handleSubmit(onSubmitHandler)}
            className=" justify-between gap-4 grid sm:grid-cols-2 gap-y-4 sm:gap-x-16"
          >
            <input type={"hidden"} {...register("roomId")} />
            <TextInput
                name={"name"}
                label={"Krstné meno"}
                placeholder={"Tatiana"}
                register={register}
            />
            <TextInput
                name={"lastName"}
                label={"Priezvisko"}
                placeholder={"Mokra"}
                register={register}
            />
            <EmailInput
              email={"email"}
              label={"Email"}
              register={register}
              placeholder={"emailova adresa"}
            />
            <TextInput
              name={"phone"}
              label={"Telefonne cislo"}
              register={register}
              placeholder={"Telefonne cislo"}
            />
            <TextInput
              name={"adress"}
              label={"Adresa"}
              register={register}
              placeholder={"Adresa"}
            />

            <NumberInput
              placeholder={5}
              label={"Pocet hosti"}
              name={"guests"}
              register={register}
            />
            <div className=" ujujujj sm:col-text-white text-[20px] lg:text-[50px] font-roboto font-bold col-span-2 flex flex-col ">
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
          </form>
        </section>
        <Summary />
      </div>

      <div className=" flex flex-col items-stretch justify-between ">
        <div className="max-w-md  bg-white overflow-auto overscroll-auto max-h-[300px] sm:max-h-full ">
          <TermsOfUse />
          <div>
            <label>
              <input onChange={() => setChecked(!checked)} type="checkbox" />{" "}
              Precital som si
            </label>
          </div>
        </div>
        <div className="flex items-center justify-center grow sm:pb-0 pb-4">
          <button
            onClick={() => onConfirmPopup()}
            type="submit"
            disabled={!checked}
            className="bg-green-500/10 rounded-lg p-6 mt-8 shadow-lg shadow-gray-600/20 grow"
          >
            Potvrdit rezervaciu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
