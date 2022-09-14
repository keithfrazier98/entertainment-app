import { Dispatch, SetStateAction } from "react";

export interface IContentData {
  title: string;
  thumbnail: {
    trending?: {
      small: string;
      large: string;
    };
    regular: {
      small: string;
      medium: string;
      large: string;
    };
  };
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

export interface IDataContext {
  data: IContentData[];
  dispatch: React.Dispatch<IContentData>;
}
