import {
  AnyAction,
  combineReducers,
  configureStore,
  EnhancedStore,
  // isRejectedWithValue,
} from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { baseApi } from './baseApi';

const rootReducer = (state: any, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE: {
      const nextState = {
        ...state,
        ...action.payload,
      };
      return nextState;
    }

    default: {
      const combineReducer = combineReducers({
        [baseApi.reducerPath]: baseApi.reducer,
      });
      return combineReducer(state, action);
    }
  }
};

// const unauthenticatedMiddleware: Middleware = ({
//   dispatch
// }) => (next) => (action) => {
//     if (isRejectedWithValue(action) && action.payload.status === 403) {
//       dispatch(accountAction.resetState());
//     }

//     return next(action);
//    };

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    baseApi.middleware,
  ],
});

const setupStore = (): EnhancedStore => store;

const makeStore = () => setupStore();

export const wrapper = createWrapper(makeStore, { debug: process.env.NODE_ENV === 'production' });

export type RootState = ReturnType<typeof store.getState>;
