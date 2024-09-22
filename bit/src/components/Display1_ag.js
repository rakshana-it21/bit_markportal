import React, { useEffect, useState } from 'react';

const Display1_ag = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/data');
        if (!response.ok) throw new Error('Failed to fetch data');
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Agri Data</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Marks</th>
            <th>Val</th>
            <th>CO1</th>
            <th>Marks2</th>
            <th>Val2</th>
            <th>CO2</th>
            <th>Marks3</th>
            <th>Val3</th>
            <th>CO3</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item.id}</td>
              <td>{item.marks}</td>
              <td>{item.val}</td>
              <td>{item.CO1}</td>
              <td>{item.marks2}</td>
              <td>{item.val2}</td>
              <td>{item.CO2}</td>
              <td>{item.marks3}</td>
              <td>{item.val3}</td>
              <td>{item.CO3}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Display1_ag;
