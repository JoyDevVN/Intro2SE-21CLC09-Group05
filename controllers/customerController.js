import getHotelList from "../models/customer/getHotelList";
import getHotelInformation from "../models/customer/getHotelInformation";
import getReservationList from "../models/customer/getReservationList";
import getNotificationList from "../models/customer/getNotificationList";
import getLocationList from "../models/customer/getLocationList";
import getRoomInformation from "../models/customer/getRoomInformation";
import getPaymentInformation from "../models/customer/getPaymentInformation";
import getUserInformation from "../models/customer/getUserInformation";
import getDetailReservation from "../models/customer/getDetailReservation";
import getFavoriteList from "../models/customer/getFavoriteList";

import sendPayment from "../models/customer/sendPayment";
import sendRating from "../models/customer/sendRating";
import sendCancel from "../models/customer/sendCancel";
import sendReport from "../models/customer/sendReport";
import sendEdit from "../models/customer/sendEdit";
import sendTopup from "../models/customer/sendTopup";

import filterHotel from "../models/customer/filterHotel";

export default async function CController (type, ...payload) {
    // console.log('[payload]' , payload)

    switch (type) {
        case 'GETHOTELLIST' : {
            const hotelList = await getHotelList()
            return hotelList
        }

        case 'GETLOCATIONLIST' : {
            const locationList = await getLocationList()
            return locationList
        }

        case 'GETHOTELINFORMATION' : {
            const hotelInformation = await getHotelInformation(payload)
            return hotelInformation
        }

        case 'GETROOMINFORMATION' : {
            const roomInformation = await getRoomInformation(payload)
            return roomInformation
        }

        case 'GETPAYMENTINFORMATION' : {
            const paymentInformation = await getPaymentInformation(payload)
            return paymentInformation
        }
        case 'SENDPAYMENT' : {
            const payment = await sendPayment(payload)
            return payment
        }

        case 'GETRESERVATIONLIST' : {
            const reservationList = await getReservationList()
            return reservationList
        }
        case 'SENDRATING' : {
            const rating = await sendRating(payload)
            return rating
        }
        case 'SENDCANCEL' : {
            const cancel = await sendCancel(payload)
            return cancel
        }
        case 'SENDREPORT' : {
            const report = await sendReport(payload)
            return report
        }
        // case 'GETDETAILRESERVATION' : {
        //     const reservationInformation = await getDetailReservation()
        //     return reservationInformation
        // }

        case 'GETNOTIFICATIONLIST' : {
            const notificationList = await getNotificationList()
            return notificationList
        }

        case 'GETUSERINFORMATION' : {
            const userInformation = await getUserInformation()
            return userInformation
        }
        case 'SENDEDIT' : {
            const edit = await sendEdit(payload)
            return edit
        }
        case 'SENDTOPUP' : {
            const topup = await sendTopup(payload)
            return topup
        }

        case 'GETFAVORITELIST' : {
            const favoriteList = await getFavoriteList()
            return favoriteList
        }
        /// FILTER 
        case 'FILTER' : {
            const showHotelList = await filterHotel(payload)
            return showHotelList
        }

        default : {
            
        }
    }
}