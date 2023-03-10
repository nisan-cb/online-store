import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState, viewState } from "../store";
import { ViewState as vs } from "./initialState";

export const getViewState = (state: RootState) => state.view
export const getActiveCategory = createSelector([getViewState], (state) => state.activeCategory);