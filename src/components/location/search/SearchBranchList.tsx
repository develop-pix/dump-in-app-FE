import React from 'react';
import {
  ListContainer,
  SearchBranchContainer,
  SearchBranchScrollView,
} from '../../../styles/layout/location/Location.style';
import {SearchBranchListProps} from '../../../interfaces/Location.interface';
import BranchList from './BranchList';

export default function SearchBranchList({
  data,
  setLocation,
  setModal,
}: SearchBranchListProps) {
  return (
    <SearchBranchScrollView>
      <SearchBranchContainer>
        <ListContainer>
          {data.map(branch => {
            return (
              <BranchList
                key={branch.branchID}
                branchName={branch.branchName}
                distance={branch.distance}
                location={branch.location}
                setLocation={setLocation}
                setModal={setModal}
              />
            );
          })}
        </ListContainer>
      </SearchBranchContainer>
    </SearchBranchScrollView>
  );
}
