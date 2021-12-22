import { MaterialState } from './state';

export function fetchDataSuccess(data: MaterialState[]) {
  return {
    type: '@@Material/FETCH_SUCCESS' as const,
    data,
  };
}

export type IMaterialAction = ReturnType<typeof fetchDataSuccess>;
