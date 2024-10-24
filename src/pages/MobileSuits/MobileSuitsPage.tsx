// React Hooks
import { useEffect, useState, useRef } from "react";
//Form Management and Validation
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { z,ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
//Services
import { GetMobileSuitPages,CreateMobileSuit } from "@MobileSuitsService/MobileSuitsService";
//Types
import { IApiBodyResponse } from '@IApiBodyResponse/*';
import { IMobileSuitData, IMobileSuitForm } from "@IMobileSuits/IMobileSuits";
import { IRegularButtonProps } from '@IRegularButtonProps/IRegularButtonProps';
import { IContentModalProps } from 'types/components/common/modals/IContentModalProps';
//Components
import MobileSuitsList from "./MobileSuitList";
import MobileSuitFormSubmit from "./MobileSuitFormSubmit";
import { PaginatedTable }  from "@PaginatedTable/PaginatedTable";
import { RegularButton } from '@RegularButton/RegularButton';
import { RegularButtonProvider } from '@RegularButtonContext/RegularButtonContext';
import { ContentModal } from '@ContentModal/ContentModal';
import { ContentModalProvider } from '@ContentModalContext/ContentModalContext';

const schema: ZodType<IMobileSuitForm> = z.object({
    ModelCode: z.string().min(1, "Model code is required."),
    ModelName: z.string().min(1, "Model name is required."),
    OperatingSystem: z.string().min(1, "Operating system is required."),
    PowerOutput: z.string().min(1, "Power output is required."),
    Armor: z.string().min(1, "Armor is required."),
    Height: z.string().min(1, "Height is required."),
    Weight: z.string().min(1, "Weight is required."),
    Manufacturer: z.string().min(1, "Manufacturer is required."),
  });

const MobileSuitsPage = () => {
  
    // State Management

// Table Structure State
const [header, setHeader] = useState<string[]>([]);
const [resData, setResData] = useState<IMobileSuitData[]>([]);

// Pagination State
const length: number = Number(import.meta.env.VITE_TABLE_ROW_LIMIT);
const [page, setPage] = useState<number>(0);
const [maxPage, setMaxPage] = useState<number>(0);
const [search, setSearch] = useState<string | null>(null);
const [disabledPrev, setDisabledPrev] = useState<boolean>(true);
const [disabledNext, setDisabledNext] = useState<boolean>(true);
const maxPageRef = useRef(maxPage);

// Create Modal State
const [showModal, setShowModal] = useState<boolean>(false);
const formMethods = useForm<IMobileSuitForm>({ resolver: zodResolver(schema) });

// API Calls
// Fetch Mobile Suits Data with Pagination and Search
const GetMobileSuits = async () => {
  const res: IApiBodyResponse = await GetMobileSuitPages(page, length, search);
        setHeader([
            "Model Code",
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
            "Action",
        ]);

        if (res.success) {
            setResData(res.data);
            setMaxPage(res.totalCount);
            maxPageRef.current = res.totalCount;
        }
    };

    // Submit New Mobile Suit to the API
    const postCreate = async (param: IMobileSuitForm) => {
    const res = await CreateMobileSuit(param);
        if (res.success) {
            window.location.reload();
        } else {
            console.error('Error CreateMobileSuit():', res.message);
        }
    };

    // Event Handlers
    // Pagination Event Handlers
    const handleClickPrevEvent = () => setPage(prevPage => Math.max(prevPage - length, 0));
    const handleClickNextEvent = () => setPage(prevPage => prevPage + length);

    // Search Input Handler
    const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.currentTarget.value);

    // Form Submit Handlers
    const onSubmit: SubmitHandler<IMobileSuitForm> = (data) => postCreate(data);
    const onError = (errors: any) => console.error("Form validation errors:", errors);

    // Modal Visibility Handlers
    const handleOnHide = () => setShowModal(false);

    // Button Configuration
    // Button to open the "Create Mobile Suit" modal
    const addButton: IRegularButtonProps = {
    buttonClass: 'btn-success',
    buttonName: 'Add',
    buttonIconClass: 'fas fa-plus',
    buttonHandleClick: () => setShowModal(true),
    };

    // Button to save the mobile suit data
    const modalSaveButton: IRegularButtonProps = {
    buttonClass: 'btn-primary',
    buttonName: 'Save',
    buttonIconClass: 'fas fa-save',
    buttonHandleClick: () => formMethods.handleSubmit(onSubmit, onError)(),
    };

    // Button to close the modal
    const modalCloseButton: IRegularButtonProps = {
    buttonClass: 'btn-secondary',
    buttonName: 'Close',
    buttonIconClass: 'fas fa-times-circle',
    buttonHandleClick: () => setShowModal(false),
    };

    // Modal Configuration for Creating Mobile Suit
    const modalCreate: IContentModalProps = {
    modalTitle: "Add New Mobile Suit",
    modalClassSize: "lg",
    show: showModal,
    onHide: handleOnHide,
    bodyContent: (
        <MobileSuitFormSubmit
        ModelCode=""
        ModelName=""
        OperatingSystem=""
        PowerOutput=""
        Armor=""
        Height=""
        Weight=""
        Manufacturer=""
        />
    ),
    footerButtons: (
        <>
        <RegularButtonProvider buttonProps={modalSaveButton}>
            <RegularButton />
        </RegularButtonProvider>

        <RegularButtonProvider buttonProps={modalCloseButton}>
            <RegularButton />
        </RegularButtonProvider>
        </>
    ),
    };

    // useEffect Hooks
    // Fetch Mobile Suits when page or search changes
    useEffect(() => {
    if (!search) setSearch(null);
    if (search && search.trim() !== "") setPage(0);
    GetMobileSuits();
    }, [page, search]);

    // Update navigation buttons state (disabled or enabled) based on page
    useEffect(() => {
    setDisabledPrev(page === 0);
    const totalPages = Math.ceil(maxPageRef.current / length);
    setDisabledNext(page >= totalPages - 1);
    }, [page, length, maxPage]);

    return(
        <>
            <h5 className="mb-4 text-gray-800">Mobile Suits</h5>

            <div className="card mb-4">
                <div className="card-header">
                    <RegularButtonProvider buttonProps={addButton}>
                        <RegularButton />
                    </RegularButtonProvider>
                </div>

                <div className="card-body">
                    <PaginatedTable 
                        maxPage = {maxPage}
                        pageLength = {length}
                        activePage = {page}
                        data={resData}
                        tableBody = {<MobileSuitsList 
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
            </div>  

            <ContentModalProvider modalProps={modalCreate}>
                <FormProvider {...formMethods}>
                    <form onSubmit={formMethods.handleSubmit(onSubmit)}>
                        <ContentModal />
                    </form>
                </FormProvider> 
            </ContentModalProvider>
        </>
    )
}

export default MobileSuitsPage