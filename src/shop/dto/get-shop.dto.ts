import { CategoryType } from "../entities/category";

export class ShopResponseDto {
  id: string;
  name: string;
  address?: string;
  description: string;
  twitterLink: string;
  mapLink: string;
  isVerified: boolean;
  category: CategoryType;
  phone?: string;

  constructor(partial: Partial<ShopResponseDto>) {
    Object.assign(this, partial);
  }
}
