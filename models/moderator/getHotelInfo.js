import axiosInstance from "../configs";

// const roomList =
//     [
//         {
//             roomType: 'Standard',
//             roomList:
//                 [
//                     {
//                         name: 'Sweet Couple',
//                         price: 190000,
//                         info: [
//                             {
//                                 label: "area",
//                                 value: "50",
//                             },
//                             {
//                                 label: "bed",
//                                 value: "1",
//                             },
//                             {
//                                 label: "capacity",
//                                 value: "2",
//                             },
//                         ],
//                         amenities: [
//                             {
//                                 label: "wifi",
//                                 value: "Wifi",
//                             },
//                             {
//                                 label: "pool",
//                                 value: "Pool",
//                             },
//                             {
//                                 label: "bathtub",
//                                 value: "Bathtub",
//                             },
//                             {
//                                 label: "ac",
//                                 value: "Air Conditioner",
//                             },
//                         ],
//                     },
//                     {
//                         name: 'Three Some',
//                         price: 300000,
//                         info: [
//                             {
//                                 label: "area",
//                                 value: "50",
//                             },

//                             {
//                                 label: "bed",
//                                 value: "1",
//                             },
//                             {
//                                 label: "capacity",
//                                 value: "3",
//                             },
//                         ],
//                         amenities: [
//                             {
//                                 label: "wifi",
//                                 value: "Wifi",
//                             },
//                             {
//                                 label: "pool",
//                                 value: "Pool",
//                             },
//                             {
//                                 label: "ac",
//                                 value: "Air Conditioner",
//                             },
//                         ],
//                     },
//                     {
//                         name: "Hand Some",
//                         price: 84000,
//                         info: [
//                             {
//                                 label: "area",
//                                 value: "15",
//                             },
//                             {
//                                 label: "bed",
//                                 value: "1",
//                             },
//                             {
//                                 label: "capacity",
//                                 value: "1",
//                             },
//                         ],
//                         amenities: [

//                             {
//                                 label: "ac",
//                                 value: "Air Conditioner",
//                             },
//                         ],
//                     }, {
//                         name: "gangphank",
//                         price: 520000,
//                         info: [
//                             {
//                                 label: "area",
//                                 value: "35",
//                             },
//                             {
//                                 label: "bed",
//                                 value: "3",
//                             },
//                             {
//                                 label: "capacity",
//                                 value: "6",
//                             },
//                         ],
//                         amenities: [
//                             {
//                                 label: "wifi",
//                                 value: "Wifi",
//                             },
//                             {
//                                 label: "bathtub",
//                                 value: "Bathtub",
//                             },
//                             {
//                                 label: "ac",
//                                 value: "Air Conditioner",
//                             },
//                         ],
//                     }, {
//                         name: "Normal Room",
//                         price: 210000,
//                         info: [
//                             {
//                                 label: "area",
//                                 value: "20",
//                             },
//                             {
//                                 label: "bed",
//                                 value: "1",
//                             },
//                             {
//                                 label: "capacity",
//                                 value: "1",
//                             },
//                         ],
//                         amenities: [
//                             {
//                                 label: "wifi",
//                                 value: "Wifi",
//                             },
//                             {
//                                 label: "ac",
//                                 value: "Air Conditioner",
//                             },
//                         ],
//                     },
//                 ]

//         },

//         {
//             roomType: 'Deluxe',
//             roomList:
//                 [
//                     {
//                         name: 'Sweet Couple',
//                         price: 190000,
//                         info: [
//                             {
//                                 label: "area",
//                                 value: "50",
//                             },
//                             {
//                                 label: "bed",
//                                 value: "1",
//                             },
//                             {
//                                 label: "capacity",
//                                 value: "2",
//                             },
//                         ],
//                         amenities: [
//                             {
//                                 label: "wifi",
//                                 value: "Wifi",
//                             },
//                             {
//                                 label: "pool",
//                                 value: "Pool",
//                             },
//                             {
//                                 label: "bathtub",
//                                 value: "Bathtub",
//                             },
//                             {
//                                 label: "ac",
//                                 value: "Air Conditioner",
//                             },
//                         ],
//                     },
//                     {
//                         name: 'Three Some',
//                         price: 300000,
//                         info: [
//                             {
//                                 label: "area",
//                                 value: "50",
//                             },

//                             {
//                                 label: "bed",
//                                 value: "1",
//                             },
//                             {
//                                 label: "capacity",
//                                 value: "3",
//                             },
//                         ],
//                         amenities: [
//                             {
//                                 label: "wifi",
//                                 value: "Wifi",
//                             },
//                             {
//                                 label: "pool",
//                                 value: "Pool",
//                             },
//                             {
//                                 label: "ac",
//                                 value: "Air Conditioner",
//                             },
//                         ],
//                     },
//                     {
//                         name: "Hand Some",
//                         price: 84000,
//                         info: [
//                             {
//                                 label: "area",
//                                 value: "15",
//                             },
//                             {
//                                 label: "bed",
//                                 value: "1",
//                             },
//                             {
//                                 label: "capacity",
//                                 value: "1",
//                             },
//                         ],
//                         amenities: [

//                             {
//                                 label: "ac",
//                                 value: "Air Conditioner",
//                             },
//                         ],
//                     }, {
//                         name: "gangphank",
//                         price: 520000,
//                         info: [
//                             {
//                                 label: "area",
//                                 value: "35",
//                             },
//                             {
//                                 label: "bed",
//                                 value: "3",
//                             },
//                             {
//                                 label: "capacity",
//                                 value: "6",
//                             },
//                         ],
//                         amenities: [
//                             {
//                                 label: "wifi",
//                                 value: "Wifi",
//                             },
//                             {
//                                 label: "bathtub",
//                                 value: "Bathtub",
//                             },
//                             {
//                                 label: "ac",
//                                 value: "Air Conditioner",
//                             },
//                         ],
//                     }, {
//                         name: "Normal Room",
//                         price: 210000,
//                         info: [
//                             {
//                                 label: "area",
//                                 value: "20",
//                             },
//                             {
//                                 label: "bed",
//                                 value: "1",
//                             },
//                             {
//                                 label: "capacity",
//                                 value: "1",
//                             },
//                         ],
//                         amenities: [
//                             {
//                                 label: "wifi",
//                                 value: "Wifi",
//                             },
//                             {
//                                 label: "ac",
//                                 value: "Air Conditioner",
//                             },
//                         ],
//                     },
//                 ]

//         },

//         {
//             roomType: 'Luxury Dai Gia',
//             roomList:
//                 [
//                     {
//                         name: 'Sweet Couple',
//                         price: 190000,
//                         info: [
//                             {
//                                 label: "area",
//                                 value: "50",
//                             },
//                             {
//                                 label: "bed",
//                                 value: "1",
//                             },
//                             {
//                                 label: "capacity",
//                                 value: "2",
//                             },
//                         ],
//                         amenities: [
//                             {
//                                 label: "wifi",
//                                 value: "Wifi",
//                             },
//                             {
//                                 label: "pool",
//                                 value: "Pool",
//                             },
//                             {
//                                 label: "bathtub",
//                                 value: "Bathtub",
//                             },
//                             {
//                                 label: "ac",
//                                 value: "Air Conditioner",
//                             },
//                         ],
//                     },
//                     {
//                         name: 'Three Some',
//                         price: 300000,
//                         info: [
//                             {
//                                 label: "area",
//                                 value: "50",
//                             },

//                             {
//                                 label: "bed",
//                                 value: "1",
//                             },
//                             {
//                                 label: "capacity",
//                                 value: "3",
//                             },
//                         ],
//                         amenities: [
//                             {
//                                 label: "wifi",
//                                 value: "Wifi",
//                             },
//                             {
//                                 label: "pool",
//                                 value: "Pool",
//                             },
//                             {
//                                 label: "ac",
//                                 value: "Air Conditioner",
//                             },
//                         ],
//                     },
//                     {
//                         name: "Hand Some",
//                         price: 84000,
//                         info: [
//                             {
//                                 label: "area",
//                                 value: "15",
//                             },
//                             {
//                                 label: "bed",
//                                 value: "1",
//                             },
//                             {
//                                 label: "capacity",
//                                 value: "1",
//                             },
//                         ],
//                         amenities: [

//                             {
//                                 label: "ac",
//                                 value: "Air Conditioner",
//                             },
//                         ],
//                     }, {
//                         name: "gangphank",
//                         price: 520000,
//                         info: [
//                             {
//                                 label: "area",
//                                 value: "35",
//                             },
//                             {
//                                 label: "bed",
//                                 value: "3",
//                             },
//                             {
//                                 label: "capacity",
//                                 value: "6",
//                             },
//                         ],
//                         amenities: [
//                             {
//                                 label: "wifi",
//                                 value: "Wifi",
//                             },
//                             {
//                                 label: "bathtub",
//                                 value: "Bathtub",
//                             },
//                             {
//                                 label: "ac",
//                                 value: "Air Conditioner",
//                             },
//                         ],
//                     }, {
//                         name: "Normal Room",
//                         price: 210000,
//                         info: [
//                             {
//                                 label: "area",
//                                 value: "20",
//                             },
//                             {
//                                 label: "bed",
//                                 value: "1",
//                             },
//                             {
//                                 label: "capacity",
//                                 value: "1",
//                             },
//                         ],
//                         amenities: [
//                             {
//                                 label: "wifi",
//                                 value: "Wifi",
//                             },
//                             {
//                                 label: "ac",
//                                 value: "Air Conditioner",
//                             },
//                         ],
//                     },
//                 ]

//         },

//     ];





export default async function getHotelInfo() {
    let res = null;
    try {

        res = await axiosInstance.get("/mod/hotel/room_list");
        //console.log(`Message: ${res.data.message}- Role: ${res.data.role}`);
        //console.log(JSON.stringify(res.data, null, 2));

        //axiosInstance.defaults.headers.common["auth-token"] = res.headers["auth-token"];
      
    }
    catch (err) {
        if (err.response) {
            console.log(err.response.data.message);
            return { error: err.response.data.message };
        }
    }

    
    if (res != null) {


        roomList = res.data.message
        allAmenities = []
        // console.log("LIST",roomList)
        // allAmenities = new Map();

        // for (let i = 0; i < roomList.length; ++i) {
        //     for (let j = 0; j < roomList[i].roomList.length; ++j) {
        //         roomList[i].roomList[j].amenities.forEach(element => {
        //             allAmenities.set(element.label, element.value)
        //         });
        //     }
        // }

        // allAmenities = Array.from(allAmenities.entries(), ([key, value]) => ({ label: key, value: value }));

        // print("ALL:", allAmenities)
        return {
            roomList: roomList,
            amenitiesList: allAmenities
        }
    }
}