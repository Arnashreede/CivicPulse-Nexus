import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getAllOfficers } from "../services/officerService";

function ViewOfficers() {

  const [officers, setOfficers] = useState([]);

  useEffect(() => {
    loadOfficers();
  }, []);

  const loadOfficers = async () => {
    const data = await getAllOfficers();
    setOfficers(data);
  };

  return (
    <>
      <Navbar />

      <div style={{ padding: "30px" }}>

        <h2>All Officers</h2>

        <table border="1" cellPadding="10">

          <thead>

            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Department</th>
              <th>Designation</th>
            </tr>

          </thead>

          <tbody>

            {officers.map((officer) => (

              <tr key={officer.id}>
                <td>{officer.id}</td>
                <td>{officer.fullName}</td>
                <td>{officer.email}</td>
                <td>{officer.phone}</td>
                <td>{officer.department}</td>
                <td>{officer.designation}</td>
              </tr>

            ))}

          </tbody>

        </table>

      </div>
    </>
  );
}

export default ViewOfficers;