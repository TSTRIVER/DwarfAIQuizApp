import React from 'react'
import { Alert, StyleSheet, Text, View, Button } from "react-native";

const Profile = ({route}) => {
    return <Text>This is {route.params.name}'s profile</Text>;
}

export default Profile