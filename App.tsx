import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import store from 'hooks/redux/store';
import RootStackNavigation from 'navigation/RootStackNavigation';
import { ScreenProvider } from 'utils/ScreenContext';

const persistor = persistStore(store);

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ScreenProvider>
                    <NavigationContainer>
                        <RootStackNavigation />
                        {/* <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
                            <Stack.Screen name="Home" component={Home} initialParams={{ screen: 'Home' }} />
                            <Stack.Screen
                                name="HomeSearch"
                                component={HomeSearch}
                                initialParams={{ screen: 'HomeSearch', PhotoBoothName: null }}
                            />
                            <Stack.Screen
                                name="Location"
                                component={Location}
                                initialParams={{ screen: 'Location', PhotoBoothID: null }}
                            />
                            <Stack.Screen name="Category" component={Category} initialParams={{ screen: 'Category' }} />
                            <Stack.Screen name="MyPage" component={MyPage} initialParams={{ screen: 'MyPage' }} />
                            <Stack.Screen
                                name="LocationSearch"
                                component={LocationSearch}
                                initialParams={{
                                    screen: 'LocationSearch',
                                    NextPage: 'BranchDetail',
                                }}
                            />
                            <Stack.Screen
                                name="Branch"
                                component={Branch}
                                initialParams={{ screen: 'Branch', branchID: 0 }}
                            />
                            <Stack.Screen
                                name="OfficialImageDetail"
                                component={OfficialImageDetail}
                                initialParams={{
                                    screen: 'OfficialImageDetail',
                                    photoBoothName: null,
                                    image: '',
                                    index: 0,
                                }}
                            />
                            <Stack.Screen
                                name="ReviewDetail"
                                component={ReviewDetail}
                                initialParams={{ screen: 'ReviewDetail', reviewID: null }}
                            />
                            <Stack.Screen
                                name="PhotoBoothDetail"
                                component={PhotoBoothDetail}
                                initialParams={{ screen: 'PhotoBoothDetail', PhotoBoothID: 0 }}
                            />
                            <Stack.Screen
                                name="EventDetail"
                                component={EventDetail}
                                initialParams={{ screen: 'EventDetail', EventID: 0 }}
                            />
                            <Stack.Screen
                                name="ReviewNew"
                                component={ReviewNew}
                                initialParams={{ screen: 'ReviewNew', branchID: null }}
                            />
                            <Stack.Screen
                                name="ReviewEdit"
                                component={ReviewEdit}
                                initialParams={{ screen: 'ReviewEdit', ReviewID: null }}
                            />
                            <Stack.Screen name="Login" component={Login} initialParams={{ screen: 'Login' }} />
                            <Stack.Screen
                                name="Notification"
                                component={Notification}
                                initialParams={{ screen: 'Notification' }}
                            />
                        </Stack.Navigator> */}
                    </NavigationContainer>
                </ScreenProvider>
            </PersistGate>
        </Provider>
    );
};

export default App;
