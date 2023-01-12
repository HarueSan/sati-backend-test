-- CreateTable
CREATE TABLE "patient" (
    "patient_id" TEXT NOT NULL,
    "first_name" TEXT,
    "middle_name" TEXT NOT NULL,
    "lastname" TEXT,
    "birth_date" TIMESTAMP(3) NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "patient_pkey" PRIMARY KEY ("patient_id")
);

-- CreateTable
CREATE TABLE "encounter" (
    "encounterId" TEXT NOT NULL,
    "visit" TIMESTAMP(3) NOT NULL,
    "discharge" TIMESTAMP(3) NOT NULL,
    "physical_examination" TEXT NOT NULL,
    "history_of_illness" TEXT NOT NULL,
    "follow_up" TIMESTAMP(3) NOT NULL,
    "patient_id" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "encounter_pkey" PRIMARY KEY ("encounterId")
);

-- AddForeignKey
ALTER TABLE "encounter" ADD CONSTRAINT "encounter_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "patient"("patient_id") ON DELETE RESTRICT ON UPDATE CASCADE;
