const notificationList = [
    {
        id: 1, // ID of the notification
        id_reservation: 123, // ID CỦA CÁI ĐƠN ĐÓ
        status: 'Accepted', // 'Accepted' or 'Cancelled' ...
        message: 'Booking successfully', // Message
        time: '5 minutes ago', // ¯\_(ツ)_/¯
    },
    {
        id: 2,
        id_reservation: 123, // ID CỦA CÁI ĐƠN ĐÓ
        status: 'Accept',
        message: 'Bixcuit',
        time: '5 minutes ago',
    },
    {
        id: 3,
        id_reservation: 123, // ID CỦA CÁI ĐƠN ĐÓ
        status: 'Accept',
        message: 'Anis',
        time: '5 minutes ago',
    },
    {
        id: 4,
        id_reservation: 123, // ID CỦA CÁI ĐƠN ĐÓ
        status: 'Accept',
        message: 'Truro',
        time: '5 minutes ago',
    },
    {
        id: 5,
        id_reservation: 123, // ID CỦA CÁI ĐƠN ĐÓ
        status: 'Accept',
        message: 'HCMUS',
        time: '5 minutes ago',
    },
    {
        id: 6,
        id_reservation: 123, // ID CỦA CÁI ĐƠN ĐÓ
        status: 'Accept',
        message: 'HCMUS',
        time: '5 minutes ago',
    },
    {
        id: 7,
        id_reservation: 123, // ID CỦA CÁI ĐƠN ĐÓ
        status: 'Accept',
        message: 'HCMUS',
        time: '5 minutes ago',
    },
    {
        id: 8,
        id_reservation: 123, // ID CỦA CÁI ĐƠN ĐÓ
        status: 'Accept',
        message: 'HCMUS',
        time: '5 minutes ago',
    },
    {
        id: 9,
        id_reservation: 123, // ID CỦA CÁI ĐƠN ĐÓ
        status: 'Accept',
        message: 'HCMUS',
        time: '5 minutes ago',
    },

]

export default async function getNotificationList() {
    return notificationList
}