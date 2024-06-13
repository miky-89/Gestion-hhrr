// src/components/Schedule.js
import React from 'react';

const Schedule = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    fetch('https://getform.io/f/{your-form-endpoint}', {
      method: 'POST',
      body: data,
    })
    .then((response) => response.json())
    .then((result) => {
      console.log('Success:', result);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

    form.reset();
  };

  return (
    <div>
      <h2>Programación de Turnos</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre del Empleado:
          <input type="text" name="employee_name" required />
        </label>
        <label>
          Fecha del Turno:
          <input type="date" name="shift_date" required />
        </label>
        <button type="submit">Guardar Turno</button>
      </form>
    </div>
  );
};

export default Schedule;
