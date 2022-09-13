import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  InboxIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { classNames } from "../utils/utils";
import { ReactComponent as HomeIcon } from "../assets/icon-nav-home.svg";
import { ReactComponent as MoviesIcon } from "../assets/icon-nav-movies.svg";
import { ReactComponent as SeriesIcon } from "../assets/icon-nav-tv-series.svg";
import { ReactComponent as BookmarkIcon } from "../assets/icon-nav-bookmark.svg";
const navigation = [
  { name: "home", href: "/", icon: HomeIcon, current: true },
  { name: "movies", href: "/movies", icon: MoviesIcon, current: false },
  { name: "series", href: "/series", icon: SeriesIcon, current: false },
  {
    name: "bookmarked",
    href: "bookmarked",
    icon: BookmarkIcon,
    current: false,
  },
];

export default function NavigationBar() {
  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col p-4">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex-1 flex flex-col min-h-0 bg-gray-800 rounded-lg">
          <div className="flex-1 flex flex-col overflow-y-auto">
            <nav className="flex-1 px-2 py-4 bg-gray-800 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                  )}
                >
                  <item.icon
                    className={classNames(
                      item.current
                        ? "text-gray-300"
                        : "text-gray-400 group-hover:text-gray-300",
                      "flex-shrink-0 h-6 w-6"
                    )}
                    aria-hidden="true"
                  />
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
