import React from 'react';

interface BgImageCompProps {

}

const BgImageComp = (props: BgImageCompProps) => {
    return (
        <div className="BgImageComp">
            <div className="BackgroundHolder obje bg-gray-600 flex flex-row items-center ">
                <img
                    src="/assets/images/Placeholder1.jpg"
                    className="opacity-50 object-cover"
                    alt={""}
                />
            </div>
        </div>
    );
};

export default BgImageComp;