import React from "react";

export interface IContentModalProps{
    modalTitle: string;
    modalClassSize: 'sm' | 'lg' | 'xl' | undefined;
    //modalClassSize: string;
    show: boolean;
    onHide: () => void;
    bodyContent: React.ReactNode;
    footerButtons: React.ReactNode;
}