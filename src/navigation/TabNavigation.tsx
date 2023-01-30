import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import Favourite from '../components/Icons/Favourite';
import Icon from '../components/Icons/Icon';
import colors from '../constants/colors';
import ProfileScreen from '../features/profile/screens/ProfileScreen';
import FavouriteScreen from '../features/favourites/screens/FavouriteScreen';
import {TabsScreens} from '../constants/screens';
import HomeNavigation from './HomeNavigation';
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={TabsScreens.HomeStack}
      screenOptions={{
        tabBarActiveBackgroundColor: colors.BLUE_DARK,
        tabBarInactiveBackgroundColor: colors.BLUE_DARK,
        tabBarActiveTintColor: colors.WHITE_BASE,
        tabBarStyle: styles.container,
      }}>
      <Tab.Screen
        name={TabsScreens.ProfileScreen}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              path={
                'M14 14C15.3924 14 16.7277 13.4469 17.7123 12.4623C18.6969 11.4777 19.25 10.1424 19.25 8.75C19.25 7.35761 18.6969 6.02226 17.7123 5.03769C16.7277 4.05312 15.3924 3.5 14 3.5C12.6076 3.5 11.2723 4.05312 10.2877 5.03769C9.30312 6.02226 8.75 7.35761 8.75 8.75C8.75 10.1424 9.30312 11.4777 10.2877 12.4623C11.2723 13.4469 12.6076 14 14 14ZM17.5 8.75C17.5 9.67826 17.1313 10.5685 16.4749 11.2249C15.8185 11.8813 14.9283 12.25 14 12.25C13.0717 12.25 12.1815 11.8813 11.5251 11.2249C10.8687 10.5685 10.5 9.67826 10.5 8.75C10.5 7.82174 10.8687 6.9315 11.5251 6.27513C12.1815 5.61875 13.0717 5.25 14 5.25C14.9283 5.25 15.8185 5.61875 16.4749 6.27513C17.1313 6.9315 17.5 7.82174 17.5 8.75ZM24.5 22.75C24.5 24.5 22.75 24.5 22.75 24.5H5.25C5.25 24.5 3.5 24.5 3.5 22.75C3.5 21 5.25 15.75 14 15.75C22.75 15.75 24.5 21 24.5 22.75ZM22.75 22.743C22.7482 22.3125 22.4805 21.0175 21.294 19.831C20.153 18.69 18.0057 17.5 14 17.5C9.9925 17.5 7.847 18.69 6.706 19.831C5.5195 21.0175 5.2535 22.3125 5.25 22.743H22.75Z'
              }
              width={28}
              height={28}
              color={focused ? colors.CLEAN_WHITE : '#B6B6EA'}
            />
          ),
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name={TabsScreens.HomeStack}
        component={HomeNavigation}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              path={
                'M13.2978 2.20833C13.6227 1.90114 14.0529 1.72998 14.5 1.72998C14.9471 1.72998 15.3773 1.90114 15.7023 2.20833L24.1793 10.2216C24.7043 10.7168 25 11.4081 25 12.1291V21.8766C25 22.5728 24.7234 23.2405 24.2312 23.7327C23.7389 24.225 23.0712 24.5016 22.375 24.5016H18.875C18.5301 24.5016 18.1886 24.4336 17.8701 24.3016C17.5515 24.1696 17.262 23.9761 17.0182 23.7321C16.7744 23.4882 16.5811 23.1986 16.4493 22.8799C16.3175 22.5612 16.2498 22.2197 16.25 21.8748V17.4998C16.25 17.2678 16.1578 17.0452 15.9937 16.8811C15.8296 16.717 15.6071 16.6248 15.375 16.6248H13.625C13.3929 16.6248 13.1704 16.717 13.0063 16.8811C12.8422 17.0452 12.75 17.2678 12.75 17.4998V21.8748C12.75 22.571 12.4734 23.2387 11.9812 23.731C11.4889 24.2233 10.8212 24.4998 10.125 24.4998H6.625C5.92881 24.4998 5.26113 24.2233 4.76884 23.731C4.27656 23.2387 4 22.571 4 21.8748V12.1273C4 11.4063 4.2975 10.7151 4.8225 10.2198L13.2978 2.20483V2.20833ZM14.5 3.47883L6.023 11.4938C5.93694 11.5754 5.86837 11.6736 5.82144 11.7825C5.77451 11.8914 5.7502 12.0087 5.75 12.1273V21.8748C5.75 22.1069 5.84219 22.3295 6.00628 22.4935C6.17038 22.6576 6.39294 22.7498 6.625 22.7498H10.125C10.3571 22.7498 10.5796 22.6576 10.7437 22.4935C10.9078 22.3295 11 22.1069 11 21.8748V17.4998C11 16.8036 11.2766 16.136 11.7688 15.6437C12.2611 15.1514 12.9288 14.8748 13.625 14.8748H15.375C16.0712 14.8748 16.7389 15.1514 17.2312 15.6437C17.7234 16.136 18 16.8036 18 17.4998V21.8748C18 22.1069 18.0922 22.3295 18.2563 22.4935C18.4204 22.6576 18.6429 22.7498 18.875 22.7498H22.375C22.6071 22.7498 22.8296 22.6576 22.9937 22.4935C23.1578 22.3295 23.25 22.1069 23.25 21.8748V12.1273C23.25 12.0085 23.2258 11.8908 23.1789 11.7816C23.132 11.6724 23.0633 11.5739 22.977 11.4921L14.5 3.47883Z'
              }
              width={28}
              height={28}
              color={focused ? colors.CLEAN_WHITE : '#B6B6EA'}
            />
          ),
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name={TabsScreens.FavouriteScreen}
        component={FavouriteScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Favourite
              width={28}
              height={28}
              color={focused ? colors.CLEAN_WHITE : '#B6B6EA'}
            />
          ),
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 0,
    height: 74,
    backgroundColor: colors.BLUE_DARK,
    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
