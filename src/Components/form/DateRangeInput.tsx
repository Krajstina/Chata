import React, { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import sk from "date-fns/locale/sk";
import moment from "moment";

interface DateInputProps {
  labelFrom: any;
  labelTo: any;
  nameFrom: any;
  nameTo: any;
  onDateChange: (name: string, value: string) => void;
  defaultValue: any;
  minDateFrom?: any;
  minDateTo?: any;
}

const DateInput = (props: DateInputProps) => {
  const handleDateChange = (date, name) => {
    props.onDateChange(name, date);
  };

  // @ts-ignore
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
      <button
          type="button"
          className="example-custom-input w-fullujjhjhnjj rounded-md border bg-white py-3 px-3  text-base text-left text-gray-400 outline-none focus:border-orange-4000 focus:shadow-md"
          onClick={onClick}
          // @ts-ignore
          ref={ref}
      >
        {value}
      </button>
  ));

  registerLocale("sk", sk);
  setDefaultLocale(sk);
  return (

      <div className="DateInput grid grid-flow-col gap-4 lg:grid-cols-30 ">
        <div>
          <label className="mb-1 text-left block text-base font-medium  text-white  ">
            {props.labelFrom}
          </label>
          <DatePicker
              minDate={props.minDateFrom}
              selected={props.defaultValue.dateFrom}
              onChange={(date: Date) => handleDateChange(date, props.nameFrom)}
              dateFormat={"dd/MM/yyyy"}
              selectsStart
              customInput={<ExampleCustomInput />}
              defaultValue={props.defaultValue.dateTo}
              startDate={props.defaultValue.dateFrom}
              endDate={props.defaultValue.dateTo}
          />{" "}
        </div>
        <div>
          <label className="mb-1 text-left block text-base  font-medium  text-white ">
            {props.labelTo}
          </label>
          <DatePicker
              minDate={moment(props.minDateTo).add(1, "days").toDate()}
              maxDate={moment(props.minDateTo).add(100, "days").toDate()}
              selected={props.defaultValue.dateTo}
              onChange={(date: Date) => handleDateChange(date, props.nameTo)}
              dateFormat={"dd/MM/yyyy"}
              selectsEnd
              customInput={<ExampleCustomInput />}
              defaultValue={props.defaultValue.dateTo}
              startDate={props.defaultValue.dateFrom}
              endDate={props.defaultValue.dateTo}
          />{" "}
        </div>
      </div>
  );
};

export default DateInput;
