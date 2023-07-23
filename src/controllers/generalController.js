import checkLegit from "../models/general/checkLegit"
import login from "../models/general/login"
export default async function GController (type, ...payload) {
    switch (type) {
        case 'CHECKLEGIT' : {
            return await checkLegit(payload)
        }

        case 'FORGOTPASSWORD' : {

        }

        case 'CUSTOMERREGISTER' : {
        
        }

        case 'MODERATORREGISTER' : {
            
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
