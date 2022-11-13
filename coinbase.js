// this will be where all the funtion would be
const axios = require('axios');
/*
Create a “getExchangeTrades” function to retrieve the latest exchange trades of specific
trading pairs. The function should have input parameter “baseCurrency” and
“quoteCurrency” and return output format as the example object;
The baseCurrency and QuoteCurrency input can be capital or lowercase but the output result
the format should always show base_currency and quote_currency in capital letters.
The example shows the result from input baseCurrency in as “ETH” and quoteCurrency as
“BTC”
*/
const getExchangeTrades = async (baseCurrency, quoteCurrency) => {
    const url = `https://api.exchange.coinbase.com/products/${baseCurrency}-${quoteCurrency}/trades`;
    const response = await axios.get(url);
    const { data } = response;
   
    return data.map(item => ({
        time: item.time,
        trade_id: item.trade_id,
        price: item.price,
        size: item.size,
        side: item.side,
    }));
};
/*
Create a “getExchangeVolume” function to retrieve the last 24hr volume data of specific
trading pairs. The function should have input parameter “baseCurrency” and
“quoteCurrency” and return output format as the example object;
The baseCurrency and QuoteCurrency input can be capital or lowercase but the output result
the format should always show base_currency and quote_currency in capital letters.
The example shows the result from input baseCurrency as “ETH” and quoteCurrency as “BTC”
*/
const getExchangeVolume = async (baseCurrency, quoteCurrency) => {
    const url = `https://api.pro.coinbase.com/products/${baseCurrency}-${quoteCurrency}/stats`;
    const response = await axios.get(url);
    const { data } = response;
    
    return {
        volume: data.volume,
        open: data.open,
        high: data.high,
        low: data.low,
    };
};

/*
Create a “getLastRate” function to retrieve the last rate data of specific trading pairs. The
function should have input parameters “base currency” and “quoteCurrency” and return
output as a number;
The example shows the result from input baseCurrency as “ETH” and quoteCurrency as “BTC”
*/
const getLastRate = async (baseCurrency, quoteCurrency) => {
    const url = `https://api.pro.coinbase.com/products/${baseCurrency}-${quoteCurrency}/ticker`;
    const response = await axios.get(url);
    const { data } = response;
    
    return data.price;
};

/*
Create a “getOrderBook” function to retrieve the last 24hr volume data of specific trading
pairs. The function should have input parameters “baseCurrency” and “quoteCurrency” and
return output as the example object;
Bids should be ordered from highest price to lowest price.
Asks should be ordered from lowest price to highest price.
The example shows the result from input baseCurrency as “ETH” and quoteCurrency as “BTC”
*/


const getOrderBook = async (baseCurrency, quoteCurrency) => {
    const url = `https://api.pro.coinbase.com/products/${baseCurrency}-${quoteCurrency}/book`;
    const response = await axios.get(url);
    const { data } = response;
    
    return {
        bids: data.bids,
        asks: data.asks,
    };
};