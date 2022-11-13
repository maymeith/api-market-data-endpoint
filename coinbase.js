// this will be where all the funtion would be
const axios = require('axios');

const getExchangeTrades = async (baseCurrency, quoteCurrency) => {
    const url = `https://api.exchange.coinbase.com/products/${baseCurrency}-${quoteCurrency}/trades?limit=1`;
    const response = await axios.get(url);
    const { data } = response;
    
    
    return data.map(item => ({
        base_currency: baseCurrency,
        quote_currency: quoteCurrency,
        base_volume: undefined,
        quote_volume: undefined,
        side: item.side,
        time: item.time,  
    }));
};

const getExchangeVolume = async (baseCurrency, quoteCurrency) => {
    const url = `https://api.exchange.coinbase.com/products/${baseCurrency}-${quoteCurrency}/stats`;
    const response = await axios.get(url);
    const { data } = response;
    
    return {
        base_currency: baseCurrency,
        quote_currency: quoteCurrency,  
        base_volume: data.volume,
        quote_volume: undefined,
       
    };
};

const getLastRate = async (baseCurrency, quoteCurrency) => {
    const url = `https://api.exchange.coinbase.com/products/${baseCurrency}-${quoteCurrency}/ticker`;
    const response = await axios.get(url);
    const { data } = response;
    
    return data.price;
};

const getOrderBook = async (baseCurrency, quoteCurrency) => {
    const url = `https://api.exchange.coinbase.com/products/${baseCurrency}-${quoteCurrency}/book?level=3`;
    const response = await axios.get(url);
    const { data } = response;
    
    return {
        bids: data.bids,
        asks: data.asks,
    };
};


