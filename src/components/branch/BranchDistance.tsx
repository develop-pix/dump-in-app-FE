import { BranchDistanceProps } from 'interfaces/Branch.interface';
import { BranchDistanceContainer, BranchDistanceForm } from 'styles/layout/branch/BranchDistance.style';
import { FontWhiteSmallerMedium } from 'styles/layout/reuse/text/Text.style';

export default function BranchDistance({ distance }: BranchDistanceProps) {
    return (
        <BranchDistanceContainer>
            <BranchDistanceForm>
                <FontWhiteSmallerMedium>내 위치로부터 {distance}</FontWhiteSmallerMedium>
            </BranchDistanceForm>
        </BranchDistanceContainer>
    );
}
