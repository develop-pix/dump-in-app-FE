import UpIcon from 'assets/image/icon/btn_up.svg';
import { UpScrollButtonProps } from 'interfaces/reuse/button/Button.interfaces';
import { UpScrollImageBox } from 'styles/layout/reuse/button/UpScrollButton.style';

export const UpScrollButton = ({ top, flatListRef }: UpScrollButtonProps) => {
    const handleScrollToTop = () => {
        flatListRef.current?.scrollToOffset({ offset: 0, animated: true });
    };

    return (
        <UpScrollImageBox onPress={handleScrollToTop} top={top}>
            <UpIcon />
        </UpScrollImageBox>
    );
};
