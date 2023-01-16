import React from 'react';

interface TextInputProps {
    name: any;
    label: any;
    placeholder: any;
    register: any;
}

const TextInput = (props: TextInputProps) => {
    return (
            <div className="textInput">
                <label
                    htmlFor="fName"
                    className="mb-1 block text-base text-left  text-white font-medium "
                > {props.label}
                </label>
                <input
                    type="text"
                    name={props.name}
                    {...props.register(props.name,{required:true})}
                    placeholder={props.placeholder}
                    className="w-full rounded-md border  bg-white py-3 px-6 text-base text-left font-medium  outline-none focus:border-orange-4000 focus:shadow-md"
                />
            </div>
    );
};

export default TextInput;