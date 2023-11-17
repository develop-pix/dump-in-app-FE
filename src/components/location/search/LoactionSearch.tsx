import React, {useEffect, useState} from 'react';
import Search from '../../reuse/input/Search';
import {
  SearchContainer,
  SearchForm,
} from '../../../styles/layout/location/Location.style';
import {
  BranchData,
  LocationSearchProps,
} from '../../../interfaces/Location.interface';
import CloseModalButton from '../../reuse/button/CloseModalButton';
import Modal from 'react-native-modal';
import SearchBranchList from './SearchBranchList';

export default function LoactionSearch({
  setLocation,
  setModal,
}: LocationSearchProps) {
  const [search, setSearch] = useState<string>('');
  const [resultData, setResultData] = useState<BranchData[] | []>([]);

  const tempData: BranchData[] = [
    {
      branchID: 1,
      branchName: '인생네컷 동대문 현대아울렛점',
      distance: '300m',
      address: '서울 중구 장충단로13길 20 1층',
    },
    {
      branchID: 2,
      branchName: '인생네컷 한양대점',
      distance: '450m',
      address: '서울 성동구 마조로 25',
    },
    {
      branchID: 3,
      branchName: '인생네컷 혜화로터리점',
      distance: '880m',
      address: '서울 종로구 대명길 42 1층 인생네컷',
    },
    {
      branchID: 4,
      branchName: '인생네컷 영등포 타임스퀘어점',
      distance: '999m',
      address: '서울 영등포구 영중로4길 17 1, 2층',
    },
    {
      branchID: 5,
      branchName: '인생네컷 광화문교보문고점',
      distance: '1.2km',
      address: '서울 종로구 자하문로2길 17-2 1층 인생네컷',
    },
    {
      branchID: 6,
      branchName: 'Test',
      distance: '999.9m',
      address: '서울 용산구 청파로45길 24',
    },
    {
      branchID: 7,
      branchName: 'Test2',
      distance: '119.9m',
      address: '서울 용산구 청파로47길 11',
    },
  ];
  const getSearchData = async (searchData: string) => {
    // 나중에 API 연결
    // const result = await getLocationData(search);
    setResultData(
      tempData.filter(data => {
        return data.branchName.indexOf(searchData) === 0;
      }),
    );
  };
  useEffect(() => {
    if (search !== '') {
      getSearchData(search);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  // 검색 버튼 클릭 시 실행
  const onSearchClick = () => {
    if (search !== '') {
      getSearchData(search);
    }
  };

  return (
    <Modal
      isVisible={true}
      animationIn="slideInRight"
      animationOut="slideOutLeft"
      deviceWidth={1}>
      <SearchForm>
        <SearchContainer>
          <CloseModalButton setModal={setModal} />
          <Search
            placeholder="포토부스, 주소 검색"
            setSearch={setSearch}
            onSearchClick={onSearchClick}
          />
          <SearchBranchList
            data={resultData}
            setLocation={setLocation}
            setModal={setModal}
          />
        </SearchContainer>
      </SearchForm>
    </Modal>
  );
}
