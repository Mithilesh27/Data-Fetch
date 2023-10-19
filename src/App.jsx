import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the URL when the component mounts
    fetch("https://dummyjson.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data.users);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array to run this effect only once

  return (
    <div>
      <h1>User Data Table</h1>
      <table style={styles.table}>
        <thead>
          <tr style={styles.tableHeader}>
            <th>S.No</th>
            <th>Profile Pic</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>E-mail</th>
            <th>Username</th>
            <th>Domain</th>
            <th>IP</th>
            <th>University</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr
              key={user.id}
              style={index % 2 === 0 ? styles.evenRow : styles.oddRow}
            >
              <td style={styles.cell}>{index + 1}</td>
              <td style={styles.cell}>
                <img
                  src={user.image}
                  alt={`Profile Pic of ${user.firstName} ${user.lastName}`}
                  style={styles.profilePic}
                />
              </td>
              <td style={styles.cell}>{user.firstName}</td>
              <td style={styles.cell}>{user.lastName}</td>
              <td style={styles.cell}>{user.gender}</td>
              <td style={styles.cell}>{user.email}</td>
              <td style={styles.cell}>{user.username}</td>
              <td style={styles.cell}>{user.domain}</td>
              <td style={styles.cell}>{user.ip}</td>
              <td style={styles.cell}>{user.university}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  table: {
    borderCollapse: "collapse",
    width: "100%",
  },
  tableHeader: {
    backgroundColor: "#f2f2f2",
    borderBottom: "2px solid #ddd",
  },
  evenRow: {
    backgroundColor: "#f2f2f2",
  },
  oddRow: {
    backgroundColor: "white",
  },
  cell: {
    padding: "8px",
    textAlign: "center",
    border: "1px solid #ddd",
  },
  profilePic: {
    width: "50px",
    height: "50px",
  },
};

export default App;
