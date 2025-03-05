class Order {
    static orderCounter = 0;
    
    constructor(orderType, ticker, quantity, price) {
        this.id = Order.orderCounter++;
        this.orderType = orderType;
        this.ticker = ticker;
        this.quantity = quantity;
        this.price = price;
        this.timestamp = Date.now();
    }
}

class StockExchange {
    constructor() {
        this.buyOrders = []; 
        this.sellOrders = []; 
    }

    addOrder(orderType, ticker, quantity, price) {
        const order = new Order(orderType, ticker, quantity, price);
        
        if (orderType === "Buy") {
            this.buyOrders.push(order);
            this.buyOrders.sort((a, b) => b.price - a.price); 
        } else {
            this.sellOrders.push(order);
            this.sellOrders.sort((a, b) => a.price - b.price); 
        }
        this.matchOrder();
    }

    matchOrder() {
        while (this.buyOrders.length > 0 && this.sellOrders.length > 0) {
            let buyOrder = this.buyOrders[0];
            let sellOrder = this.sellOrders[0];
            
            if (buyOrder.price >= sellOrder.price) {
                const matchedQuantity = Math.min(buyOrder.quantity, sellOrder.quantity);
                
                console.log(`Matched ${matchedQuantity} shares of ${buyOrder.ticker} at $${sellOrder.price}`);
                
                buyOrder.quantity -= matchedQuantity;
                sellOrder.quantity -= matchedQuantity;
                
                if (buyOrder.quantity === 0) this.buyOrders.shift();
                if (sellOrder.quantity === 0) this.sellOrders.shift();
            } else {
                break;
            }
        }
    }
}

function simulateTrading(exchange, numOrders = 100) {
    const tickers = Array.from({ length: 1024 }, (_, i) => `STK${i + 1}`);
    
    for (let i = 0; i < numOrders; i++) {
        const orderType = Math.random() < 0.5 ? "Buy" : "Sell";
        const ticker = tickers[Math.floor(Math.random() * tickers.length)];
        const quantity = Math.floor(Math.random() * 100) + 1;
        const price = (Math.random() * (500 - 10) + 10).toFixed(2);
        
        exchange.addOrder(orderType, ticker, quantity, parseFloat(price));
    }
}

const exchange = new StockExchange();
simulateTrading(exchange);
