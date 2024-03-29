import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput, Modal, View, Image, ScrollView, TouchableOpacity, ToastAndroid} from "react-native";
import JoyText from '../../components/general/JoyText'
import { COLORS, TEXTS } from '../../constants/theme'
import MController from "../../controllers/moderatorController";

export default function WalletScreen({ navigation ,route }) {

    const[hotelName,setHotelName] = useState(route.params["hotelName"])
   
   
    const [topupPopUp, setTopupPopUp] = useState(false)
    const [withdrawPopUp, setWithdrawPopUp] = useState(false)
    const [joycoin, setJoycoin] = useState(route.params["wallet"])
    const [money, setMoney] = useState(0)
   

    return (
        <ScrollView >

            <View style={{ flex: 1 }}>
                <Image style={{ height: 250, width: 'auto' }} source={require('../../assets/mod/demoHotel.jpg')} />
            </View>

            <View style={{
                flex: 2,
                marginTop: -50,
                backgroundColor: '#888888',
                borderTopLeftRadius: 25, borderTopRightRadius: 25
            }}>

                <View style={{ borderTopLeftRadius: 25, borderTopRightRadius: 25 }}>
                    <View style={{ paddingHorizontal: 32, backgroundColor: 'white', borderTopLeftRadius: 25, borderTopRightRadius: 25 }}>
                        <View style={{ flexDirection: 'row', marginTop: 45 }}>
                            <JoyText style={{ flex: 7, fontSize: 31, fontWeight: 'bold' }}>{hotelName}</JoyText >

                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 40, marginBottom: 30 }}>

                            <Image style={{ flex: 2, height: 30, width: 30 }} source={require('../../assets/mod/location_orange.png')} />

                            <JoyText style={{ marginLeft: 10, flex: 6, fontSize: 17 }}>{'JoyCoin: '}</JoyText >
                            <JoyText style={{ marginLeft: 10, flex: 15, fontSize: 17, color: '#888888' }}>{joycoin}</JoyText >

                        </View>
                     

                    </View>

                    <View style={{ height: 15, backgroundColor: 'transparent' }} />

                    <View style={{ paddingHorizontal: 32, backgroundColor: 'white',}}>
                        
                        <View style={{ flexDirection: 'row' , marginBottom: 30 , marginTop: 20 }}>

                          
                            <TouchableOpacity style={{ width: 120, height: 50, borderRadius: 10, borderWidth: 1, marginBottom: 20 }} onPress={() => {setWithdrawPopUp(!withdrawPopUp)}}>
                                <JoyText style={{ fontSize: 20, textAlign: 'center', paddingTop: 7 }}>Withdraw</JoyText >
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style={{ height: 15, backgroundColor: 'transparent' }} />


                    <Modal
                        animationType="none"
                        transparent={true}
                        visible={topupPopUp}
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
                                        <JoyText style={{ color: COLORS.heading_text,fontSize: TEXTS.xxl,fontWeight: '600',}}>Nap tien</JoyText>
                                        <TextInput
                                            style = {{marginTop: 30, padding:10, fontSize:TEXTS.lg, height: 60, borderWidth:1, borderRadius:10}}
                                            placeholder="Enter amount of money"
                                            onChangeText={(value)=>{ setMoney(parseInt(value))}}
                                            keyboardType="numeric"
                                        />
                                        <TouchableOpacity style={{alignSelf:'flex-end', backgroundColor:"#FF6400", width: 70, height: 45, marginRight: 20, marginTop: 30, borderRadius: 10 ,}}
                                        onPress = {() => { 
                                            setJoycoin(joycoin + money)
                                            setMoney(0)
                                            setTopupPopUp(false)
                                        }} 
                                        >
                                            <JoyText style={{fontSize: TEXTS.xl, color: 'white', textAlign: 'center', paddingTop:7, fontWeight:'bold'}}> OK </JoyText>
                                            </TouchableOpacity>
                                    </View>
                                </View>
                                
                            </View>
                        </View>
                    </Modal>
                    

                    <Modal
                        animationType="none"
                        transparent={true}
                        visible={withdrawPopUp}
                    >
                        <View style={styles.modal_page}>
                            <View style={styles.modal_container}>
                                <View style={{ paddingHorizontal: 14, marginTop: 14, marginBottom: 8 }}>
                                    <TouchableOpacity
                                        onPress={() => setWithdrawPopUp(false)}
                                        style={{ width: 46, marginBottom: 6 }}
                                    >
                                        <JoyText style={{ color: COLORS.primary, fontSize: TEXTS.lg, fontWeight: '600' }}>
                                            Close
                                        </JoyText>
                                    </TouchableOpacity>
                                    <View>
                                        <JoyText style={{ color: COLORS.heading_text,fontSize: TEXTS.xxl,fontWeight: '600',}}>Withdraw</JoyText>
                                        <TextInput
                                            style = {{marginTop: 30, padding:10, fontSize:TEXTS.lg, height: 60, borderWidth:1, borderRadius:10}}
                                            placeholder="Enter amount of money"
                                            onChangeText={(value)=>{setMoney(parseInt(value))}}
                                            keyboardType="numeric"
                                        />
                                        <TouchableOpacity style={{alignSelf:'flex-end', backgroundColor:"#FF6400", width: 70, height: 45, marginRight: 20, marginTop: 30, borderRadius: 10 ,}}
                                        onPress = {() => { 
                                            if(money <= joycoin)
                                            {
                                                if (MController("WITHDRAW",joycoin - money))
                                                {
                                                    setJoycoin(joycoin - money)
                                                    setMoney(0)
                                                }
                                                ToastAndroid.show("Successfully !", ToastAndroid.SHORT)
                                            }
                                            else 
                                            {
                                                ToastAndroid.show("Not enough money !", ToastAndroid.SHORT)
                                            }
                                            setWithdrawPopUp(false)
                                        }} 
                                        >
                                            <JoyText style={{fontSize: TEXTS.xl, color: 'white', textAlign: 'center', paddingTop:7, fontWeight:'bold'}}> OK </JoyText>
                                            </TouchableOpacity>
                                    </View>
                                </View>
                                
                            </View>
                        </View>
                    </Modal>


                </View>

            </View>

        </ScrollView>
    );
}

function withdraw() {

}

function topup() {

}

const styles = StyleSheet.create({
    modal_page: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    modal_container: {
        width: 360,
        height: 300,
        backgroundColor: 'white',
        borderRadius: 16,
    },
});
