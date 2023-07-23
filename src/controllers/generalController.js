import checkLegit from "../models/general/checkLegit"
import login from "../models/general/login"
import register from "../models/general/register"

export default async function GController (type, ...payload) {
    switch (type) {
        case 'CHECKLEGIT' : {
            return await checkLegit(payload)
        }

        case 'FORGOTPASSWORD' : {

        }

        case 'CUSTOMERREGISTER' : {
            const [username, password, email, role, full_name] = payload;
            return await register({username, password, email, role, full_name});
        }

        case 'MODERATORREGISTER' : {
            const [username, password, email, role, hotel_name, address, description, owner_name] = payload;
            return await register({username, password, email, role, hotel_name, address, description, owner_name});
        }

        case 'LOGIN':
        {
            // destructure payload
            const [username, password] = payload;
            console.log(`[INFO] Login username: ${username} - password: ${password}`);
            const result = await login(username, password);
            console.log(`[INFO] Login result: ${JSON.stringify(result)}`);
            return result;
        }

        default : {
            
        }
    }
}
