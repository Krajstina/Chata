import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";

import clsx from "clsx";
import {useTypedSelector} from "../reducers/reducers";
import {closeModal} from "../reducers/actions/PopupActions";
import {XMarkIcon} from "@heroicons/react/24/outline";

export enum ModalSize {
    Small = "small",
    RoundedFullscreen = "roundedFullscreen",
    FullScreen = "fullscreen",
}
interface Props {}

const Popup = (props: Props) => {
    const popup = useTypedSelector(state => state.modalState);
    const blur = useTypedSelector(state => state.blur);

    const isOpen = popup.isOpen || false;
    const isCloseEnabled = popup.props?.isCloseEnabled === undefined ? true : popup.props.isCloseEnabled;
    const [isLoading, setIsLoading] = useState(true);
    //const popup = null;
    const dispatch = useDispatch();

    useEffect(() => {
        const close = e => {
            if (e.keyCode === 27) {
                closePopup();
            }
        };
        if (isCloseEnabled) {
            window.addEventListener("keydown", close);
        }

        return () => window.removeEventListener("keydown", close);
    }, []);

    const openPopup = id => {
        setIsLoading(true);
        //dispatch(fetchResult(id)).then(r => setIsLoading(false));
    };

    const closePopup = () => {
        // @ts-ignore
        dispatch(closeModal());
    };

    useEffect(() => {
        if (popup.component) {
            setTimeout(() => {
                setIsLoading(false);
            }, 4);
        } else {
            setIsLoading(true);
        }
    }, [popup]);

    if (!popup.component) {
        return null;
    }

    if (!React.isValidElement(popup.component)) {
        return null;
    }
    const closeModalCallback = popup.props?.closeModal;

    const closeModalHandler = () => {
        // @ts-ignore
        return closeModalCallback ? closeModalCallback() : dispatch(closeModal());
    };
    //"small", "roundedFullscreen", "fullscreen"
    const popupSize = popup.props?.modalSize || ModalSize.Small;

    // @ts-ignore
    return (
        <div
            className={clsx(popupSize === ModalSize.Small && "bg-gray-100/50", "Popup fixed print:relative flex items-center overflow-hidden justify-center bg-opacity-50 z-[60] inset-0 w-screen h-screen min-h-[100vh]")}
            style={{
                transition: "300ms",
                transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
                opacity: isOpen && !isLoading ? 1 : 0,
                display: isOpen ? "flex" : "none",
            }}
        >
            {/*<div className={"hidden tailwind-help backdrop-blur-md"}></div>*/}
            <div
                className={clsx(
                    blur &&  popupSize === ModalSize.Small ? "backdrop-blur-md" : "backdrop-opacity-50",
                    "fixed inset-0 flex  justify-center items-center z-40 "
                )}
                onClick={isCloseEnabled ? closeModalHandler : () => false}
            />

            <div
                className={clsx(
                    popupSize === ModalSize.RoundedFullscreen && "rounded-tl-4xl inner-shadow mt-20 ml-28 w-[calc(100vw-7rem)] h-[calc(100vh-5rem)]",
                    "bg-white overflow-auto z-40 relative",
                    popupSize === ModalSize.Small && "h-auto m-1 max-w-screen-3xl rounded-lg live:max-w-screen-live",
                    popupSize === ModalSize.FullScreen && "w-full h-full"
                )}
            >
                <button className="print:hidden p-2  text-gray-800 absolute right-0 top-0 z-[100] h-12" onClick={closeModalHandler}>
                    <XMarkIcon className={"w-8 text-gray-800 hover:opacity-70"} />
                </button>
                {popup.component}
            </div>
        </div>
    );
};

export default Popup;