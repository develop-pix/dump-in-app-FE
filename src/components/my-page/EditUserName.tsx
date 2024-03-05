import { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';

import EditIcon from 'assets/image/icon/edit.svg';
import { EditMyNickName, GetMyUserData } from 'hooks/axios/MyPage';
import { storage } from 'hooks/mmkv/storage';
import { useAppDispatch, useAppSelector } from 'hooks/redux/store';
import { setEmail, setUserID, setUserNickName } from 'hooks/redux/userDataSlice';
import {
    CompleteButton,
    EditIconContainer,
    EditNickName,
    EditUserNameContainer,
    UserIDWrapper,
    UserNickNameWrapper,
} from 'styles/layout/my-page/EditUserName.style';
import {
    FontRedSmallestMedium,
    FontWhiteBiggestSemibold,
    FontWhiteGreyNormalMedium,
    FontYellowSmallerMedium,
} from 'styles/layout/reuse/text/Text.style';

export default function EditUserName() {
    const dispatch = useAppDispatch();
    const { userID, userNickName } = useAppSelector(state => state.userData);
    const accessToken = storage.getString('token.accessToken');
    const isLoggedIn = useAppSelector(state => state.userData).isLoggedIn;

    const [isEditing, setIsEditing] = useState(false);
    const [editedNickName, setEditedNickName] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    /** 닉네임 수정하기 버튼 */
    const handleEditUserNickName = () => {
        setIsEditing(true);
    };

    /** 유저 닉네임 수정 완료 버튼 */
    const handleSaveUserName = async () => {
        if (userNickName === editedNickName) {
            setErrorMessage(null);
            setIsEditing(false);
            return;
        }
        if (editedNickName !== null && (editedNickName.length > 10 || editedNickName.length <= 0)) {
            setErrorMessage('*닉네임은 1~10글자까지 설정 가능합니다.');
            return;
        }

        if (accessToken && editedNickName && editedNickName.length > 0) {
            try {
                const editResult = await EditMyNickName(accessToken, editedNickName);
                if (editResult) {
                    dispatch(setUserNickName(editedNickName));
                    setErrorMessage(null);
                    setIsEditing(false);
                }
            } catch (error) {
                console.log('EditMyNickNameError ' + error);
            }
        }
    };

    // userNickName 변경
    useEffect(() => {
        setEditedNickName(userNickName);
    }, [userNickName]);

    // accessToken의 존재 여부에 따라 내 정보 데이터 Get
    useEffect(() => {
        const getMyUserData = async () => {
            if (accessToken && isLoggedIn) {
                try {
                    const userData = await GetMyUserData(accessToken);
                    if (userData.data) {
                        dispatch(setUserID(userData.data.id));
                        dispatch(setEmail(userData.data.email));
                        dispatch(setUserNickName(userData.data.nickname));
                    }
                } catch (error) {
                    console.log('GetMyUserDataError ' + error);
                }
            }
        };
        getMyUserData();
    }, [accessToken, isLoggedIn, dispatch]);

    return (
        <EditUserNameContainer>
            {isLoggedIn ? (
                <>
                    {isEditing ? (
                        <UserNickNameWrapper>
                            <EditNickName
                                value={editedNickName || ''}
                                onChangeText={text => setEditedNickName(text)}
                                onSubmitEditing={handleSaveUserName}
                                onBlur={() => {
                                    handleSaveUserName;
                                }}
                                autoFocus
                                selectTextOnFocus
                            />
                            <CompleteButton onPress={handleSaveUserName}>
                                <FontYellowSmallerMedium>완료</FontYellowSmallerMedium>
                            </CompleteButton>
                        </UserNickNameWrapper>
                    ) : (
                        <UserNickNameWrapper>
                            <FontWhiteBiggestSemibold onPress={handleEditUserNickName}>
                                {editedNickName}
                            </FontWhiteBiggestSemibold>
                            <TouchableOpacity onPress={handleEditUserNickName}>
                                <EditIconContainer>
                                    <EditIcon />
                                </EditIconContainer>
                            </TouchableOpacity>
                        </UserNickNameWrapper>
                    )}
                    {errorMessage && <FontRedSmallestMedium>{errorMessage}</FontRedSmallestMedium>}
                    <UserIDWrapper>
                        <FontWhiteGreyNormalMedium>{userID}</FontWhiteGreyNormalMedium>
                    </UserIDWrapper>
                </>
            ) : (
                <FontWhiteBiggestSemibold>로그인이 필요합니다.</FontWhiteBiggestSemibold>
            )}
        </EditUserNameContainer>
    );
}
