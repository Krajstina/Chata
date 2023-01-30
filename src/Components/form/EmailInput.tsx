import React from 'react';

interface TextInputProps {
    email: any;
    label: any;
    placeholder: any;
    register: any;
    children?: React.ReactNode | React.ReactNode[];
}

const EmailInput = (props: TextInputProps) => {
    return (
            <div className="emailInput relative">

                <label
                    htmlFor="fName"
                    className="mb-1 block text-base text-left  text-white font-medium "
                > {props.label}
                </label>
                <input
                    type="email"
                    name={props.email}
                    {...props.register(props.email,{required:true})}
                    required={true}
                    placeholder={props.placeholder}
                    className="w-full rounded-md border placeholder:text-gray-300 bg-white lg:text-lg text-[13px] py-3 px-2 text-base text-left font-medium  outline-none invalid:border-red-500  focus:border-orange-400 focus:shadow-md"
                />
                <div className={" relative flex flex-row items-end justify-end text-blue-900  font-roboto text-[10px] lg:text-[15px]"}>
                    {props.children}
                </div>
            </div>
    );
};

export default EmailInput;