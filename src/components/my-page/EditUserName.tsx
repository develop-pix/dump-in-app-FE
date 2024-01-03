import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';

import EditIcon from '../../assets/image/icon/edit.svg';
import { useAppDispatch, useAppSelector } from '../../hooks/redux/store';
import { setUserNickName } from '../../hooks/redux/UserDataSlice';
import {
    CompleteButton,
    EditIconContainer,
    EditNickName,
    EditUserNameContainer,
    UserIDWrapper,
    UserNickNameWrapper,
} from '../../styles/layout/my-page/EditUserName.style';
import {
    FontWhiteBiggestSemibold,
    FontWhiteGreyNormalMedium,
    FontYellowSmallerMedium,
} from '../../styles/layout/reuse/text/Text.style';

export default function EditUserName() {
    const dispatch = useAppDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const { userID, userNickName } = useAppSelector(state => state.userData);
    const [editedNickName, setEditedNickName] = useState<string | null>(userNickName);

    useEffect(() => {
        setEditedNickName(userNickName);
    }, [userNickName]);

    const handleEditUserNickName = () => {
        setIsEditing(true);
    };

    const handleSaveUserName = () => {
        // 서버로 닉네임 전송, 성공 후 dispatch
        dispatch(setUserNickName(editedNickName));
        setIsEditing(false);
    };

    return (
        <EditUserNameContainer>
            {userID === null ? (
                <FontWhiteBiggestSemibold>로그인이 필요합니다.</FontWhiteBiggestSemibold>
            ) : (
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
                    <UserIDWrapper>
                        <FontWhiteGreyNormalMedium>{userID}</FontWhiteGreyNormalMedium>
                    </UserIDWrapper>
                </>
            )}
        </EditUserNameContainer>
    );
}
