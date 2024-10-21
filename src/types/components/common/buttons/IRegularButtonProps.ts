export interface IRegularButtonProps{
    buttonIconClass: string;
    buttonName: string;
    buttonClass: string;
    buttonHandleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}