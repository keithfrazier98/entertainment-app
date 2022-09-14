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
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col px-6">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex-1 flex flex-col min-h-0  py-6 px-5 bg-primary-blue-medium rounded-xl">
          <div className="flex-1 flex flex-col overflow-y-auto items-center py-2">
            <Logo className={classNames("flex-shrink-0 ")} aria-hidden="true" />
            <nav className="flex-1 space-y-1 rounded-xl mt-14">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.link}
                  className="flex items-center justify-center"
                  onClick={() => handleClick(item)}
                >
                  <item.icon
                    className={classNames(
                      item.className ? item.className : "w-4 h-4",
                      item.current
                        ? "fill-white"
                        : "fill-primary-blue-light hover:fill-primary-red",
                      "flex-shrink-0 mb-9"
                    )}
                    aria-hidden="true"
                  />
                </Link>
              ))}
            </nav>
            <div className="bg-white p-[.1rem] rounded-full w-fit">
              <img src={avatar} className="w-9 h-9" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
