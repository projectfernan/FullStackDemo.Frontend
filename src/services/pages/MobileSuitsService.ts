import { IApiBodyResponse } from "@IApiBodyResponse/ApiBodyResponse";
import { ApiEndPoints } from "@ApiConstants/ApiConstants";
import { makeRequest } from "@AxiosBearer/AxiosBearer";

export async function GetMobileSuitPages(start: number | 0, length: number | 0, search: string | null): Promise<IApiBodyResponse>{
    const apiUrl = import.meta.env.VITE_API_URL + ApiEndPoints.GET_MOBILE_SUITS_PAGES_END_POINT;
        
    try{
        const response = await makeRequest('GET', `${apiUrl}?start=${start}&length=${length}&search=${search}`);
        const dataResponse : IApiBodyResponse = response;
        
        return dataResponse;
    }catch (error){
        console.error('Error in GetMobileSuitPages():', error);
        
        return {
            data: null, 
            message: "Internal Server Error.", 
            success: false,
            totalCount: 0
        };
    }
}