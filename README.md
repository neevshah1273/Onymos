# Stock Trading Engine

## Overview

This project implements a real-time stock trading engine that matches buy and sell orders efficiently. The system ensures that buy orders are executed when the bid price meets or exceeds the lowest available sell price. It is designed to handle concurrent transactions without race conditions.

## Features

- Supports 1,024 different stock tickers.
- Uses an efficient **O(n) order matching** algorithm.
- Implements **Buy** and **Sell** order processing.
- Uses **heap-based priority sorting** for efficient order execution.
- Simulates real-time trading with randomly generated transactions.

## Technologies Used

- **JavaScript** (ES6+)
- **Node.js** (For running the script, optional)

## Installation & Usage

### Prerequisites

- Ensure you have **Node.js** installed (optional, for running the script).

### Running the Trading Engine

1. Clone this repository:
   ```sh
   git clone https://github.com/your-repo/stock-trading-engine.git
   cd stock-trading-engine
   ```
2. Run the JavaScript file:
   ```sh
   node tradingEngine.js
   ```
3. The program will simulate **buy and sell orders** and print matched transactions in real-time.

## Code Structure

### `Order` Class

Represents an individual stock order with the following attributes:

- **orderType** (`Buy` or `Sell`)
- **ticker** (Stock symbol)
- **quantity** (Number of shares)
- **price** (Price per share)
- **timestamp** (Time of order placement)

### `StockExchange` Class

Manages the stock order book and matches buy/sell orders efficiently:

- Maintains **buy orders** (sorted by highest price)
- Maintains **sell orders** (sorted by lowest price)
- Executes trades based on price conditions

### `simulateTrading(exchange, numOrders)`

Simulates real-time trading with randomly generated orders.

## Example Output

```
Matched 50 shares of STK200 at $320.75
Matched 20 shares of STK15 at $115.30
Matched 30 shares of STK900 at $250.00
```

## Author

[Neev Shah](https://github.com/neevshah1273)

