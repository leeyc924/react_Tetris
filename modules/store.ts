// import {
//   combineReducers,
//   configureStore,
//   isRejectedWithValue,
//   Middleware,
// } from '@reduxjs/toolkit';
// import { createWrapper, HYDRATE } from 'next-redux-wrapper';
// import { baseApi } from './baseApi';

// const createRootReducer = () =>
//   combineReducers({
//     [baseApi.reducerPath]: baseApi.reducer,
//   });

// // const unauthenticatedMiddleware: Middleware = ({
// //   dispatch
// // }) => (next) => (action) => {
// //     if (isRejectedWithValue(action) && action.payload.status === 403) {
// //       dispatch(accountAction.resetState());
// //     }

// //     return next(action);
// //    };

// const store = configureStore({
//   reducer: createRootReducer(),
//   devTools: true,
//   middleware: (getDefaultMiddleware) => [
//     ...getDefaultMiddleware(),
//     baseApi.middleware,
//   ],
// });

// export const wrapper = createWrapper(store, { debug: process.env.NODE_ENV !== 'production', });


// export type RootState = ReturnType<typeof store.getState>;
