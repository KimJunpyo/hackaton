import { instance } from '../instance.ts';

export const complaintList = (limit: number, offset: number, officer?: number, status?: string) => {
  return instance.get(
    `/complaint/complaint?limit=${limit}&offset=${offset}${officer ? `&assigned_officer=${officer}` : ''}${status ? `&status=${status}` : ''}`,
  );
};

export const complaintListId = (id: number) => {
  return instance.get(`/complaint/complaint/${id}`);
};

export const complaintOfficer = (complaint: number) => {
  return instance.get(`/complaint/complaint-officer/recommend?complaint=${complaint}`);
};
