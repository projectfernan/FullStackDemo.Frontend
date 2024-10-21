import { createContext, useContext, ReactNode } from "react";
import { IContentModalProps } from "../../../../types/components/common/modals/IContentModalProps";

export const ContentModalContext = createContext<IContentModalProps | undefined>(undefined);

export const ContentModalProvider = ({children, modalProps} : {children: ReactNode, modalProps: IContentModalProps}) => {
    return(
        <ContentModalContext.Provider value = {modalProps}>
            {children}
        </ContentModalContext.Provider>
    )
};

export const useContentModalContext = (): IContentModalProps => {
    const context = useContext(ContentModalContext);

    if (!context){
        throw new Error("useContentModalContext must be used within an ContentModalProvider");
    }

    return context;
}