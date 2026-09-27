# 2. Requirements Definition

Requirements for the Coffee Bean Shopping Mall System, addressing SRS Section 2.

## 2.1 Functional Requirements

### Customer

- The shop has many customers, divided into guests and members.
- A guest can browse and search coffee beans, and becomes a member by signing up.
- A customer can search beans by name or filter them by origin, price, and roast level.
- A member logs in with an email and password, and can edit their name and phone number.
- A member can register multiple shipping addresses and set one of them as the default.
- A member can add a bean to the cart by choosing its size, grind, and quantity, and can change the quantity or remove the item.
- A member can order multiple beans at once, and can order the same bean repeatedly.
- When ordering, a member can pick a saved address or enter a new one.
- A member can view their order list, order details, and delivery status.
- A member can request to cancel an order. The cancellation is complete only after an administrator approves it.

### Administrator

- An administrator can register beans and edit their information.
- An administrator can adjust stock and change a bean's sales status (on sale, sold out, stopped).
- An administrator can view all orders, prepare shipments, and register the courier and tracking number.
- An administrator updates the delivery status.
- An administrator processes members' cancellation requests.

### Coffee Bean

- The shop sells many beans. Each bean has an origin, roast level, tasting notes, and description.
- Each bean is sold as multiple options by size and grind, and stock is managed per option.
- An option can add an extra price on top of the bean's base price.
- Bean prices change over time, so an order stores the bean name and price at the time of ordering.
- An option with no stock is shown as sold out and cannot be ordered.

### Order and Payment

- An order contains multiple order items.
- The order total is the sum of the item amounts plus the shipping fee.
- Payment is processed through an external payment gateway (PG).
- When a payment fails, the failure reason is recorded and the member can pay again, so one order can have multiple payment records.
- When a cancellation is approved, the payment is cancelled.

### Delivery

- An order is shipped in a single delivery. The courier, tracking number, and delivery status are recorded on the order.
- A member can track the delivery by its tracking number.

## 2.2 Non-functional Requirements

### Environment

- The system runs only on a local PC for the course demonstration and is not deployed to an external server.
- The front end is built with React (Vite), the back end with Django and Django REST Framework, and the database is SQLite.
- The runtime is Python 3.12 and Node.js 20 LTS. The system must install and run with the same steps on Windows and macOS.
- The UI must work correctly in the latest version of Chrome.
- The front end and back end exchange data only through a REST API in JSON.

### Security

- Passwords are never stored in plain text, only as hashes.
- Members authenticate with JWT tokens. Features that require login cannot be used without a token.
- When the access token expires, it is refreshed automatically with the refresh token so the member does not have to log in again.
- A member can view and edit only their own cart, addresses, and orders, and cannot access other members' data.
- Only administrator accounts can register or edit beans, change stock or sales status, process orders and deliveries, and approve cancellations.
- Payment method details such as card numbers are not stored. Only the transaction ID issued by the payment gateway is stored.
- After a payment completes, the server checks that the paid amount equals the order's final payment amount.
- Secrets and other sensitive settings are kept in the `.env` file and never committed to the repository.

### Data Integrity

- Creating an order and decreasing stock are processed in one transaction, so one is never applied without the other.
- Stock must never go below zero, even when several members order the last unit of the same option at the same time.
- The server checks again that a bean is not sold out or stopped before accepting an order, regardless of what the UI shows.
- Order status changes only along the defined sequence. For example, a cancelled order cannot move back to shipping.
- Member records with order history are protected from deletion.
- Changing a bean's information or price does not change existing orders.

### Performance

- On the local environment, bean lists, search results, and filter results must appear within 2 seconds.
- The bean list shows 20 beans per page.
- The system must run without noticeable delay on demo data of 100 beans and 50 members.

### Usability

- All UI text is in Korean. Prices are shown in KRW with thousands separators.
- Sold-out options are marked as sold out on the list and detail pages and cannot be added to the cart.
- When input is invalid or a request fails, a message explains what went wrong.

### Maintainability

- Python code is formatted with black and JavaScript code with prettier, and must pass oxlint.
- UI state uses only React's built-in `useState` and props, with no state management library.
- All API requests go through the single shared axios instance.
- Every change is made on a branch for an issue and merged into `main` through a pull request.
- Code, comments, and documents committed to the repository are written in English.
