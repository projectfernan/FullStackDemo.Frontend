import { createContext, useContext, ReactNode } from "react";
import { IRegularButtonProps } from "../../../../types/components/common/buttons/IRegularButtonProps";

const RegularButtonContext = createContext<IRegularButtonProps | undefined>(undefined);

export const RegularButtonProvider = ({children, buttonProps}: {children:ReactNode, buttonProps: IRegularButtonProps}) => {

    return(
        <RegularButtonContext.Provider value = {buttonProps}>
            {children}
        </RegularButtonContext.Provider>
    );
};

export const useRegularButtonContext = (): IRegularButtonProps =>{
    const context = useContext(RegularButtonContext)

    if (!context){
        console.error("Error in DefaultButtonContext.");
        throw new Error('useDefaultButtonContext must be used within an RegularButtonProvider');
    }

    return context;
}
