export interface FilterButtonProps {
  onPress: () => void; // 버튼 클릭 시 실행할 함수
  text: string;
  backgroundColor: string;
  borderColor: string;
  textColor: string;
}

export interface FavortiteButtonProps {
  favorite: boolean;
  setFavorite: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ReviewRegistrationButtonProps {
  onPress: () => void; // 버튼 클릭 시 실행할 함수
}

export interface CloseButtonWithBranchNameProps {
  photoboothName: string;
  branchName: string;
  mine: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}
