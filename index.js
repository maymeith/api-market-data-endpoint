
// will use this one to call all the function 
const coinbase = require('./coinbase.js')

console.log(coinbase.getExchangeTrades('eth','btc'));
coinbase.getExchangeVolume('ETH','BTC').then(console.log);
coinbase.getLastRate('ETH','btc').then(console.log);
coinbase.getOrderBook('eth','BTC').then(console.log);


