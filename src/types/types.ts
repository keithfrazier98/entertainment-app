export interface IContentData {
  title: string;
  thumbnail: {
    trending: {
      small: string;
      large: string;
    };
    regular: {
      small: string;
      medium: string;
      large: string;
    };
  };
  year: 2019;
  category: "Movie";
  rating: "PG";
  isBookmarked: false;
  isTrending: true;
}
