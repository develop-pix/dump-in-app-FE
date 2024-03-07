import { BranchDistanceProps } from 'interfaces/Branch.interface';
import { BranchDistanceContainer, BranchDistanceForm } from 'styles/layout/branch/BranchDistance.style';
import { FontWhiteSmallerMedium } from 'styles/layout/reuse/text/Text.style';

export default function BranchDistance({ distance }: BranchDistanceProps) {
    return (
        <BranchDistanceContainer>
            <BranchDistanceForm>
                {distance ? (
                    <FontWhiteSmallerMedium>내 위치로부터 {distance}</FontWhiteSmallerMedium>
                ) : (
                    <FontWhiteSmallerMedium>위치 정보가 없습니다.</FontWhiteSmallerMedium>
                )}
            </BranchDistanceForm>
        </BranchDistanceContainer>
    );
}
