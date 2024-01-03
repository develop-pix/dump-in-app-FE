export interface FilterButtonProps {
    onPress: () => void; // 버튼 클릭 시 실행할 함수
    text: string;
    backgroundColor: string;
    borderColor: string;
    textColor: string;
    disabled: boolean;
}

export interface FavoriteButtonProps {
    favorite: boolean;
    setFavorite: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface NormalButtonProps {
    text: string;
    onPress: () => void; // 버튼 클릭 시 실행할 함수
}
