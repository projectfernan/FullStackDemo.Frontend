import { IApiBodyResponse } from "@IApiBodyResponse/ApiBodyResponse";
import { IMobileSuitForm } from "@IMobileSuits/IMobileSuits";
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

export async function CreateMobileSuit(props: IMobileSuitForm): Promise<IApiBodyResponse>{
    const { ModelCode, 
            ModelName, 
            OperatingSystem,
            PowerOutput,  
            Armor,
            Height, 
            Weight,
            Manufacturer } = props;
    
    const CreatedBy: string = "Guest";
    const apiUrl = import.meta.env.VITE_API_URL + ApiEndPoints.CREATE_MOBILE_SUIT_END_POINT;
    
    try{
        const requestData = {
            ModelCode,
            ModelName,
            OperatingSystem,
            PowerOutput,
            Armor,
            Height,
            Weight,
            Manufacturer,
            CreatedBy
        };
    
        const response = await makeRequest('POST', apiUrl, requestData);

        const dataResponse : IApiBodyResponse = response;
        return dataResponse; 
    }
    catch (error){
        console.error('Error in CreateBlankFixtureBatch():', error);

        return {
            data: null, 
            message: "Internal Server Error.", 
            success: false,
            totalCount: 0
        };
    }
}

export async function UpdateMobileSuit(props: IMobileSuitForm, Id: number, DateCreated: Date | undefined, CreatedBy: string): Promise<IApiBodyResponse>{
    const { ModelCode, 
            ModelName, 
            OperatingSystem,
            PowerOutput,  
            Armor,
            Height, 
            Weight,
            Manufacturer } = props;
    
    const EditedBy: string = "Guest";
    const apiUrl = import.meta.env.VITE_API_URL + ApiEndPoints.UPDATE_MOBILE_SUIT_END_POINT;
    
    try{
        const requestData = {
            Id,
            ModelCode,
            ModelName,
            OperatingSystem,
            PowerOutput,
            Armor,
            Height,
            Weight,
            Manufacturer,
            DateCreated,
            CreatedBy,
            EditedBy
        };

        const response = await makeRequest('PUT', apiUrl, requestData);

        const dataResponse : IApiBodyResponse = response;
        return dataResponse; 
    }
    catch (error){
        console.error('Error in CreateBlankFixtureBatch():', error);

        return {
            data: null, 
            message: "Internal Server Error.", 
            success: false,
            totalCount: 0
        };
    }
}

export async function DeleteMobileSuit(Id: number): Promise<IApiBodyResponse>{

    const DeletedBy: string = "Guest";
    const apiUrl = import.meta.env.VITE_API_URL + ApiEndPoints.DELETE_MOBILE_SUIT_END_POINT;
    
    try{
        const response = await makeRequest('DELETE', `${apiUrl}?Id=${Id}&DeletedBy=${DeletedBy}`);

        const dataResponse : IApiBodyResponse = response;
        return dataResponse; 
    }
    catch (error){
        console.error('Error in DeleteBlankFixtureBatch():', error);

        return {
            data: null, 
            message: "Internal Server Error.", 
            success: false,
            totalCount: 0
        };
    }
}