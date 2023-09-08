-- CreateTable
CREATE TABLE "academic_semesters" (
    "id" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "start_month" TEXT NOT NULL,
    "end_month" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "academic_semesters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "academic_faculty" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "academic_faculty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "academic_department" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "academic_faculty_id" TEXT NOT NULL,

    CONSTRAINT "academic_department_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student" (
    "id" TEXT NOT NULL,
    "student_id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "middle_name" TEXT NOT NULL,
    "profile_image" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "contact_no" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "blood_group" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "academic_semester_id" TEXT NOT NULL,
    "academic_faculty_id" TEXT NOT NULL,
    "academic_department_id" TEXT NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Faculty" (
    "id" TEXT NOT NULL,
    "faculty_id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "middle_name" TEXT NOT NULL,
    "profile_image" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "contact_no" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "blood_group" TEXT NOT NULL,
    "designation" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "academic_department_id" TEXT NOT NULL,
    "academic_faculty_id" TEXT NOT NULL,

    CONSTRAINT "Faculty_pkey" PRIMARY KEY ("id")
);
