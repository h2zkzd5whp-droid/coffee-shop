-- ========================================================
-- Coffee Bean Shopping Mall System
-- SQLite Physical Database Schema (DDL)
-- ========================================================

-- 1. Enable Foreign Key Constraints (disabled by default in SQLite sessions)
PRAGMA foreign_keys = ON;

-- --------------------------------------------------------
-- 2. User & Account Management (Log In, Sign Up, Manage Account)
-- --------------------------------------------------------

-- User master table
CREATE TABLE IF NOT EXISTS users (
    user_id         INTEGER PRIMARY KEY AUTOINCREMENT,
    email           TEXT NOT NULL UNIQUE,
    password_hash   TEXT NOT NULL,
    user_name       TEXT NOT NULL,
    phone_number    TEXT NOT NULL,
    role            TEXT NOT NULL DEFAULT 'MEMBER' CHECK (role IN ('MEMBER', 'ADMIN')),
    created_at      TEXT NOT NULL DEFAULT (DATETIME('now', 'localtime'))
);

-- User shipping addresses table (Select/Add/Edit Address)
CREATE TABLE IF NOT EXISTS user_addresses (
    address_id      INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id         INTEGER NOT NULL,
    recipient_name  TEXT NOT NULL,
    recipient_phone TEXT NOT NULL,
    zipcode         TEXT NOT NULL,
    base_address    TEXT NOT NULL,
    detail_address  TEXT,
    is_default      INTEGER NOT NULL DEFAULT 0 CHECK (is_default IN (0, 1)),
    created_at      TEXT NOT NULL DEFAULT (DATETIME('now', 'localtime')),
    FOREIGN KEY (user_id) REFERENCES users (user_id) ON DELETE CASCADE
);

-- --------------------------------------------------------
-- 3. Product Catalog & Inventory (Browse Coffee Beans, Manage Products)
-- --------------------------------------------------------

-- Coffee bean product master table
CREATE TABLE IF NOT EXISTS products (
    product_id      INTEGER PRIMARY KEY AUTOINCREMENT,
    name            TEXT NOT NULL,
    origin          TEXT NOT NULL,
    roast_level     TEXT NOT NULL,
    base_price      INTEGER NOT NULL CHECK (base_price >= 0),
    tasting_notes   TEXT,
    description     TEXT,
    sales_status    TEXT NOT NULL DEFAULT 'ON_SALE' CHECK (sales_status IN ('ON_SALE', 'SOLD_OUT', 'STOPPED')),
    created_at      TEXT NOT NULL DEFAULT (DATETIME('now', 'localtime'))
);

-- Product options and inventory table (weight size, grind type, stock)
CREATE TABLE IF NOT EXISTS product_options (
    option_id       INTEGER PRIMARY KEY AUTOINCREMENT,
    product_id      INTEGER NOT NULL,
    weight_size     TEXT NOT NULL,      -- e.g., '200g', '500g', '1kg'
    grind_type      TEXT NOT NULL DEFAULT 'WHOLE_BEAN', -- e.g., 'WHOLE_BEAN', 'HAND_DRIP', 'ESPRESSO'
    extra_price     INTEGER NOT NULL DEFAULT 0 CHECK (extra_price >= 0),
    stock_quantity  INTEGER NOT NULL DEFAULT 0 CHECK (stock_quantity >= 0),
    FOREIGN KEY (product_id) REFERENCES products (product_id) ON DELETE CASCADE,
    UNIQUE (product_id, weight_size, grind_type)
);

-- --------------------------------------------------------
-- 4. Shopping Cart (Manage Cart)
-- --------------------------------------------------------

CREATE TABLE IF NOT EXISTS cart_items (
    cart_item_id    INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id         INTEGER NOT NULL,
    option_id       INTEGER NOT NULL,
    quantity        INTEGER NOT NULL DEFAULT 1 CHECK (quantity > 0),
    created_at      TEXT NOT NULL DEFAULT (DATETIME('now', 'localtime')),
    FOREIGN KEY (user_id) REFERENCES users (user_id) ON DELETE CASCADE,
    FOREIGN KEY (option_id) REFERENCES product_options (option_id) ON DELETE CASCADE,
    UNIQUE (user_id, option_id)
);

-- --------------------------------------------------------
-- 5. Order Master & Order Items (Place Order, Manage Orders)
-- --------------------------------------------------------

-- Order master table (includes fulfillment tracking and delivery status)
CREATE TABLE IF NOT EXISTS orders (
    order_id            TEXT PRIMARY KEY,   -- UUID or business identifier (e.g., 'ORD-2026-X')
    user_id             INTEGER NOT NULL,
    order_status        TEXT NOT NULL DEFAULT 'PENDING' CHECK (
        order_status IN ('PENDING', 'PAID', 'PREPARING', 'SHIPPED', 'DELIVERED', 'CANCEL_REQUESTED', 'CANCELLED')
    ),
    total_product_amt   INTEGER NOT NULL CHECK (total_product_amt >= 0),
    shipping_fee        INTEGER NOT NULL DEFAULT 0 CHECK (shipping_fee >= 0),
    final_payment_amt   INTEGER NOT NULL CHECK (final_payment_amt >= 0),
    recipient_name      TEXT NOT NULL,
    recipient_phone     TEXT NOT NULL,
    shipping_address    TEXT NOT NULL,      -- Snapshot of delivery address at time of purchase
    courier_name        TEXT,               -- Courier company name (NULL prior to dispatch)
    tracking_number     TEXT,               -- Shipment tracking number (NULL prior to dispatch)
    ordered_at          TEXT NOT NULL DEFAULT (DATETIME('now', 'localtime')),
    shipped_at          TEXT,               -- Dispatched timestamp
    delivered_at        TEXT,               -- Delivered timestamp
    FOREIGN KEY (user_id) REFERENCES users (user_id)
);

-- Order items table (immutable snapshot at purchase time)
CREATE TABLE IF NOT EXISTS order_items (
    order_item_id   INTEGER PRIMARY KEY AUTOINCREMENT,
    order_id        TEXT NOT NULL,
    option_id       INTEGER NOT NULL,
    product_name    TEXT NOT NULL,          -- Snapshot product name
    weight_size     TEXT NOT NULL,
    grind_type      TEXT NOT NULL,
    order_price     INTEGER NOT NULL CHECK (order_price >= 0),
    quantity        INTEGER NOT NULL CHECK (quantity > 0),
    FOREIGN KEY (order_id) REFERENCES orders (order_id) ON DELETE CASCADE,
    FOREIGN KEY (option_id) REFERENCES product_options (option_id)
);

-- --------------------------------------------------------
-- 6. Payment Transactions (Make Payment, Retry Payment, Payment Gateway)
-- --------------------------------------------------------

CREATE TABLE IF NOT EXISTS payments (
    payment_id      INTEGER PRIMARY KEY AUTOINCREMENT,
    order_id        TEXT NOT NULL,
    pg_provider     TEXT NOT NULL,          -- e.g., 'TOSS', 'INICIS', 'NAVERPAY'
    pg_tid          TEXT UNIQUE,            -- Gateway transaction ID
    payment_method  TEXT NOT NULL,          -- 'CARD', 'EASY_PAY', 'TRANSFER'
    payment_status  TEXT NOT NULL DEFAULT 'READY' CHECK (
        payment_status IN ('READY', 'SUCCESS', 'FAILED', 'CANCELLED')
    ),
    paid_amount     INTEGER NOT NULL CHECK (paid_amount >= 0),
    failure_reason  TEXT,                   -- Diagnostic reason if failed
    approved_at     TEXT,                   -- Gateway approval timestamp
    FOREIGN KEY (order_id) REFERENCES orders (order_id)
);

-- --------------------------------------------------------
-- 7. Performance Indexes (Lookups and Filter Optimization)
-- --------------------------------------------------------

-- Product search and multi-attribute filtering indexes
CREATE INDEX IF NOT EXISTS idx_products_name ON products (name);
CREATE INDEX IF NOT EXISTS idx_products_filter ON products (origin, roast_level, base_price);

-- User activity and order lookup indexes
CREATE INDEX IF NOT EXISTS idx_user_addresses_user_id ON user_addresses (user_id);
CREATE INDEX IF NOT EXISTS idx_cart_items_user_id ON cart_items (user_id);
CREATE INDEX IF NOT EXISTS idx_orders_user_id ON orders (user_id);
CREATE INDEX IF NOT EXISTS idx_orders_status_ordered_at ON orders (order_status, ordered_at DESC);
CREATE INDEX IF NOT EXISTS idx_orders_tracking ON orders (tracking_number);
CREATE INDEX IF NOT EXISTS idx_order_items_order_id ON order_items (order_id);
CREATE INDEX IF NOT EXISTS idx_payments_order_id ON payments (order_id);
