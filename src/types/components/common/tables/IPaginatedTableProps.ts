import React from "react";

export interface IPaginatedTableProps {
    maxPage: number;
    pageLength: number;
    activePage: number;
    data: Array<{ [key: string]: any }>;
    header?: string[];
    tableBody: React.ReactNode;
    handleClickPrev: (event: React.MouseEvent<HTMLButtonElement>) => void;
    handleClickNext: (event: React.MouseEvent<HTMLButtonElement>) => void;
    handleSearchInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
    disabledNext: boolean;
    disabledPrev: boolean;
    disabledSearch: boolean;
}