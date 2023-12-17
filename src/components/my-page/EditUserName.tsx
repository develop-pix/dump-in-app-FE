import React, {useState, useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import {useAppSelector, useAppDispatch} from '../../hooks/redux/store';
import {setUserNickName} from '../../hooks/redux/UserDataSlice';
import {
  EditUserNameContainer,
  UserNickNameWrapper,
  EditIcon,
  CompleteButton,
  EditNickName,
  UserIDWrapper,
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
        <FontWhiteBiggestThick>로그인이 필요합니다.</FontWhiteBiggestThick>
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
                <FontYellowSmallerThin>완료</FontYellowSmallerThin>
              </CompleteButton>
            </UserNickNameWrapper>
          ) : (
            <UserNickNameWrapper>
              <FontWhiteBiggestThick onPress={handleEditUserNickName}>
                {editedNickName}
              </FontWhiteBiggestThick>
              <TouchableOpacity onPress={handleEditUserNickName}>
                <EditIcon source={EditImage} />
              </TouchableOpacity>
            </UserNickNameWrapper>
          )}
          <UserIDWrapper>
            <FontWhiteGreyNormalThin>{userID}</FontWhiteGreyNormalThin>
          </UserIDWrapper>
        </>
      )}
    </EditUserNameContainer>
  );
}
