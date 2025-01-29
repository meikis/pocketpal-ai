import React from 'react';
import {View} from 'react-native';

import {observer} from 'mobx-react';
import {IconButton, useTheme} from 'react-native-paper';

import {styles} from './styles';

import {chatSessionStore, uiStore} from '../../store';

import {UsageStats} from '..';
import {
  ClockFastForwardIcon,
  DotsVerticalIcon,
  DuplicateIcon,
  EditBoxIcon,
  EditIcon,
  GridIcon,
  SettingsIcon,
  ShareIcon,
  TrashIcon,
} from '../../assets/icons';
import {Menu} from '../Menu';

export const HeaderRight: React.FC = observer(() => {
  const theme = useTheme();
  const [menuVisible, setMenuVisible] = React.useState(false);

  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  return (
    <View style={styles.headerRightContainer}>
      {uiStore.displayMemUsage && <UsageStats width={40} height={20} />}
      <IconButton
        icon={() => <EditBoxIcon stroke={theme.colors.primary} />}
        testID="reset-button"
        onPress={() => {
          chatSessionStore.resetActiveSession();
        }}
      />
      <Menu
        visible={menuVisible}
        onDismiss={closeMenu}
        anchorPosition="bottom"
        anchor={
          <IconButton
            icon={() => <DotsVerticalIcon fill={theme.colors.primary} />}
            onPress={openMenu}
          />
        }>
        <Menu.Item
          onPress={() => {}}
          submenu={[
            <Menu.Item label="Model 1" onPress={() => {}} disabled={false} />,
            <Menu.Item label="Model 2" onPress={() => {}} disabled={false} />,
          ]}
          label="Model"
          leadingIcon={() => <GridIcon stroke={theme.colors.primary} />}
        />
        <Menu.Item
          onPress={() => {}}
          label="Generation settings"
          leadingIcon={() => <SettingsIcon stroke={theme.colors.primary} />}
        />
        <Menu.Separator />
        <Menu.Item
          onPress={() => {}}
          label="Duplicate chat history"
          leadingIcon={() => <DuplicateIcon stroke={theme.colors.primary} />}
        />
        <Menu.Item
          onPress={() => {}}
          label="Export chat session"
          leadingIcon={() => <ShareIcon stroke={theme.colors.primary} />}
        />
        <Menu.Item
          onPress={() => {}}
          label="Rename"
          leadingIcon={() => <EditIcon stroke={theme.colors.primary} />}
        />
        <Menu.Item
          onPress={() => {}}
          label="Delete"
          labelStyle={{color: theme.colors.error}}
          leadingIcon={() => <TrashIcon stroke={theme.colors.error} />}
        />
        <Menu.Separator />
        <Menu.Item
          onPress={() => {}}
          label="Make chat temporary"
          leadingIcon={() => (
            <ClockFastForwardIcon stroke={theme.colors.primary} />
          )}
        />
      </Menu>
    </View>
  );
});
