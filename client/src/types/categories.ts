export interface ICategories {
  categories: ICategory[];
}

interface ICategory {
  name: string;
  slug: string;
  image: string;
  isActive: boolean;
}
