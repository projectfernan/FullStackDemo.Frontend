//React Hooks
import { useState } from "react";
//Form Management and Validation
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { z,ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
//Types
import { IMobileSuitList } from "@IMobileSuits/IMobileSuits";
import { IRegularButtonProps } from '@IRegularButtonProps/IRegularButtonProps';
import { IContentModalProps } from 'types/components/common/modals/IContentModalProps';
import { IMobileSuitForm } from "@IMobileSuits/IMobileSuits";
//Services
import { UpdateMobileSuit,DeleteMobileSuit } from "@MobileSuitsService/MobileSuitsService";
//Utils
import { FormatDateTime } from '@FormatDateTime/DateHelper';
//Components
import { RegularButton } from '@RegularButton/RegularButton';
import { RegularButtonProvider } from '@RegularButtonContext/RegularButtonContext';
import MobileSuitFormSubmit from "./MobileSuitFormSubmit";
import { ContentModal } from '@ContentModal/ContentModal';
import { ContentModalProvider } from '@ContentModalContext/ContentModalContext';
import MobileSuitDelete from "./MobileSuitDelete";

//Form Submit Schema
const schema: ZodType<IMobileSuitForm> = z.object({
    ModelCode: z.string().min(1, "Model code is required."),
    ModelName: z.string().min(1, "Model name is required."),
    OperatingSystem: z.string().min(1, "Operating system is required."),
    PowerOutput: z.string().min(1, "Power output is required."),
    Armor: z.string().min(1, "Armor is required."),
    Height: z.string().min(1, "Height is required."),
    Weight: z.string().min(1, "Weight is required."),
    Manufacturer: z.string().min(1, "Manufacturer is required.")
  });

const MobileSuitsList = (props: IMobileSuitList) => {

    // Form Submit
    const [id, setId] = useState<number>(0);
    const [createdBy, setCreatedBy] = useState<string>("");
    const [dateCreated, setDateCreated] = useState<Date | undefined>();
    const [selectedMobileSuit, setSelectedMobileSuit] = useState<IMobileSuitForm | null>(null);

    // Update Modal State
    const [showUpdateModal, setShowUpdateModal] = useState<boolean>(false);
    const formMethods = useForm<IMobileSuitForm>({ resolver: zodResolver(schema) });

    // Delete Modal State
    const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
    const [modelCode, setModelCode] = useState<string>("");
    const [modelName, setModelName] = useState<string>("");

    // Field Mapping for the form
    const fieldMapping = [
        { key: 'modelCode' },
        { key: 'modelName' },
        { key: 'operatingSystem' },
        { key: 'powerOutput' },
        { key: 'armor' },
        { key: 'height' },
        { key: 'weight' },
        { key: 'manufacturer' },
        { key: 'dateCreated', isDate: true },
        { key: 'createdBy' },
        { key: 'dateEdited', isDate: true },
        { key: 'editedBy' }
    ];

    // Submit Form Data
    const putUpdate = async (param: IMobileSuitForm) => {
        const res = await UpdateMobileSuit(param, id, dateCreated, createdBy);
        if (res.success === true) {
            window.location.reload();
        } else {
            console.error('Error UpdateMobileSuit():', res.message);
        }
    };

    const onSubmit: SubmitHandler<IMobileSuitForm> = (data) => {
        putUpdate(data);
    };

    const onError = (errors: any) => {
        console.error("Form validation errors:", errors);
    };

    // Modal Button Configurations
    const modalSaveButton: IRegularButtonProps = {
        buttonClass: 'btn-primary',
        buttonName: 'Save',
        buttonIconClass: 'fas fa-save',
        buttonHandleClick: () => {
            formMethods.handleSubmit(onSubmit, onError)();
        }
    };

    const modalCloseButton: IRegularButtonProps = {
        buttonClass: 'btn-secondary',
        buttonName: 'Close',
        buttonIconClass: 'fas fa-times-circle',
        buttonHandleClick: () => {
            setShowUpdateModal(false);
        }
    };

    // Handle Modal Visibility
    const handleOnHide = () => {
        formMethods.reset();
        setShowUpdateModal(false);
    };

    const handleOnHideDeleteModal = () => {
        setShowDeleteModal(false);
    };

    // Update Modal Configuration
    const modalUpdate: IContentModalProps = {
        modalTitle: "Update Mobile Suit",
        modalClassSize: "lg",
        show: showUpdateModal,
        onHide: handleOnHide,
        bodyContent: (
            <MobileSuitFormSubmit
                ModelCode={selectedMobileSuit?.ModelCode || ""}
                ModelName={selectedMobileSuit?.ModelName || ""}
                OperatingSystem={selectedMobileSuit?.OperatingSystem || ""}
                PowerOutput={selectedMobileSuit?.PowerOutput || ""}
                Armor={selectedMobileSuit?.Armor || ""}
                Height={selectedMobileSuit?.Height || ""}
                Weight={selectedMobileSuit?.Weight || ""}
                Manufacturer={selectedMobileSuit?.Manufacturer || ""}
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
        )
    };

    // Delete Mobile Suit
    const deleteRequest = async () => {
        const res = await DeleteMobileSuit(id);
        if (res.success === true) {
            window.location.reload();
        } else {
            console.error('Error DeleteMobileSuit():', res.message);
        }
    };

    // Delete Modal Button Configurations
    const modalYesButton: IRegularButtonProps = {
        buttonClass: 'btn-danger',
        buttonName: 'Delete',
        buttonIconClass: 'fas fa-trash',
        buttonHandleClick: () => {
            deleteRequest();
        }
    };

    const modalNoButton: IRegularButtonProps = {
        buttonClass: 'btn-secondary',
        buttonName: 'No',
        buttonIconClass: 'fas fa-times-circle',
        buttonHandleClick: () => {
            setShowDeleteModal(false);
        }
    };

    // Delete Modal Configuration
    const modalDelete: IContentModalProps = {
        modalTitle: "Delete Mobile Suit",
        modalClassSize: undefined,
        show: showDeleteModal,
        onHide: handleOnHideDeleteModal,
        bodyContent: (
            <MobileSuitDelete ModelCode={modelCode} ModelName={modelName} />
        ),
        footerButtons: (
            <>
                <RegularButtonProvider buttonProps={modalYesButton}>
                    <RegularButton />
                </RegularButtonProvider>
                <RegularButtonProvider buttonProps={modalNoButton}>
                    <RegularButton />
                </RegularButtonProvider>
            </>
        )
    };

    return (
        <>
            {props.data.length > 0 ? (
                props.data.map((row, index) => {
                    // Set the update and delete button props per row
                    const updateButton: IRegularButtonProps = {
                        buttonClass: 'btn-warning',
                        buttonName: '',
                        buttonIconClass: 'fas fa-edit',
                        buttonHandleClick: () => {
                            setId(row.id);
                            setCreatedBy(row.createdBy);
                            setDateCreated(row.dateCreated);
                            setShowUpdateModal(true);

                            const mobileSuitData = {
                                ModelCode: row.modelCode,
                                ModelName: row.modelName,
                                OperatingSystem: row.operatingSystem,
                                PowerOutput: row.powerOutput,
                                Armor: row.armor,
                                Height: row.height,
                                Weight: row.weight,
                                Manufacturer: row.manufacturer
                            };
                            
                            // Set selected mobile suit data
                            setSelectedMobileSuit(mobileSuitData);
                            
                            // Reset the form with selected mobile suit data
                            formMethods.reset(mobileSuitData);
                        }
                    };    

                    const deleteButton: IRegularButtonProps = {
                        buttonClass: 'btn-danger',
                        buttonName: '',
                        buttonIconClass: 'fas fa-trash',
                        buttonHandleClick: () => {
                            setId(row.id);
                            setModelCode(row.modelCode);
                            setModelName(row.modelName);
                            setShowDeleteModal(true);
                        }
                    };   

                    return (
                        <tr key={index}>
                             {fieldMapping.map((field) => (
                                <td key={field.key}>
                                    {/* Check if it's a date field and format accordingly */}
                                    {field.isDate ? 
                                        row[field.key] ? 
                                            FormatDateTime(row[field.key]) : 
                                            row[field.key] : 
                                        row[field.key]
                                    }
                                </td>
                            ))}

                            <td> 
                                {/* Update button */}
                                <RegularButtonProvider buttonProps={updateButton}>
                                    <RegularButton />
                                </RegularButtonProvider>

                                {/* Delete button */}
                                <RegularButtonProvider buttonProps={deleteButton}>
                                    <RegularButton />
                                </RegularButtonProvider>

                                {showUpdateModal && (
                                    <div>
                                        <ContentModalProvider modalProps={modalUpdate}>
                                            <FormProvider {...formMethods}>
                                                <form onSubmit={formMethods.handleSubmit(onSubmit)}>
                                                    <ContentModal />
                                                </form>
                                            </FormProvider>
                                        </ContentModalProvider>
                                    </div>
                                )}

                                {showDeleteModal && (
                                    <div>
                                        <ContentModalProvider modalProps={modalDelete}>
                                            <ContentModal />
                                        </ContentModalProvider>
                                    </div>
                                )}
                            </td>
                        </tr>
                    );
                })
            ) : (
                <tr>
                    <td colSpan={13}>No data available.</td>
                </tr>
            )}
        </>
    );
}

export default MobileSuitsList
