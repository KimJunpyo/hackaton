import { complaintList, complaintListId } from './url.ts';
import { useQueryOption } from '../instance.ts';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

export const useGetComplaintsList = (offset: number, limit: number): UseQueryResult<AxiosResponse<any, any>, unknown> =>
  useQuery(['complaints', limit, offset], () => complaintList(limit, offset), useQueryOption);

export const useGetComplaintsIdList = (id: number): UseQueryResult<AxiosResponse<any, any>, unknown> =>
  useQuery([], () => complaintListId(id), useQueryOption);
