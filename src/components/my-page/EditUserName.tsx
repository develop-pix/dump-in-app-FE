import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {useAppSelector, useAppDispatch} from '../../hooks/redux/store';
import {setUserNickName} from '../../hooks/redux/UserDataSlice';
import {
  EditUserNameContainer,
  UserNickName,
  EditIcon,
  CompleteButton,
  EditNickName,
  UserID,
} from '../../styles/layout/my-page/EditUserName.style';
import EditImage from '../../assets/image/reuse/edit.png';
import {
  FontWhiteBiggestThick,
  FontYellowSmallerThin,
  FontWhiteGreyNormalThin,
} from '../../styles/layout/reuse/text/Text.style';

export default function EditUserName() {
  const dispatch = useAppDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const {userID, userNickName} = useAppSelector(state => state.userData);

  const [editedNickName, setEditedNickName] = useState<string | null>(
    userNickName,
  );

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
        <FontWhiteBiggestThick>로그인이 필요합니다.</FontWhiteBiggestThick>
      ) : (
        <>
          {isEditing ? (
            <UserNickName>
              <EditNickName
                value={editedNickName || ''}
                onChangeText={text => setEditedNickName(text)}
                onSubmitEditing={handleSaveUserName}
                autoFocus
              />
              <CompleteButton onPress={handleSaveUserName}>
                <FontYellowSmallerThin>완료</FontYellowSmallerThin>
              </CompleteButton>
            </UserNickName>
          ) : (
            <UserNickName>
              <FontWhiteBiggestThick onPress={handleEditUserNickName}>
                {editedNickName}
              </FontWhiteBiggestThick>
              <TouchableOpacity onPress={handleEditUserNickName}>
                <EditIcon source={EditImage} />
              </TouchableOpacity>
            </UserNickName>
          )}
          <UserID>
            <FontWhiteGreyNormalThin>{userID}</FontWhiteGreyNormalThin>
          </UserID>
        </>
      )}
    </EditUserNameContainer>
  );
}
