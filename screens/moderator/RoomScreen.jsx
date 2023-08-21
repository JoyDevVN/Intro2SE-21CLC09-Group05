import { useState, useEffect, useCallback } from "react";
import { StyleSheet, TextInput, Modal, TouchableOpacity, View, ImageBackground, Image, ScrollView, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { COLORS, TEXTS } from '../../constants/theme'
import modStyles from '../../styles/mod'
import JoyText from '../../components/general/JoyText'

import RoomAmenityCard from "../../components/moderator/RoomAmenityCard";

//CONTROLLER
import MController from "../../controllers/moderatorController";



export default function RoomScreen({ navigation }) {


    const listOfAmenities = ['Air Conditioner', 'Fasdfsa', 'Wifi', 'TV', 'Shampoo', 'Towel', 'Slippers', 'CD/DVD Player', 'Electronic Safe', 'Mini Frigde', 'Coffee Maker'];


    // ------ Data State
    const [hotelInfo, setHotelInfo] = useState(null)
    const [amenities, setamenities] = useState([])
    const [roomList, setRoomList] = useState([])
    const [removeMode, setRemoveMode] = useState(false)

    // ------ Fetch Data at first render
    useEffect(() => {
        const fetchHotelInformation = async () => {
            let data = await MController('GETROOMLIST')
            setHotelInfo(data)
            setamenities([{ label: 'Air Conditioner', value: 'Air Conditioner' }])
            setRoomList(data.roomList)
            console.log(roomList)
        }

        fetchHotelInformation()
    }, [])


    return (
        <ScrollView style={modStyles.page_container}>

            <View style={styles.thumbnail_wrapper}>
                <ImageBackground
                    source={require('../../assets/mod/demoHotel.jpg')}
                    resizeMode="cover"
                    style={styles.thumbnail_image}
                >
                    <TouchableOpacity
                        style={modStyles.top_bar_button}
                        onPress={
                            () => { navigation.goBack() }
                        }
                    >
                        <FontAwesome5Icon name={"arrow-left"} size={18} color={COLORS.primary} />
                    </TouchableOpacity>
                </ImageBackground>
            </View>

            <View style={{ ...modStyles.page_padding, marginTop: 20 }}>
                <RoomAmenityCard amenities={amenities} />
            </View>

            <View style={{ marginTop: 10, height: 7, backgroundColor: '#E7E7E7' }} />
            <View style={{ ...modStyles.page_padding, flexDirection: 'row' }}>
                <View style={{ marginTop: 30, width: 170, height: 50, borderRadius: 10, borderWidth: 1 }}>
                    <TouchableOpacity onPress={() => { navigation.navigate("AddRoomPage", route = { listOfAmenities }) }} style={{ flexDirection: 'row', width: 100, height: 50 }}>
                        <Ionicons name="add-circle-outline" style={{ marginLeft: 10, marginTop: 4 }} size={40} color="black" />
                        <JoyText style={{ marginTop: 14, marginLeft: 10, width: 100, fontSize: TEXTS.md }}>Add room</JoyText >
                    </TouchableOpacity>
                </View>
                <View style={{ width: 10 }}></View>
                <View style={{ marginTop: 30, width: 170, height: 50, borderRadius: 10, borderWidth: 1 }}>
                    <TouchableOpacity onPress={() => { setRemoveMode(true ^ removeMode) }} style={{ flexDirection: 'row', width: 100, height: 50 }}>
                        <Ionicons name="close-circle-outline" style={{ marginLeft: 10, marginTop: 4 }} size={40} color="black" />
                        <JoyText style={{ marginTop: 14, marginLeft: 10, width: 100, fontSize: TEXTS.md }}>{removeMode == true ? "Done" : "Remove room"}</JoyText >
                    </TouchableOpacity>
                </View>
            </View>
            <RoomArea roomList={roomList} navigation={navigation} removeMode={removeMode} />

        </ScrollView>
    );
}

function RoomArea({ roomList, navigation, removeMode }) {

    if(!roomList)
        return (<View/>)

    n = roomList.length
    listOfType = []

    for (let i = 0; i < roomList.length; i++) {
        listOfType.push(roomList[i].roomType)
    }

    res = []
    for (let i = 0; i < n; ++i) {
        res.push(
            <View style={modStyles.page_padding}>
                <JoyText style={{ fontSize: TEXTS['5xl'], marginBottom: 20, marginTop: 20, fontWeight: 'bold' }}>{listOfType[i]}</JoyText >
                <FlatList style={{ height: 370 }}
                    horizontal data={roomList[i].roomList}
                    renderItem={({ item }) => (
                        <RoomCard img={require("../../assets/mod/demoHotel.jpg")} room={item} navigation={navigation} removeMode={removeMode} />
                    )}
                ></FlatList>
            </View>

        )
    }
    return res
}


function RoomCard({ img, room, navigation, removeMode }) {

    const [popup, setPopup] = useState(false)
    const showPopup = useCallback(() => { setPopup(true);  }, [popup])
    const closePopup = useCallback(() => { setPopup(false); }, [popup])
    return (
        <View style={{ height: 350, width: 320, borderRadius: 15, marginRight: 10, marginLeft: 3, elevation: 3, backgroundColor: '#E7E7E7' }}>

            <TouchableOpacity onPress={() => { navigation.navigate("DetailedRoomPage", route = { room }) }} style={{ flex: 3, height: 250, width: 320, borderRadius: 15 }}>
                {(removeMode == true) ? (

                    <TouchableOpacity onPress={showPopup}>
                        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                            <Ionicons name="close-circle-outline" style={{ marginLeft: 0, marginTop: 4 }} size={40} color="red" />
                            <JoyText style={{ marginLeft: 0, marginTop: 15 }}>Remove this room</JoyText>
                        </View>
                    </TouchableOpacity>
                ) : <View />}
                <Image style={{ height: 250, width: 320, borderRadius: 15 }} source={img} />
            </TouchableOpacity>
            <View style={{ flex: 1.1, marginTop: -35, backgroundColor: 'white', borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}>
                <JoyText style={{ flex: 1.3, fontSize: TEXTS.xxl, fontWeight: 'bold', marginLeft: 15, marginTop: 3 }}>{room.name}</JoyText >
                <JoyText style={{ flex: 1, fontSize: TEXTS.xxl, fontWeight: 'bold', marginRight: 15, marginTop: -15, textAlign: 'right', color: '#ff6400', marginRight: 20 }}>{room.price + " VND"}</JoyText >
                <View style={{ flexDirection: 'row', flex: 1, marginLeft: 15 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={{ height: 25, width: 25 }} source={require("../../assets/mod/bed.png")} />
                        <JoyText style={{ marginTop: 3, marginLeft: 7 }}>{room.info[1].value + " beds"}</JoyText >
                    </View>
                    <Image style={{ marginTop: 10, marginLeft: 10, marginRight: 10, height: 5, width: 5 }} source={require("../../assets/mod/1dot.png")} />
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={{ height: 25, width: 25 }} source={require("../../assets/mod/area.png")} />
                        <JoyText style={{ marginTop: 3, marginLeft: 7 }}>{room.info[0].value + " m"}</JoyText >
                        <JoyText style={{ marginTop: 3, baselineShift: -6, fontSize: TEXTS.xxs }}>{"2"}</JoyText >
                    </View>
                    <Image style={{ marginTop: 10, marginLeft: 10, marginRight: 10, height: 5, width: 5 }} source={require("../../assets/mod/1dot.png")} />
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={{ height: 25, width: 25 }} source={require("../../assets/mod/people_black.png")} />
                        <JoyText style={{ marginTop: 3, marginLeft: 7 }}>{room.info[2].value + " People"}</JoyText >
                    </View>
                </View>
            </View>

            <Modal
                animationType="none"
                transparent={true}
                visible={popup}
            >
                <View style={{...styles.modal_page, backgroundColor:'#E7E7E7', marginTop:270}}>
                    <View style={styles.modal_container}>
                        <View style={{ paddingHorizontal: 14, marginTop: 14, marginBottom: 8 }}>
                            <TouchableOpacity
                                onPress={() => closePopup()}
                                style={{ width: 55, marginBottom: 6 }}
                            >
                                <JoyText style={{ color: COLORS.primary, fontSize: TEXTS.lg, fontWeight: '600' }}>
                                    Close
                                </JoyText>
                            </TouchableOpacity>
                            <View>
                                <JoyText style={{ color: COLORS.heading_text, fontSize: TEXTS.xxl, fontWeight: '600', }}>Are You Sure ?</JoyText>
                                
                                <TouchableOpacity style={{ alignSelf: 'flex-end', backgroundColor: "#FF6400", width: 70, height: 45, marginRight: 20, marginTop: 30, borderRadius: 10, }}
                                    onPress={() => {

                                        //console.log("ROOM",room)
                                        MController("REMOVEROOM",{
                                            room_id : room["id"],                                                                                                                              
                                        })

                                        closePopup()
                                    }}
                                >
                                    <JoyText style={{ fontSize: TEXTS.xl, color: 'white', textAlign: 'center', paddingTop: 7, fontWeight: 'bold' }}> YES </JoyText>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </View>
            </Modal>

        </View>
    )
}


function ConfirmRemove({ visible }) {
    <Modal
        animationType="none"
        transparent={true}
        visible={visible}
    >
        <View style={styles.modal_page}>
            <View style={styles.modal_container}>
                <View style={{ paddingHorizontal: 14, marginTop: 14, marginBottom: 8 }}>
                    <TouchableOpacity
                        onPress={() => setTopupPopUp(false)}
                        style={{ width: 46, marginBottom: 6 }}
                    >
                        <JoyText style={{ color: COLORS.primary, fontSize: TEXTS.lg, fontWeight: '600' }}>
                            Close
                        </JoyText>
                    </TouchableOpacity>
                    <View>
                        <JoyText style={{ color: COLORS.heading_text, fontSize: TEXTS.xxl, fontWeight: '600', }}>Nap tien</JoyText>
                        <TextInput
                            style={{ marginTop: 30, padding: 10, fontSize: TEXTS.lg, height: 60, borderWidth: 1, borderRadius: 10 }}
                            placeholder="Enter amount of money"
                            onChangeText={(value) => { setMoney(parseInt(value)) }}
                            keyboardType="numeric"
                        />
                        <TouchableOpacity style={{ alignSelf: 'flex-end', backgroundColor: "#FF6400", width: 70, height: 45, marginRight: 20, marginTop: 30, borderRadius: 10, }}
                            onPress={() => {

                            }}
                        >
                            <JoyText style={{ fontSize: TEXTS.xl, color: 'white', textAlign: 'center', paddingTop: 7, fontWeight: 'bold' }}> OK </JoyText>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </View>
    </Modal>
}


const styles = StyleSheet.create({
    thumbnail_wrapper: {
        width: '100%',
        height: 250,
    },
    thumbnail_image: {
        flex: 1,
        justifyContent: 'center',
    },
});


function newRoom({ rname, rprice }) {
    const room = {
        name: rname,
        price: rprice,
        info: [
            {
                label: "area",
                value: "20",
            },
            {
                label: "bed",
                value: "2",
            },
            {
                label: "capacity",
                value: "4",
            },
        ],
        amenities: [
            {
                label: "wifi",
                value: "Wifi",
            },
            {
                label: "bathtub",
                value: "Bathtub",
            },
            {
                label: "ac",
                value: "Air Conditioner",
            },
        ],
    };
    return room
}