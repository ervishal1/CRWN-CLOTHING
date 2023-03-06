import { AnyAction } from "redux";
import { Category } from "./categories.types";

import {
  fetchCategoriesStart,
  fetchCategoriesError,
  fetchCategoriesSuccess,
} from "./categories.action";

export type CategoryState = {
  readonly categories: Category[];
  readonly isLoading: Boolean;
  readonly error: Error | null;
};

const CATEGORIES_INITIAL_STATE: CategoryState = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action = {} as AnyAction
) => {
  if (fetchCategoriesSuccess.match(action)) {
    return { ...state, categories: action.payload, isLoading: false };
  }

  if (fetchCategoriesStart.match(action)) {
    return { ...state, isLoading: true };
  }

  if (fetchCategoriesError.match(action)) {
    return { ...state, error: action.payload, isLoading: false };
  }
  return state;
};
