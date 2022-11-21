export class ApiError {
    status: number;
    message: string;
    constructor(c:number,d:string)  {
    this.status = c
    this.message = d
    }
    public static ApiInternalError(message:string) {
        return new ApiError(500,message);
    }
    public static ApiBadRequest(message:string) {
        return new ApiError(400,message);
    }
    public static ApiForbidden(message:string) {
        return new ApiError(403,message);
    }
}