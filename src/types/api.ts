export interface ApiErrorPayload {
  message: string;
  code?: string;
  details?: unknown;
}

export interface ApiListResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
}

export interface ApiSuccessResponse<T> {
  data: T;
  message?: string;
}
