-- CreateTable
CREATE TABLE "customer" (
    "id" BIGSERIAL NOT NULL,
    "customer_name" VARCHAR(255),
    "customer_debt" INTEGER,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "new_customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "invoice" (
    "id" BIGSERIAL NOT NULL,
    "id_customer" BIGINT,
    "id_supplier" BIGINT,
    "total" INTEGER,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "invoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "invoice_item" (
    "id" BIGSERIAL NOT NULL,
    "id_invoice" BIGINT,
    "id_product" BIGINT,
    "qty" INTEGER,
    "subtotal" INTEGER,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "invoice_item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product" (
    "id" BIGSERIAL NOT NULL,
    "id_product_size" BIGINT,
    "id_supplier" BIGINT,
    "product_name" VARCHAR(255),
    "product_qty" INTEGER,
    "product_buy_price" INTEGER,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "new_product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_size" (
    "id" BIGSERIAL NOT NULL,
    "size_name" VARCHAR(255),
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "new_product_size_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sell_price" (
    "id" BIGSERIAL NOT NULL,
    "id_customer" BIGINT,
    "id_product" BIGINT,
    "sell_price" INTEGER,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "sell_price_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "supplier" (
    "id" BIGSERIAL NOT NULL,
    "supplier_name" VARCHAR(255),
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "new_supplier_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "invoice" ADD CONSTRAINT "customer" FOREIGN KEY ("id_customer") REFERENCES "customer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "invoice" ADD CONSTRAINT "supplier" FOREIGN KEY ("id_supplier") REFERENCES "supplier"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "invoice_item" ADD CONSTRAINT "invoice" FOREIGN KEY ("id_invoice") REFERENCES "invoice"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "invoice_item" ADD CONSTRAINT "product" FOREIGN KEY ("id_product") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product size" FOREIGN KEY ("id_product_size") REFERENCES "product_size"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "supplier" FOREIGN KEY ("id_supplier") REFERENCES "supplier"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "sell_price" ADD CONSTRAINT "customer" FOREIGN KEY ("id_customer") REFERENCES "customer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "sell_price" ADD CONSTRAINT "product" FOREIGN KEY ("id_product") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

