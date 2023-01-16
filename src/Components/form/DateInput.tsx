import React, { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import sk from "date-fns/locale/sk";

interface DateInputProps {
  label: any;
  name: any;
  onDateChange: (name: string, value: string) => void;
  defaultValue: any;
  minDate?: any;
}

const DateInput = (props: DateInputProps) => {
  const handleDateChange = (date) => {
    props.onDateChange(props.name, date);
  };

  // @ts-ignore
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button
      type="button"
      className="example-custom-input w-full rounded-md border  bg-white py-3 px-6 text-base text-left text-gray-400 outline-none focus:border-orange-4000 focus:shadow-md"
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
    <div className="DateInput mb-5">
      <label className="mb-3 block text-base text-left font-medium  text-gray-800">
        {props.label}{" "}
      </label>
      <DatePicker
        minDate={props.minDate}
        selected={props.defaultValue}
        onChange={(date: Date) => handleDateChange(date)}
        dateFormat={"dd/MM/yyyy"}
        customInput={<ExampleCustomInput />}
        defaultValue={props.defaultValue}
      />
    </div>
  );
};

export default DateInput;
