import React from "react";

interface TextInputProps {
  name: any;
  label: any;
  placeholder: any;
  register: any;
  children?: React.ReactNode | React.ReactNode[];
}

const TextInput = (props: TextInputProps) => {
  return (
    <div className="textInput ">

      <label
        htmlFor="fName"
        className="mb-1 block text-base text-left  text-white font-medium "
      >
        {" "}
        {props.label}
      </label>

      <input
        type="text"
        name={props.name}
        {...props.register(props.name, { required: true })}
        required={true}
        placeholder={props.placeholder}
        className="w-full rounded-md border placeholder:text-gray-300 bg-white py-3 px-2 text-base lg:text-lg text-[13px] text-left font-medium invalid:border-red-500 outline-none focus:border-orange-400 focus:shadow-md"
      />
        <div className={" relative flex flex-row items-end justify-end text-blue-900  font-roboto text-[10px] lg:text-[15px]"}>
            {props.children}
        </div>
    </div>
  );
};

export default TextInput;
