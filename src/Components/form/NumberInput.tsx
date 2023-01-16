import React from 'react';

interface NumberInputProps {
    placeholder: any;
    label: any;
    name:any;
    register:any;

}

const NumberInput = (props: NumberInputProps) => {
    return (
            <div className="NumberInput">
                <label
                    htmlFor="guest"
                    className="mb-1 block text-base text-left font-medium  text-white"
                >
                    {props.label}
                </label>
                <input
                    type="number"
                    {...props.register(props.name, {required:true})}
                    name={props.name}
                    placeholder={props.placeholder}
                    min="0"
                    className="w-full rounded-md border  bg-white py-3 px-6 text-base text-left font-medium text-gray-400 outline-none focus:border-orange-4000 focus:shadow-md"
                />
            </div>
    );
};

export default NumberInput;