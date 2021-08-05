import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import photosReducer from '../features/photos/photosSlice';
import photoDetailsReducer from '../features/photos/photoDetailsSlice';

export const store = configureStore({
  reducer: {
    photos: photosReducer,
    details: photoDetailsReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
