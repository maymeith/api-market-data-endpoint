# API Market Data Endpoint
this is Junior Developer Test 

### Section 1: Mini Project
1. **What is the REST API limit of Coinbase  
Answer:** Public Endpoints We throttle public endpoints by IP: 10 requests per second, up to 15 requests per second in bursts. Some endpoints may have custom rate limits. Private Endpoints We throttle private endpoints by profile ID: 15 requests per second, up to 30 requests per second in bursts. Some endpoints may have custom rate limits.

2. **What is the base URL of Coinbase to connect via REST API endpoint?  
Answer:** https://api.exchange.coinbase.com

3. **What is the difference between public and private endpoints?  
Answer:** Private endpoints Need API Key to access (DO POST/GET mainly it because of security matter ).  Public Endpoint doesn't require API KEY (mostly perfrom GET action)   Private endpoints are available for order management and account management. Every private request must be signed using the described authentication scheme. Private endpoints require authentication using your Coinbase Exchange API key. 
4. **What if your team lead ask you to turn this code to library for another NodeJS project as
there will be more requirement to integrate with other exchages, how would you design
it? You could just write the idea o README file.**

## Installation

```bash
npm install axios
```

## Usage
```javascript

const coinbase = require('./coinbase.js')

// baseCurrency, quoteCurrency need to be string
coinbase.getExchangeTrades(baseCurrency,quoteCurrency); //return Promise { <pending> }
coinbase.getExchangeVolume(baseCurrency,quoteCurrency); //return Promise { <pending> }
coinbase.getLastRate(baseCurrency,quoteCurrency); //return Promise { <pending> }
coinbase.getOrderBook(baseCurrency,quoteCurrency); //return Promise { <pending> }



coinbase.getExchangeTrades('eth','btc').then(console.log);
    /*  
    base_currency: 'ETH',
    quote_currency: 'BTC',
    base_volume: '0.30000000',
    quote_volume: 0.022296, this one is size*price
    side: 'buy',
    time: '2022-11-14T00:25:42.502778Z'
    */

coinbase.getExchangeVolume('ETH','BTC').then(console.log);
    /*
    base_currency: 'ETH',
    quote_currency: 'BTC',
    base_volume: '2378.95282836', volume
    quote_volume: '100395.18942082' volume_30day**not sure it correct 
    */
coinbase.getLastRate('ETH','btc').then(console.log);
    /*
    0.07444 // price
    */
coinbase.getOrderBook('eth','BTC').then(console.log);
    /*
     bids: [
    { price: '0.07439', quantity: '5.63919151' },
    { price: '0.07437', quantity: '8.3' },
    { price: '0.07436', quantity: '7.15273277' },
    { price: '0.07434', quantity: '0.1503824' },
    { price: '0.07433', quantity: '0.33517947' },
    { price: '0.07431', quantity: '0.50066404' },
    ... 3120 more items
    asks: [
    { price: '0.07445', quantity: '0.35859792' },
    { price: '0.07446', quantity: '7.52282144' },
    { price: '0.07447', quantity: '5.6563737' },
    { price: '0.07451', quantity: '7.57673866' },
    { price: '0.07454', quantity: '6.48495309' },
    ... 2673 more items
    ]
    */
```
## Reference
[Conventional Commits](https://www.conventionalcommits.org)

[MakeReadme](https://www.makeareadme.com)