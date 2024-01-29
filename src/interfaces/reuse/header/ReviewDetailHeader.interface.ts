export interface ReviewDetailHeaderProps {
    photoBoothName: string | null;
    branchName: string | null;
    isMine: boolean;
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}
