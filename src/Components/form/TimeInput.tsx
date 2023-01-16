import React from 'react';

interface TimeInputProps {
    name: any;
    label: any;
    register: any;

}

const TimeInput = (props: TimeInputProps) => {
    return (
            <div className=" TimeInput mb-5">
                <label
                    htmlFor="time"
                    className="mb-3 block text-base text-left font-medium  text-gray-800"
                >
                    {props.label}
                </label>
                <input
                    type="time"
                    name={props.name}
                    className="w-full rounded-md border  bg-white py-3 px-6 text-base text-left font-medium text-[#6B7280] outline-none focus:border-orange-400 focus:shadow-md"
                />
            </div>
    );
};

export default TimeInput;