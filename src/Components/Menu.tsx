import * as React from "react";
import {useState} from "react";
import {Bars3Icon} from "@heroicons/react/20/solid";
import clsx from "clsx";
import {XMarkIcon} from "@heroicons/react/24/outline";
import MenuLink from "./MenuLink";
import {menuItems, menuScrollHandler} from "../helpers/utils";

interface MenuProps {}

export interface MenuItem {
  id: string,
  title: string,
}
const Menu = (props: MenuProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuAnimating, setMenuAnimating] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState("")
  // const onClickHandler=()=>{
  //     setMenuOpen(true)
  //     console.log("clicked")
  // }


  const MenuButton = () => {
    return (
      <button
        type="button"
        className="bg-orange-400 p-4 rounded-full shadow fixed"
        onClick={toggleClass}
      >
        {menuOpen ? (
          <XMarkIcon className="text-white lg:h-6 h-4 w-4 lg:w-6 " />
        ) : (
          <Bars3Icon className="text-white lg:h-6 h-4 w-4 lg:w-6 " />
        )}
      </button>
    );
  };
  const toggleClass = () => {
    animateMenuOpen(!menuOpen)
  };
 const animateMenuOpen = (newMenuOpen: boolean) => {
   setMenuOpen(newMenuOpen);
   const timer = setTimeout(() => {setMenuAnimating(newMenuOpen)}, 100)
    return () => {
     clearTimeout(timer)
    }
 }
  const menuHandler = (id) => {
    setActiveMenuItem(id)
    menuScrollHandler(id)
    animateMenuOpen(false)
  }
  return (
    <div className="Menu p-4 absolute z-10 fixed">
      <MenuButton />
      {menuOpen && (
        <div>
          <div className={clsx(menuAnimating ? "bg-opacity-90 backdrop-blur-md backdrop-opacity-50 opacity-100": "bg-opacity-0 opacity-0 backdrop-blur backdrop-opacity-0", "fixed inset-0 duration-500 ease-in-out transform-gpu bg-gray-500  z-[100] ")}>
            <div
              className={"relative p-4 w-full h-full flex flex-col items-start"}
            >
              <MenuButton />
              <nav className="flex flex-col items-end w-full mt-6 ">
                {menuItems.map((menuItem, index) => {
                  return <MenuLink active={activeMenuItem} onClick={() => menuHandler(menuItem.id) } menuItem={menuItem} key={index} />;
                })}
              </nav>


            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
