export interface IMobileSuitList {
    fields: string[];
    data: Array<{ [key: string]: any }>;
}

export interface IMobileSuitData {
    modelCode: string,
    modelName: string,
    operatingSystem: string,
    powerOutput: string,
    armor: string,
    height: string,
    weight: string,
    manufacturer: string,
    dateCreated: Date,
    createdBy: string,
    dateEdited: Date,
    editedBy: string
}