import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import generalStyles from "../../styles/general";

export default function ReportScreen() {
    return (
        <View style={(generalStyles.page_container , {flex: 1, justifyContent: "center", alignItems: "center"})}>
            <Text>Report Screen</Text>
        </View>
    );
}
