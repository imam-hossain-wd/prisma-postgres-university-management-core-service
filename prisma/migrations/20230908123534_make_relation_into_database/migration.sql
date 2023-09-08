-- AddForeignKey
ALTER TABLE "academic_department" ADD CONSTRAINT "academic_department_academic_faculty_id_fkey" FOREIGN KEY ("academic_faculty_id") REFERENCES "academic_faculty"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_academic_semester_id_fkey" FOREIGN KEY ("academic_semester_id") REFERENCES "academic_semesters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_academic_faculty_id_fkey" FOREIGN KEY ("academic_faculty_id") REFERENCES "academic_faculty"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_academic_department_id_fkey" FOREIGN KEY ("academic_department_id") REFERENCES "academic_department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Faculty" ADD CONSTRAINT "Faculty_academic_department_id_fkey" FOREIGN KEY ("academic_department_id") REFERENCES "academic_department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Faculty" ADD CONSTRAINT "Faculty_academic_faculty_id_fkey" FOREIGN KEY ("academic_faculty_id") REFERENCES "academic_faculty"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
