import React from "react";
import clsx from "clsx";
import {MenuItem} from "./Menu";

interface MenuLinksProps {
  menuItem: MenuItem;
  active: string;
  key: number;
  onClick: () => void;
}

const MenuLink = (props: MenuLinksProps) => {
  return (
    <div>
      <li className="MenuLinks my-14 lg:my-16 list-none relative">
        <div className="flex flex-col h-full">
          <span className="lg:text-6xl md:text-4xl text-2xl font-roboto font-bold text-white text-left">
            <button type="button" onClick={props.onClick}>
              {props.menuItem.title}
            </button>
          </span>
        </div>
        <div
          className={clsx(
            props.key === 0 && "pr-48",
            props.key === 1 && "pr-40",
            props.key === 2 && "pr-32",
            props.key === 3 && "pr-24",
            props.active === props.menuItem.id
              ? " border-red-400 "
              : " border-orange-400 ",
            "absolute right-0 pl-24 border-b-4 h-1"
          )}
        />
      </li>
    </div>
  );
};

export default MenuLink;
