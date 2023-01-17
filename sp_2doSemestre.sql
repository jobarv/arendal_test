
CREATE PROCEDURE Listar2doSemestre2016()
begin
    SELECT 
        car.carrera AS 'carrera',
        sem.semestre AS 'semestre',
        mat.materia AS 'materia',
        gpo.grupo AS 'grupo',
        alu.alumno AS 'alumno',
        cal.calificacion AS 'calificacion'
    FROM
        carrera AS car
            INNER JOIN
        semestre AS sem ON mat.materia_id = car.idCarrera
            INNER JOIN
        grupo AS gpo alu.alumno_id = gpo.idGrupo
            INNER JOIN
        alumno AS alu ON cal.calificacion = alu.idAlumno_id
    WHERE

    cal.calificacion = '2do.semestre'




end;