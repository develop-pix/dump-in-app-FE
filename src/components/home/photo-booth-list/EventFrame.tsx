import { useIsFocused, useNavigation } from '@react-navigation/native';

import NewEventIcon from 'assets/image/icon/new.svg';
import { EventFrameProps } from 'interfaces/Home.interface';
import { HomeStackScreenProps } from 'interfaces/Navigation.interface';
import { EventFrameContainer, EventFrameImage, TagImage } from 'styles/layout/home/photo-booth-list/EventFrame.style';

export default function EventFrame({ data }: EventFrameProps) {
    const navigation = useNavigation<HomeStackScreenProps<'Home'>['navigation']>();
    const isFocused = useIsFocused();

    const onPressEvent = () => {
        if (isFocused) {
            navigation.navigate('EventDetail', {
                eventID: data.id,
            });
        }
    };

    return (
        <EventFrameContainer activeOpacity={0.9} onPress={onPressEvent}>
            <EventFrameImage source={{ uri: data.mainThumbnailImageUrl }} />
            <TagImage>
                <NewEventIcon />
            </TagImage>
        </EventFrameContainer>
    );
}
