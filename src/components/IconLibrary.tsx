import { ReactComponent as Bookmark_Full } from "../assets/icon-bookmark-full.svg";
import { ReactComponent as Category_Movie } from "../assets/icon-category-movie.svg";
import { ReactComponent as Category_TV } from "../assets/icon-category-tv.svg";
import { ReactComponent as Nav_Bookmark } from "../assets/icon-nav-bookmark.svg";
import { ReactComponent as Nav_Home } from "../assets/icon-nav-home.svg";
import { ReactComponent as Nav_Movies } from "../assets/icon-nav-movies.svg";
import { ReactComponent as Nav_TV } from "../assets/icon-nav-tv-series.svg";
import { ReactComponent as Play } from "../assets/icon-play.svg";
import { ReactComponent as Search } from "../assets/icon-search.svg";
import { ReactComponent as Bookmark_Empty } from "../assets/icon-bookmark-empty.svg";

export function BookmarkEmptyIcon({ className }: { className?: string }) {
  return <Bookmark_Empty className={className} />;
}

export function BookmarkFullIcon({ className }: { className?: string }) {
  return <Bookmark_Full className={className} />;
}
export function CategoryMovieIcon({ className }: { className?: string }) {
  return <Category_Movie className={className} />;
}

export function CategoryTvIcon({ className }: { className?: string }) {
  return <Category_TV className={className} />;
}

export function NavBookmarkIcon({ className }: { className?: string }) {
  return <Nav_Bookmark className={className} />;
}

export function NavHomeIcon({ className }: { className?: string }) {
  return <Nav_Home className={className} />;
}

export function NavMoviesIcon({ className }: { className?: string }) {
  return <Nav_Movies className={className} />;
}

export function NavTvIcon({ className }: { className?: string }) {
  return <Nav_TV className={className} />;
}

export function PlayIcon({ className }: { className?: string }) {
  return <Play className={className} />;
}

export function SearchIcon({ className }: { className?: string }) {
  return <Search className={className} />;
}
