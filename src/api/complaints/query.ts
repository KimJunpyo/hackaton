import { complaintList, complaintListId, complaintOfficer, complaintResponse } from './url.ts';
import { useQueryOption } from '../instance.ts';
import { useMutation, useQuery, UseQueryResult } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

export const useGetComplaintsList = (
  offset: number,
  limit: number,
  officer?: number,
  status?: string,
): UseQueryResult<AxiosResponse<any, any>, unknown> =>
  useQuery(['complaints', limit, offset, status], () => complaintList(limit, offset, officer, status), useQueryOption);

export const useGetComplaintsIdList = (id: number): UseQueryResult<AxiosResponse<any, any>, unknown> =>
  useQuery(['complaintsList', id], () => complaintListId(id), useQueryOption);

export const useGetComplaintsRecommend = (id: number): UseQueryResult<AxiosResponse<any, any>, unknown> =>
  useQuery(['complaintRecommend', id], () => complaintOfficer(id), useQueryOption);

export const usePostComplaintsResponse = () =>
  useMutation(
    [],
    ({ complaint, author, content }: { complaint: number; author: number; content: string }) =>
      complaintResponse(complaint, author, content),
    useQueryOption,
  );
