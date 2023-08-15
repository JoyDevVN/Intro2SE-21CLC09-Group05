import { StyleSheet, View, Image } from "react-native";
import JoyText from "../../general/JoyText";

// Import Style & Theme
import { COLORS, TEXTS } from "../../../constants/theme";

export default function NotificationCard({ props , navigation }) {
    return (
        <View
            style={styles.card_container}
        >
            <View style={styles.thumbnail_wrapper}>
                <Image
                    source={require('../../../assets/customer/notification_tick.png')}
                    style={styles.thumbnail_image}
                />
            </View>

            <View style={styles.text_container}>
                <JoyText numberOfLines={2} style={styles.message}>{props.message}</JoyText>
                <JoyText style={{textAlign: 'right', color: COLORS.primary, fontWeight: '600'}}>{props.time}</JoyText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card_container: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
        elevation: 10,
    },

    thumbnail_wrapper: {
        width: 60,
        height: 60,
        marginLeft: 20,
        borderRadius: 20,
        overflow: 'hidden',
    },
    thumbnail_image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },

    text_container: {
        height: '100%',
        flex: 1,
        paddingLeft: 12,
        paddingRight: 16,
        paddingVertical: 12,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    message: {
        fontSize: TEXTS.xl,
        fontWeight: '600',
        color: COLORS.heading_text,
    },
});
