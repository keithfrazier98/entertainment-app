import { classNames } from "../utils/utils";
import { NavHomeIcon, NavMoviesIcon, NavTVIcon } from "../Icons";
import { ReactComponent as Logo } from "../assets/logo.svg";
import avatar from "../assets/image-avatar.png";
import { Link } from "react-router-dom";
import { BookmarkIcon } from "@heroicons/react/20/solid";
import { useContext, useReducer } from "react";
import { GlobalContext } from "./GlobalContext";
import { INavItem } from "../types/types";

export default function NavigationBar() {
  const initialNav = [
    { name: "home", link: "/", icon: NavHomeIcon, current: true },
    { name: "movies", link: "/movies", icon: NavMoviesIcon, current: false },
    { name: "series", link: "/series", icon: NavTVIcon, current: false },
    {
      name: "bookmarked",
      link: "bookmarked",
      icon: BookmarkIcon,
      className: "w-5 h-5",
      current: false,
    },
  ];

  const [navigation, dispatch] = useReducer(setActiveTab, initialNav);

  function setActiveTab(_: INavItem[], selectedTab: INavItem) {
    return initialNav.map((item) => {
      if (item.name === selectedTab.name) {
        return { ...item, current: true };
      } else {
        return { ...item, current: false };
      }
    });
  }

  function handleClick(item: INavItem) {
    dispatch(item);
  }
  return (
    <div className="flex flex-col p-6 lg:h-screen">
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div
        className={classNames(
          "bg-primary-blue-medium rounded-xl",
          "flex-1 flex min-h-0 py-2 lg:py-6 px-5",
          "flex-row lg:flex-col"
        )}
      >
        <div className="flex-1 flex lg:flex-col overflow-y-auto items-center py-2">
          <Logo className={classNames("flex-shrink-0 ")} aria-hidden="true" />
          <nav className="flex-1 space-y-1 rounded-xl lg:mt-14 flex lg:flex-col justify-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className="flex items-center justify-center mt-0"
                onClick={() => handleClick(item)}
              >
                <item.icon
                  className={classNames(
                    item.className ? item.className : "w-4 h-4",
                    item.current
                      ? "fill-white"
                      : "fill-primary-blue-light hover:fill-primary-red",
                    "flex-shrink-0 lg:mb-9 mr-9 lg:mr-0 mt-0"
                  )}
                  aria-hidden="true"
                />
              </Link>
            ))}
          </nav>
          <div className="w-9 h-9">
            <div className="bg-white p-[.1rem] rounded-full w-fit">
              <img src={avatar} className="w-9 h-9" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
