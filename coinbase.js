// this will be where all the funtion would be
const axios = require('axios');

const getExchangeTrades = async (baseCurrency, quoteCurrency) => {
    const url = `https://api.exchange.coinbase.com/products/${baseCurrency.toUpperCase()}-${quoteCurrency.toUpperCase()}/trades?limit=1`;
    const response = await axios.get(url);
    const { data } = response;
    
    return data.map(item => ({
        base_currency: baseCurrency.toUpperCase(),
        quote_currency: quoteCurrency.toUpperCase(),
        base_volume: item.size,
        quote_volume: item.size * item.price,
        side: item.side,
        time: item.time,  
    }));
};

const getExchangeVolume = async (baseCurrency, quoteCurrency) => {
    const url = `https://api.exchange.coinbase.com/products/${baseCurrency.toUpperCase()}-${quoteCurrency.toUpperCase()}/stats`;
    const response = await axios.get(url);
    const { data } = response;
    
    return {
        base_currency: baseCurrency.toUpperCase(),
        quote_currency: quoteCurrency.toUpperCase(),  
        base_volume: data.volume,
        quote_volume: data.volume_30day,
       
    };
};

const getLastRate = async (baseCurrency, quoteCurrency) => {
    const url = `https://api.exchange.coinbase.com/products/${baseCurrency.toUpperCase()}-${quoteCurrency.toUpperCase()}/ticker`;
    const response = await axios.get(url);
    const { data } = response;
    
    return data.price;
};

const getOrderBook = async (baseCurrency, quoteCurrency) => {
    const url = `https://api.exchange.coinbase.com/products/${baseCurrency.toUpperCase()}-${quoteCurrency.toUpperCase()}/book?level=2`;
    const response = await axios.get(url);
    const { data } = response;
    const addPropertyNameBids = data.bids.map((row) =>{
        return { price : row[0], quantity : row[1] }
    });
    const addPropertyNameAsks = data.asks.map((row) =>{
        return { price : row[0], quantity : row[1] }
    });

    return {
        bids: addPropertyNameBids,
        asks: addPropertyNameAsks,
    };
};


module.exports = {  
    getExchangeTrades,
    getExchangeVolume,
    getLastRate,
    getOrderBook,
    };