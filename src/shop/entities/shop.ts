import { CategoryType } from "./category";

export interface Shop {
    id?: string; // NOTE: firebase id
    name: string;
    address?: string; // NOTE: 오프라인에만 있음
    description: string;
    twitterLink: string;
    mapLink: string; // NOTE: 오프라인은 지도 링크, 온라인은 사이트 링크
    isVerified: boolean;
    category: CategoryType;
    phone?: string;
  }
  