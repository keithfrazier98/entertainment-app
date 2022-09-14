import { classNames } from "../utils/utils";
import {
  NavHomeIcon,
  NavMoviesIcon,
  NavTVIcon,
  NavBookmarkIcon,
} from "../Icons";
import { ReactComponent as Logo } from "../assets/logo.svg";
import avatar from "../assets/image-avatar.png";
import { Link } from "react-router-dom";
const navigation = [
  { name: "home", link: "/", icon: NavHomeIcon, current: true },
  { name: "movies", link: "/movies", icon: NavMoviesIcon, current: false },
  { name: "series", link: "/series", icon: NavTVIcon, current: false },
  {
    name: "bookmarked",
    link: "bookmarked",
    icon: NavBookmarkIcon,
    current: false,
  },
];

export default function NavigationBar() {
  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col px-6">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex-1 flex flex-col min-h-0  py-6 px-5 bg-primary-blue-medium rounded-xl">
          <div className="flex-1 flex flex-col overflow-y-auto items-center py-2">
            <Logo className={classNames("flex-shrink-0 ")} aria-hidden="true" />
            <nav className="flex-1 space-y-1 rounded-xl mt-14">
              {navigation.map((item) => (
                <Link key={item.name} to={item.link}>
                  <item.icon
                    className={classNames(
                      item.current
                        ? "fill-white"
                        : "fill-primary-blue-light hover:fill-primary-red",
                      "flex-shrink-0 mb-9 w-4 h-4"
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
