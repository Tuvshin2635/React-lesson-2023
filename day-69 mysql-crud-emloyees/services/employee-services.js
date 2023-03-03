import { pool } from "../config/mysql-config.js";

export async function getEmployees() {
  const [rows] = await pool.query(`select * from employees limit 10`);
  console.log(rows);
  return rows;
}

export async function getMaxNo() {
  const [rows] = await pool.query("select max(emp_no) as max from employees");
  return rows[0];
}

export async function hireEmployee(
  empNo,
  birthDate,
  firstName,
  lastName,
  gender,
  hireDate
) {
  // const query = `insert inot employees values (${empNo}, ${}'1990-01-01', 'Jhon', 'Mc', 'M', '2010-01-01')`;
  const query = `insert into employees values(?,?,?,?,?,?)`;
  const [rows] = await pool.query(query, [
    empNo,
    birthDate,
    firstName,
    lastName,
    gender,
    hireDate,
  ]);
  return rows;
}

export async function updateEmployee(empNo, lastName, gender) {
  const query = `update employees set last_name=?, gender=? where emp_no = ?`;
  const [rows] = await pool.query(query, [lastName, gender, empNo]);
  return rows[0];
}

export async function fireEmployee(empNo) {
  const query = `DELETE FROM employees WHERE emp_no = ${empNo}`;
  const [rows] = await pool.query(query);

  return rows;
}
