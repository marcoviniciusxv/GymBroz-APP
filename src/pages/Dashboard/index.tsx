import React, { useContext } from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import { useAuth } from "../../context/auth";
import TabBottom from "../../components/TabBottom";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
});

const Dashboard: React.FC = () => {
    const { user, signOut } = useAuth();

    function handleSignOut() {
        signOut();
    }

    return (
        <View style={styles.container}>
            <Text>{user?.firstName}</Text>
            <Button title="Sign Out" onPress={handleSignOut} />
            <TabBottom/>
        </View>
    );
};
export default Dashboard;