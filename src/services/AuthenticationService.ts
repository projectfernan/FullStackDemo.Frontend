import { IApiBodyResponse } from "@IApiBodyResponse/ApiBodyResponse";
import { ApiEndPoints } from "@ApiConstants/ApiConstants";
import { makeRequest } from "@AxiosBasicAuth/AxiosBasicAuth";

export async function GetJwtToken(): Promise<IApiBodyResponse>{
    const apiUrl = import.meta.env.VITE_API_URL + ApiEndPoints.TOKEN_REQ_END_POINT;
        
    try{
        const response = await makeRequest('POST', `${apiUrl}`);
        const dataResponse : IApiBodyResponse = response;

        return dataResponse;
    }catch (error){
        console.error('Error in GetJwtToken():', error);
        
        return {
            data: null, 
            message: "Internal Server Error.", 
            success: false,
            totalCount: 0
        };
    }
}