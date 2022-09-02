export interface IInitialFilters {
  categories: Categories;
}

type Categories = {
  [key: string]: Array<string>;
};

export type Options = {
  [key: string]: Array<string>;
};
