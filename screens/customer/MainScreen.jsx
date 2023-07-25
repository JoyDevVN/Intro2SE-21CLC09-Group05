import React from "react";
import {StyleSheet, Text, View, Button, TouchableOpacity} from "react-native";
import {COLORS} from "../../constants/theme";
import axiosInstance from "../../models/config";
export default function MainScreen() {
    const getAccountHandler = async () => {
        axiosInstance.get('/auth/accounts').then((res) => {
            console.log(JSON.stringify(res.data));

        }).catch((err) => {
            console.log(JSON.stringify(err.response.data));
        })
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>CUSTOMER MAIN Screen</Text>
                <TouchableOpacity onPress={getAccountHandler}>
                    <Text style={{ color: COLORS.primary, fontWeight: '600', marginLeft: 3 }}>
                        Get Account
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({});
