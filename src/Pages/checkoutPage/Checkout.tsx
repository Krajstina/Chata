import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import TextInput from "../../Components/form/TextInput";
import NumberInput from "../../Components/form/NumberInput";
import moment from "moment";
import TermsOfUse from "../../TermsOfUse";
import { addDaysToDate, schema } from "../../helpers/utils";
import { ChevronDownIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import ReservationAction from "../../reducers/actions/ReservationAction";
import { openModal } from "../../reducers/actions/PopupActions";
import ConfirmPopup from "./ConfirmPopup";
import Summary from "../summaryPage/Summary";
import { ReservationContext, ReservationContextType } from "../../App";
import { Reservation } from "../../interfaces/Reservation";
import EmailInput from "../../Components/form/EmailInput";
import { yupResolver } from "@hookform/resolvers/yup";
import CheckoutDateRangeInput from "../../Components/form/CheckoutDateRangeInput";
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
    guests: reservationContext.reservation?.guests || null,
    dateFrom: reservationContext.reservation?.dateFrom
      ? new Date(reservationContext.reservation.dateFrom)
      : new Date(),
    dateTo: reservationContext.reservation?.dateTo
      ? new Date(reservationContext.reservation.dateTo)
      : new Date(),
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });
  const onDateChangeHandler = (name, value) => {
    if (name === "dateFrom") {
      setValue("dateTo", moment(value).add(1, "days").toDate());
    }
    setValue(name, value);
  };
  const formValues = watch();

  const onSubmitHandler = (data) => {
    dispatch(ReservationAction.setReservation(data));
    // @ts-ignore
    dispatch(openModal(<ConfirmPopup />, {}));
  };

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      reservationContext.setReservationHandler(value);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [watch]);

  useEffect(() => {
    if (
      reservationContext.reservation?.roomId === null ||
      reservationContext.reservation === null
    ) {
      window.location.pathname = "/rooms";
    }
  }, []);
  const ErrorMessage = (props: { message: string | undefined }) => {
    return <div className={"absolute top-0"}>{props.message}</div>;
  };
  return (
    <div className="Checkout w-full flex flex-row justify-center sm:p-24 p-4 bg-green-100/50">
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className={
          "w-full flex flex-col sm:flex-row   sm:justify-center   gap-12 "
        }
      >
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
          <section className="sm:min-w-[800px] sm:min-h-[500px] bg-orange-400 p-6 rounded-lg shadow-gray-600/50">
            <div className=" justify-between my-6 gap-4 grid sm:grid-cols-2 gap-y-4 sm:gap-x-16 text-black">
              <input type={"hidden"} {...register("roomId")} />

              <TextInput
                name={"name"}
                label={"Krstné meno"}
                placeholder={"Tatiana"}
                register={register}
              >
                <ErrorMessage message={errors.name?.message} />
              </TextInput>
              <TextInput
                name={"lastName"}
                label={"Priezvisko"}
                placeholder={"Mokra"}
                register={register}
              >
                {" "}
                <ErrorMessage message={errors.lastName?.message} />
              </TextInput>
              <EmailInput
                email={"email"}
                label={"Email"}
                register={register}
                placeholder={"emailova adresa"}
              >
                {" "}
                <ErrorMessage message={errors.email?.message} />
              </EmailInput>
              <TextInput
                name={"phone"}
                label={"Telefonne cislo"}
                register={register}
                placeholder={"+421 912345678"}
              >
                <ErrorMessage message={errors.phone?.message} />
              </TextInput>
              <TextInput
                name={"address"}
                label={"Adresa"}
                register={register}
                placeholder={"Adresa"}
              >
                <ErrorMessage message={errors.address?.message} />
              </TextInput>

              <NumberInput
                placeholder={5}
                label={"Pocet hosti"}
                name={"guests"}
                register={register}
              >
                <ErrorMessage message={errors.guests?.message} />
              </NumberInput>
              <div className=" ujujujj sm:col-text-white text-[20px] lg:text-[50px] font-roboto font-bold col-span-2 flex flex-col ">
                <input type={"hidden"} {...register("dateFrom")} />
                <input type={"hidden"} {...register("dateTo")} />
                <CheckoutDateRangeInput
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
          </section>
          <Summary />
        </div>
        <div className="flex flex-wrap">
          {" "}
          <div className="w-full flex flex-col items-center bg-orange-400 rounded p-2">
            <span className="text-white font-roboto font-bold text-2">
              Pre dokoncenie rezervacie prosim potvrdte precitanie pravidiel
              chaty
            </span>
            <ChevronDownIcon className="text-white h-6 w-6 my-2" />
          </div>
          <div className=" lg:max-h-[815px]  flex flex-col items-stretch justify-between ">
            <div className=" bg-white overflow-auto overscroll-auto max-h-[300px] sm:max-h-full ">
              <TermsOfUse />
              <div>
                <label>
                  <input
                    onChange={() => setChecked(!checked)}
                    type="checkbox"
                  />{" "}
                  Precital som si
                </label>
              </div>
            </div>
            <div className="flex items-center justify-center grow sm:pb-0 pb-4">
              <button
                onClick={handleSubmit(onSubmitHandler)}
                type="submit"
                disabled={!checked}
                className="bg-green-500/30 rounded-lg p-6 mt-8 shadow-lg shadow-gray-600/20 grow font-bold"
              >
                Potvrdit rezervaciu
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
