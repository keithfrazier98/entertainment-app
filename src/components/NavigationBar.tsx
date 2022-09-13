import { classNames } from "../utils/utils";
import { ReactComponent as HomeIcon } from "../assets/icon-nav-home.svg";
import { ReactComponent as MoviesIcon } from "../assets/icon-nav-movies.svg";
import { ReactComponent as SeriesIcon } from "../assets/icon-nav-tv-series.svg";
import { ReactComponent as BookmarkIcon } from "../assets/icon-nav-bookmark.svg";
import { ReactComponent as Logo } from "../assets/logo.svg";
import avatar from "../assets/image-avatar.png";
import { Link } from "react-router-dom";
const navigation = [
  { name: "home", link: "/", icon: HomeIcon, current: true },
  { name: "movies", link: "/movies", icon: MoviesIcon, current: false },
  { name: "series", link: "/series", icon: SeriesIcon, current: false },
  {
    name: "bookmarked",
    link: "bookmarked",
    icon: BookmarkIcon,
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
                        ? "text-gray-300"
                        : "hover:bg-primary-red group-hover:text-gray-300",
                      "flex-shrink-0 mb-9 "
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
