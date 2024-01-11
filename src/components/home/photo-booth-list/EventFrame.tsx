import { useIsFocused, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import NewEventIcon from 'assets/image/icon/new.svg';
import { EventFrameProps } from 'interfaces/Home.interface';
import { RootStackParam } from 'interfaces/NavigationBar';
import { EventFrameContainer, EventFrameImage, TagImage } from 'styles/layout/home/photo-booth-list/EventFrame.style';

export default function EventFrame({ data }: EventFrameProps) {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
    const isFocused = useIsFocused();

    const onPressEvent = () => {
        if (isFocused) {
            navigation.navigate('EventDetail', {
                eventID: data.eventID,
            });
        }
    };

    return (
        <EventFrameContainer activeOpacity={0.9} onPress={onPressEvent}>
            <EventFrameImage source={{ uri: data.representativeImage }} />
            <TagImage>
                <NewEventIcon />
            </TagImage>
        </EventFrameContainer>
    );
}
