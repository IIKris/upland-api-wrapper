import axios from 'axios';

/**
 * Public Upland API.
 */
class PublicAPI {

    /**
     * Method to check if the Upland API is under maintenance.
     * 
     * @returns {Promise<boolean>} A Promise that resolves to a boolean indicating if the Upland API is under maintenance.
     */
    public static async isMaintenance(): Promise<boolean> {
        try {
            const response = await axios.get('https://api.prod.upland.me/api/settings/maintenance');
            return response.data.is_under_maintenance;
        } catch (error) {
            throw new Error(String(error));
        }
    }
}

export default PublicAPI;