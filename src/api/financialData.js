import axios from "axios";

const API_URL =   "https://financialmodelingprep.com/api/v3/income-statement/AAPL?period=annual&apikey=TwQh8omWGMYnzes71lM3cFfrkn0VrfaY"

export const getFinancialData = async () => {
    const response = await axios.get(API_URL);
    return response.data;
}