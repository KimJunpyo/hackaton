import { instance } from '../instance.ts';

export const complaintList = (limit: number, offset: number) => {
  return instance.get(`/complaint/complaint?limit=${limit}&offset=${offset}`);
};

export const complaintListId = (id: number) => {
  return instance.get(`/complaint/complaint/${id}`);
};
