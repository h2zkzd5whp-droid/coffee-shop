-- ========================================================
-- 원두 쇼핑몰 시스템 (Coffee Bean Mall Shopping System)
-- SQLite 전용 물리 데이터베이스 스키마 (DDL)
-- ========================================================

-- 1. 외래키 제약조건 활성화 (SQLite 세션 기본값 OFF 해제)
PRAGMA foreign_keys = ON;

-- --------------------------------------------------------
-- 2. 회원 및 계정 관리 (Log In, Sign Up, Manage Account)
-- --------------------------------------------------------

-- 회원 마스터 테이블
CREATE TABLE IF NOT EXISTS users (
    user_id         INTEGER PRIMARY KEY AUTOINCREMENT,
    email           TEXT NOT NULL UNIQUE,
    password_hash   TEXT NOT NULL,
    user_name       TEXT NOT NULL,
    phone_number    TEXT NOT NULL,
    role            TEXT NOT NULL DEFAULT 'MEMBER' CHECK (role IN ('MEMBER', 'ADMIN')),
    created_at      TEXT NOT NULL DEFAULT (DATETIME('now', 'localtime'))
);

-- 회원 배송지 테이블 (Select/Add/Edit Address)
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
-- 3. 상품 카탈로그 및 재고 관리 (Browse Coffee Beans, Manage Products)
-- --------------------------------------------------------

-- 원두 마스터 테이블
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

-- 원두 옵션 및 재고 테이블 (용량, 분쇄도, 재고)
CREATE TABLE IF NOT EXISTS product_options (
    option_id       INTEGER PRIMARY KEY AUTOINCREMENT,
    product_id      INTEGER NOT NULL,
    weight_size     TEXT NOT NULL,      -- 예: '200g', '500g', '1kg'
    grind_type      TEXT NOT NULL DEFAULT 'WHOLE_BEAN', -- 예: 'WHOLE_BEAN', 'HAND_DRIP', 'ESPRESSO'
    extra_price     INTEGER NOT NULL DEFAULT 0 CHECK (extra_price >= 0),
    stock_quantity  INTEGER NOT NULL DEFAULT 0 CHECK (stock_quantity >= 0),
    FOREIGN KEY (product_id) REFERENCES products (product_id) ON DELETE CASCADE,
    UNIQUE (product_id, weight_size, grind_type)
);

-- --------------------------------------------------------
-- 4. 장바구니 (Manage Cart)
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
-- 5. 주문 마스터 및 주문 상세 (Place Order, Manage Orders)
-- --------------------------------------------------------

-- 주문 마스터 테이블
CREATE TABLE IF NOT EXISTS orders (
    order_id            TEXT PRIMARY KEY,   -- UUID 또는 비즈니스 식별 번호 (예: 'ORD-2026-X')
    user_id             INTEGER NOT NULL,
    order_status        TEXT NOT NULL DEFAULT 'PENDING' CHECK (
        order_status IN ('PENDING', 'PAID', 'PREPARING', 'SHIPPED', 'DELIVERED', 'CANCEL_REQUESTED', 'CANCELLED')
    ),
    total_product_amt   INTEGER NOT NULL CHECK (total_product_amt >= 0),
    shipping_fee        INTEGER NOT NULL DEFAULT 0 CHECK (shipping_fee >= 0),
    final_payment_amt   INTEGER NOT NULL CHECK (final_payment_amt >= 0),
    recipient_name      TEXT NOT NULL,
    recipient_phone     TEXT NOT NULL,
    shipping_address    TEXT NOT NULL,      -- 주문 시점의 스냅샷 주소
    ordered_at          TEXT NOT NULL DEFAULT (DATETIME('now', 'localtime')),
    FOREIGN KEY (user_id) REFERENCES users (user_id)
);

-- 주문 상세 항목 테이블 (주문 시점 스냅샷 보존)
CREATE TABLE IF NOT EXISTS order_items (
    order_item_id   INTEGER PRIMARY KEY AUTOINCREMENT,
    order_id        TEXT NOT NULL,
    option_id       INTEGER NOT NULL,
    product_name    TEXT NOT NULL,          -- 주문 시점 스냅샷 명칭
    weight_size     TEXT NOT NULL,
    grind_type      TEXT NOT NULL,
    order_price     INTEGER NOT NULL CHECK (order_price >= 0),
    quantity        INTEGER NOT NULL CHECK (quantity > 0),
    FOREIGN KEY (order_id) REFERENCES orders (order_id) ON DELETE CASCADE,
    FOREIGN KEY (option_id) REFERENCES product_options (option_id)
);

-- --------------------------------------------------------
-- 6. 결제 트랜잭션 (Make Payment, Retry Payment, Payment Gateway)
-- --------------------------------------------------------

CREATE TABLE IF NOT EXISTS payments (
    payment_id      INTEGER PRIMARY KEY AUTOINCREMENT,
    order_id        TEXT NOT NULL,
    pg_provider     TEXT NOT NULL,          -- 예: 'TOSS', 'INICIS', 'NAVERPAY'
    pg_tid          TEXT UNIQUE,            -- PG사 승인 고유 트랜잭션 번호
    payment_method  TEXT NOT NULL,          -- 'CARD', 'EASY_PAY', 'TRANSFER'
    payment_status  TEXT NOT NULL DEFAULT 'READY' CHECK (
        payment_status IN ('READY', 'SUCCESS', 'FAILED', 'CANCELLED')
    ),
    paid_amount     INTEGER NOT NULL CHECK (paid_amount >= 0),
    failure_reason  TEXT,                   -- 실패 사유
    approved_at     TEXT,                   -- PG 승인 일시
    FOREIGN KEY (order_id) REFERENCES orders (order_id)
);

-- --------------------------------------------------------
-- 7. 배송 관리 및 추적 (Prepare Shipment, Update Delivery Status, Track Delivery)
-- --------------------------------------------------------

CREATE TABLE IF NOT EXISTS deliveries (
    delivery_id     INTEGER PRIMARY KEY AUTOINCREMENT,
    order_id        TEXT NOT NULL UNIQUE,
    courier_name    TEXT NOT NULL,          -- 택배사 명칭
    tracking_number TEXT NOT NULL,          -- 운송장 번호
    delivery_status TEXT NOT NULL DEFAULT 'PREPARING' CHECK (
        delivery_status IN ('PREPARING', 'IN_TRANSIT', 'DELIVERED')
    ),
    shipped_at      TEXT,                   -- 발송 일시
    delivered_at    TEXT,                   -- 배송 완료 일시
    FOREIGN KEY (order_id) REFERENCES orders (order_id)
);

-- --------------------------------------------------------
-- 8. 성능 최적화를 위한 인덱스 (조회 및 필터 조건)
-- --------------------------------------------------------

-- 원두 검색 및 다중 조건 필터링 인덱스
CREATE INDEX IF NOT EXISTS idx_products_name ON products (name);
CREATE INDEX IF NOT EXISTS idx_products_filter ON products (origin, roast_level, base_price);

-- 마이페이지 및 장바구니/주문 빠른 조회를 위한 인덱스
CREATE INDEX IF NOT EXISTS idx_user_addresses_user_id ON user_addresses (user_id);
CREATE INDEX IF NOT EXISTS idx_cart_items_user_id ON cart_items (user_id);
CREATE INDEX IF NOT EXISTS idx_orders_user_id ON orders (user_id);
CREATE INDEX IF NOT EXISTS idx_orders_status_ordered_at ON orders (order_status, ordered_at DESC);
CREATE INDEX IF NOT EXISTS idx_order_items_order_id ON order_items (order_id);
CREATE INDEX IF NOT EXISTS idx_payments_order_id ON payments (order_id);
CREATE INDEX IF NOT EXISTS idx_deliveries_tracking ON deliveries (tracking_number);
