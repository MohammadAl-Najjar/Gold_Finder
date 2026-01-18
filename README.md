# Real-Time Gold Pricing Simulator 📉📈

A Node.js backend application designed to simulate live market fluctuations and handle buy orders. This project demonstrates the implementation of **Event-Driven Architecture** and **Server-Sent Events (SSE)** to handle data flow without the overhead of client-side polling.

## Key Features

* **Real-Time Data Streaming:** Uses **Server-Sent Events (SSE)** to push simulated gold price updates to the client every few seconds.
* **Event-Driven Logic:** Utilizes Node.js **Event Emitters** to decouple price generation from transaction logic.
* **Asynchronous Logging:** "Purchases" are processed asynchronously and persisted to a local `purchases.txt` file (simulating a database log).
* **RESTful Interaction:** Simple API endpoints to initiate connections and trigger buy orders.

## Tech Stack

* **Runtime:** Node.js
* **Core Modules:** `events`, `path`, `fs` (File System), `http` 
* **Concepts:** HTTP Streams, Event Loop, File I/O, REST APIs

## Getting Started

Follow these steps to run the simulator locally.

### Prerequisites
* [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/MohammadAl-Najjar/Gold_Finder.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd Gold_Finder
    ```

### Running the Server

Start the application:

```bash
node server.js
