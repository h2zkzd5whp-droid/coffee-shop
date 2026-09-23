# 4.1 Class Diagram

## 1. Overview

This document specifies the UML Class Diagram for the back-end system of the **Coffee Bean Shopping Mall System** (`<Coffee Bean Shopping Mall System>`), addressing SRS Section 4.1.

The domain architecture directly maps to the relational schema defined in [backend/schema.sql](../../backend/schema.sql) and the user interactions defined in the front-end use case diagram [docs/frontend/usecase-diagram.drawio.svg](../frontend/usecase-diagram.drawio.svg).

```mermaid
classDiagram
    direction TB

    class User {
        -int userId
        -String email
        -String passwordHash
        -String userName
        -String phoneNumber
        -Role role
        -DateTime createdAt
        +register() bool
        +login(String password) bool
        +updateProfile(String name, String phone)
        +changePassword(String oldPw, String newPw) bool
    }

    class UserAddress {
        -int addressId
        -String recipientName
        -String recipientPhone
        -String zipcode
        -String baseAddress
        -String detailAddress
        -bool isDefault
        -DateTime createdAt
        +setDefault()
        +updateAddress(...)
    }

    class Product {
        -int productId
        -String name
        -String origin
        -String roastLevel
        -int basePrice
        -String tastingNotes
        -String description
        -SalesStatus salesStatus
        -DateTime createdAt
        +updateInfo(...)
        +changeSalesStatus(SalesStatus status)
        +calculatePrice(ProductOption option) int
    }

    class ProductOption {
        -int optionId
        -String weightSize
        -GrindType grindType
        -int extraPrice
        -int stockQuantity
        +decreaseStock(int quantity) bool
        +increaseStock(int quantity)
        +isAvailable(int quantity) bool
    }

    class CartItem {
        -int cartItemId
        -int quantity
        -DateTime createdAt
        +updateQuantity(int quantity)
        +getSubtotal() int
    }

    class Order {
        -String orderId
        -OrderStatus orderStatus
        -int totalProductAmt
        -int shippingFee
        -int finalPaymentAmt
        -String recipientName
        -String recipientPhone
        -String shippingAddress
        -String courierName
        -String trackingNumber
        -DateTime orderedAt
        -DateTime shippedAt
        -DateTime deliveredAt
        +createOrder(...) Order
        +requestCancellation() bool
        +processCancellation(bool approved) bool
        +registerTracking(String courier, String trackingNo)
        +markAsDelivered()
        +updateStatus(OrderStatus newStatus)
        +calculateTotal() int
    }

    class OrderItem {
        -int orderItemId
        -String productName
        -String weightSize
        -String grindType
        -int orderPrice
        -int quantity
        +calculateSubtotal() int
    }

    class Payment {
        -int paymentId
        -String pgProvider
        -String pgTid
        -PaymentMethod paymentMethod
        -PaymentStatus paymentStatus
        -int paidAmount
        -String failureReason
        -DateTime approvedAt
        +processPayment(String pgTid) bool
        +cancelPayment(String reason) bool
    }

    User "1" *-- "0..*" UserAddress : owns
    User "1" --> "0..*" CartItem : manages
    User "1" --> "0..*" Order : places

    Product "1" *-- "1..*" ProductOption : has
    ProductOption "1" <-- "0..*" CartItem : selects
    ProductOption "1" <-- "0..*" OrderItem : refers

    Order "1" *-- "1..*" OrderItem : contains
    Order "1" *-- "0..*" Payment : executes
```

---

## 2. Enumerations (Domain Types)

| Enum Name | Values | Description |
|-----------|--------|-------------|
| `Role` | `MEMBER`, `ADMIN` | User access privilege levels |
| `SalesStatus` | `ON_SALE`, `SOLD_OUT`, `STOPPED` | Product sales availability |
| `GrindType` | `WHOLE_BEAN`, `HAND_DRIP`, `ESPRESSO` | Coffee bean grind options |
| `OrderStatus` | `PENDING`, `PAID`, `PREPARING`, `SHIPPED`, `DELIVERED`, `CANCEL_REQUESTED`, `CANCELLED` | Order lifecycle states including delivery and cancellation |
| `PaymentStatus` | `READY`, `SUCCESS`, `FAILED`, `CANCELLED` | Payment transaction lifecycle |
| `PaymentMethod` | `CARD`, `EASY_PAY`, `TRANSFER` | Supported payment providers/methods |

---

## 3. Traceability Matrix

| Use Case (from `usecase-diagram.drawio.svg`) | Actor | Primary Class | Back-end DB Table |
|---------------------------------------------|-------|---------------|-------------------|
| Log In, Sign Up, Manage Account | Guest / Member | `User`, `UserAddress` | `users`, `user_addresses` |
| Browse Coffee Beans, Filter, View Details | Guest / Member | `Product`, `ProductOption` | `products`, `product_options` |
| Manage Cart (Add, View, Change, Remove) | Customer (Guest / Member) | `CartItem` | `cart_items` |
| Place Order, Review Order | Member | `Order`, `OrderItem` | `orders`, `order_items` |
| Make Payment, Retry Payment | Member / PG | `Payment` | `payments` |
| Manage My Orders, Track Delivery, Cancel Order | Member | `Order` | `orders` |
| Manage Products (Register, Stock, Status) | Administrator | `Product`, `ProductOption` | `products`, `product_options` |
| Manage Orders (View, Prepare Shipment, Update Delivery Status) | Administrator | `Order` | `orders` |
| Process Cancellation | Administrator | `Order`, `Payment` | `orders`, `payments` |
