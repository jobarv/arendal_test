CREATE PROCEDURE ListaInfo()
begin
    SELECT * FROM BD_ESCUELA
    INNER JOIN carrera AS car
    INNER JOIN semestre AS sem ON mat.materia_id = car.idCarrera
    INNER JOIN grupo AS gpo alu.alumno_id = gpo.idGrupo
    INNER JOIN alumno AS alu ON cal.calificacion = alu.idAlumno_id
    

end;