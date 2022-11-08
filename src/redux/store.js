import { configureStore } from '@reduxjs/toolkit';

import { rootInitialState } from './root.initial-state';
import { rootReducer } from './root.reducer';

export const store = configureStore({
  // reducer: persistedReducer,
  reducer: rootReducer,
  devTools: true,
  preloadState: rootInitialState,
});
