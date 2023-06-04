import { Urls } from '../constants/urls';
import { appDispatch } from '../redux';
import { booksDetailActions } from '../redux/features';
import { api } from './api';

export const fetchBooksDetails = async () => {
  appDispatch(booksDetailActions.fetchBooksDetailsPending());

  try {
    const response = await api.get(Urls.books);
    return appDispatch(booksDetailActions.fetchBooksDetailsFulfilled(response.data));
  } catch (error) {
    return appDispatch(booksDetailActions.fetchBooksDetailsRejected(error));
  }
};