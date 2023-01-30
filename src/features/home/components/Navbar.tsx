import {View, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../../../constants/colors';
import DispatcherIcon from '../../../components/Icons/DispatcherIcon';
import Search from '../../../components/Icons/Search';
import Notification from '../../../components/Icons/Notification';

const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <View style={styles.innerContainer}>
        <View style={styles.appIcon}>
          <DispatcherIcon width={40} height={31} miniLogo={true} />
        </View>
        <View style={styles.navControls}>
          <Search width={20} height={20} />
          <View style={styles.notificationContainer}>
            <Notification width={20} height={20} />
            <View style={styles.notification} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navbar: {
    width: '100%',
    height: 74,
    backgroundColor: colors.BLUE_DARK,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  innerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  appIcon: {},
  navControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 54,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  notificationContainer: {
    position: 'relative',
  },
  notification: {
    position: 'absolute',
    width: 8,
    height: 8,
    backgroundColor: colors.RED_BASE,
    borderWidth: 1,
    borderColor: colors.BLUE_DARK,
    borderRadius: 4,
    right: 0,
    top: 0,
  },
});
