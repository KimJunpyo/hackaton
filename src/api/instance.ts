import axios from 'axios';

export const useQueryOption = {
  refetchOnWindowFocus: false,
  keepPreviousData: true,
  retry: false,
  refetchIntervalInBackground: false,
  retryOnMount: false,
};

export const instance = axios.create({ baseURL: 'http://20.39.205.153:8000/' });
