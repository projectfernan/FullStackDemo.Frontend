// React Hooks
import { useEffect, useState, useRef } from "react";
//services
import { GetMobileSuitPages } from "@MobileSuitsService/MobileSuitsService";
//Types
import { IApiBodyResponse } from '@IApiBodyResponse/*';
import { IMobileSuitData } from "@IMobileSuits/IMobileSuits";
//Components
import MobileSuitsList from "./MobileSuitList";
import { PaginatedTable }  from "@PaginatedTable/PaginatedTable";

const MobileSuitsPage = () => {
    //Table Structure
    const [header, setHeader] = useState<string[]>([]);
    const [fields, setFields] = useState<string[]>([]);
    const [resData, setResData] = useState<IMobileSuitData[]>([]);

    //Table Pagination
    const length: number = Number(import.meta.env.VITE_TABLE_ROW_LIMIT);
    const [page, setPage] = useState<number>(0);
    const [maxPage, setMaxPage] = useState<number>(0);
    const [search, setSearch] = useState<string | null>(null);
    const [disabledPrev, setDisabledPrev] = useState<boolean>(true);
    const [disabledNext, setDisabledNext] = useState<boolean>(true);
    const maxPageRef = useRef(maxPage);

    const GetMobileSuits = async() => {
        const res: IApiBodyResponse = await GetMobileSuitPages(page, length, search);
        
        setHeader(["Model Code", 
            "Model Name",
            "Operating System",
            "Power Output",
            "Armor",
            "Height",
            "Weight",
            "Manufacturer",
            "Date Created",
            "Created By",
            "Date Edited",
            "Edited By",
            "Action"
          ]);

           setFields(["modelCode",
            "modelName",
            "operatingSystem",
            "powerOutput",
            "armor",
            "height",
            "weight",
            "manufacturer",
            "dateCreated",
            "createdBy",
            "dateEdited",
            "editedBy"
          ]);

        if (res.success === true) {
            setResData(res.data);
            setMaxPage(res.totalCount);
            maxPageRef.current = res.totalCount;
        }
    }

    useEffect(()=>{
        if (!search){
            setSearch(null);
        }

        if (search && search.trim() !== "") {
            // If search has characters, reset page to 0
            setPage(0);
        }

        console.log('search',search)

        GetMobileSuits();
    },[page, search]);

    useEffect(() => {
        // Check if the current page state needs to disable navigation buttons
        setDisabledPrev(page === 0);
        
        const totalPages = Math.ceil(maxPageRef.current / length); // Calculate total pages
        const isLastPage = page >= totalPages - 1; // Check if the last page is reached
        setDisabledNext(isLastPage);

    }, [page, length, maxPage]); // Update navigation logic whenever page or length changes

    const handleClickPrevEvent = () => {
        setPage(prevPage => Math.max(prevPage - length, 0));
    };
    
    const handleClickNextEvent = () => {
       setPage(prevPage => prevPage + length);
    };

    const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
       setSearch(e.currentTarget.value);
    }

    return(
        <>
            <h5 className="mb-4 text-gray-800">Mobile Suits</h5>

            <div className="card">
                <div className="card-header">
                    
                </div>

                <PaginatedTable 
                    maxPage = {maxPage}
                    pageLength = {length}
                    activePage = {page}
                    data={resData}
                    tableBody = {<MobileSuitsList 
                                fields={fields}
                                data={resData} />
                            }
                    header = {header} 
                    handleClickPrev = {handleClickPrevEvent} 
                    handleClickNext = {handleClickNextEvent}
                    handleSearchInput  = { handleSearchInput }
                    disabledNext = {disabledNext}
                    disabledPrev = {disabledPrev}
                    disabledSearch = {true}
                />
            </div>  
        </>
    )
}

export default MobileSuitsPage