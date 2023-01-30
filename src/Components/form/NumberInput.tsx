import React from 'react';

interface NumberInputProps {
    placeholder: any;
    label: any;
    name:any;
    register:any;
    children?: React.ReactNode | React.ReactNode[];
}

const NumberInput = (props: NumberInputProps) => {
    return (
            <div className="NumberInput relative">

                <label
                    htmlFor="guest"
                    className="mb-1 block text-base text-left font-medium  text-white"
                >
                    {props.label}
                </label>
                <input
                    type="number"
                    {...props.register(props.name, {required:true})}
                    required={true}
                    name={props.name}
                    placeholder={props.placeholder}
                    className="w-full rounded-md border  bg-white py-3 px-2 text-base text-left lg:text-lg text-[13px] font-medium text-black placeholder:text-gray-300 outline-none focus:border-orange-4000 focus:shadow-md"
                />
                <div className={" relative flex flex-row items-end justify-end text-blue-900  font-roboto text-[10px] lg:text-[15px]"}>
                    {props.children}
                </div>
            </div>
    );
};

export default NumberInput;