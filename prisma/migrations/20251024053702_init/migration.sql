-- CreateTable
CREATE TABLE "Load" (
    "id" TEXT NOT NULL,
    "relayId" TEXT,
    "pickupAt" TIMESTAMP(3),
    "dropoffAt" TIMESTAMP(3),
    "originCity" TEXT,
    "originState" TEXT,
    "destCity" TEXT,
    "destState" TEXT,
    "miles" INTEGER,
    "revenueCents" INTEGER,
    "truckId" TEXT,
    "trailerType" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Load_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fuel" (
    "id" TEXT NOT NULL,
    "txnAt" TIMESTAMP(3) NOT NULL,
    "state" TEXT,
    "city" TEXT,
    "gallons" DOUBLE PRECISION NOT NULL,
    "totalCents" INTEGER NOT NULL,
    "truckId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Fuel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FuelMatch" (
    "id" TEXT NOT NULL,
    "loadId" TEXT NOT NULL,
    "fuelId" TEXT NOT NULL,

    CONSTRAINT "FuelMatch_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Load_relayId_key" ON "Load"("relayId");

-- CreateIndex
CREATE UNIQUE INDEX "FuelMatch_loadId_fuelId_key" ON "FuelMatch"("loadId", "fuelId");

-- AddForeignKey
ALTER TABLE "FuelMatch" ADD CONSTRAINT "FuelMatch_loadId_fkey" FOREIGN KEY ("loadId") REFERENCES "Load"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FuelMatch" ADD CONSTRAINT "FuelMatch_fuelId_fkey" FOREIGN KEY ("fuelId") REFERENCES "Fuel"("id") ON DELETE CASCADE ON UPDATE CASCADE;
