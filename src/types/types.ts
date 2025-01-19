export interface Cat {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds?: string[];
  favourite?: object;
}
export interface CatsState {
  cats: Cat[];
  isLoading: boolean;
  catsError: null | string;
  favoriteIds: string[];
  favoriteCats: Cat[]
}
