import { useQuery, UseQueryResult } from '@tanstack/react-query';
import dataJson from './api.json'
import { ITs, ReturnHook } from '../types/interfases';

export const useGetTransports = (): ReturnHook => {
	const { isLoading, data, error }: UseQueryResult<ITs> =
		useQuery({
			queryKey: ['transports'],
			queryFn: () => dataJson
		});
	return { data, isLoading, error };
};
