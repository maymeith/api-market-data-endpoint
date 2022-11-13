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
    const url = `https://api.binance.com/api/v3/trades?limit=1&symbol=${baseCurrency}${quoteCurrency}`;
    const response = await axios.get(url);
    const { data } = response;
    
    return data.map(item => ({
        base_currency: baseCurrency,
        quote_currency: quoteCurrency,
        base_volume: item.qty,
        quote_volume: item.quoteQty,
        side: item.isBuyerMaker,
        time: new Date(item.time),
    }));

};

getExchangeTrades('ETH','BTC').then((result)=>{ console.log(result)});


/*
Create a “getExchangeVolume” function to retrieve the last 24hr volume data of specific
trading pairs. The function should have input parameter “baseCurrency” and
“quoteCurrency” and return output format as the example object;
The baseCurrency and QuoteCurrency input can be capital or lowercase but the output result
the format should always show base_currency and quote_currency in capital letters.
The example shows the result from input baseCurrency as “ETH” and quoteCurrency as “BTC”
*/


/*
Create a “getLastRate” function to retrieve the last rate data of specific trading pairs. The
function should have input parameters “base currency” and “quoteCurrency” and return
output as a number;
The example shows the result from input baseCurrency as “ETH” and quoteCurrency as “BTC”
*/

/*
Create a “getOrderBook” function to retrieve the last 24hr volume data of specific trading
pairs. The function should have input parameters “baseCurrency” and “quoteCurrency” and
return output as the example object;
Bids should be ordered from highest price to lowest price.
Asks should be ordered from lowest price to highest price.
The example shows the result from input baseCurrency as “ETH” and quoteCurrency as “BTC”
*/


