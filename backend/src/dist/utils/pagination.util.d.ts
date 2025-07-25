export interface PaginationOptions {
    page?: number;
    limit?: number;
}
export interface PaginationResult<T> {
    data: T[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}
export declare function paginate<T>(data: T[], total: number, options: PaginationOptions): PaginationResult<T>;
