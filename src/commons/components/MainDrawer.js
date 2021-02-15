import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    DrawerItem,
    DrawerContentScrollView,
} from '@react-navigation/drawer';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
} from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {useDispatch, useSelector} from "react-redux";
import * as actionsTypes from "../../store/actions/types";

export function MainDrawer(props) {
    const dispatch = useDispatch();
    const darktheme = useSelector(state => state.preferences.darktheme);


    return (
        <DrawerContentScrollView {...props}>
            <View
                style={
                    styles.drawerContent
                }
            >
                <View style={styles.userInfoSection}>
                    <Avatar.Image
                        source={{
                            uri:
                                'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg',
                        }}
                        size={50}
                    />
                    <Title style={styles.title}>Thomas Woodfin</Title>
                    <Caption style={styles.caption}>@tomdev</Caption>
                    <View style={styles.row}>
                        <View style={styles.section}>
                            <Paragraph style={[styles.paragraph, styles.caption]}>
                                202
                            </Paragraph>
                            <Caption style={styles.caption}>Following</Caption>
                        </View>
                        <View style={styles.section}>
                            <Paragraph style={[styles.paragraph, styles.caption]}>
                                159
                            </Paragraph>
                            <Caption style={styles.caption}>Followers</Caption>
                        </View>
                    </View>
                </View>
                <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem
                        icon={({ color, size }) => (
                            <MaterialCommunityIcons
                                name="account-outline"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Profile"
                        onPress={() => {}}
                    />
                </Drawer.Section>
                {/*<Drawer.Section title="Preferences">*/}
                {/*    <TouchableRipple onPress={() => {*/}
                {/*        dispatch({ type: actionsTypes.toggleTheme })*/}
                {/*    }}>*/}
                {/*        <View style={styles.preference}>*/}
                {/*            <Text>Dark Theme</Text>*/}
                {/*            <View pointerEvents="none">*/}
                {/*                <Switch*/}
                {/*                    value={darktheme}*/}
                {/*                />*/}
                {/*            </View>*/}
                {/*        </View>*/}
                {/*    </TouchableRipple>*/}
                {/*</Drawer.Section>*/}
            </View>
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        marginTop: 20,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});
