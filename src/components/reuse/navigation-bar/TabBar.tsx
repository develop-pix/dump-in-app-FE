import { TouchableOpacity } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import AddReviewIcon from 'assets/image/icon/btn_add.svg';
import { NavigationBarContainer, ReviewNewItem } from 'styles/layout/navigation-bar/NavigationBar.style';

import NavigationBarListItem from './NavigationBarListItem';
import { useAppSelector } from 'hooks/redux/store';

export default function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
    const safeAreaInset = useSafeAreaInsets();
    const accessToken = useAppSelector(state => state.token).accessToken;

    return (
        <NavigationBarContainer style={{ paddingBottom: safeAreaInset.bottom, height: safeAreaInset.bottom + 56 }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                          ? options.title
                          : route.name;

                const isFocused = state.index === index;
                const isAddReview = label === 'AddReview';

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        if (isAddReview) {
                            accessToken && navigation.navigate('AddReviewModal', route.params);
                        } else {
                            navigation.navigate(route.name, route.params);
                        }
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        key={index}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ flex: 1 }}>
                        {isAddReview ? (
                            <ReviewNewItem>
                                <AddReviewIcon width={13} height={13} />
                            </ReviewNewItem>
                        ) : (
                            <NavigationBarListItem label={label as string} isFocused={isFocused} />
                        )}
                    </TouchableOpacity>
                );
            })}
        </NavigationBarContainer>
    );
}
