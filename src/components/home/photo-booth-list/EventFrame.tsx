import { useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import NewEventIcon from '../../../assets/image/icon/new.svg';
import { EventFrameProps } from '../../../interfaces/Home.interface';
import { RootStackParam, ScreenName } from '../../../interfaces/NavigationBar';
import {
    EventFrameContainer,
    EventFrameImage,
    TagImage,
} from '../../../styles/layout/home/photo-booth-list/EventFrame.style';

export default function EventFrame({ data }: EventFrameProps) {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
    const isFocused = useIsFocused();
    const route = useRoute();

    const onPressEvent = () => {
        const currentScreen = (route.params as { screen: ScreenName }).screen;
        if (isFocused) {
            navigation.push('EventDetail', {
                eventID: data.eventID,
                screen: currentScreen,
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
