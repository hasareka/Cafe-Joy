import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



export default function AdminDashboard() {



  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReservations();
  }, []);

  const fetchReservations = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/reservations');
      setReservations(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  return (
    
    <div className="min-h-screen bg-stone-100 p-8 pt-24 text-stone-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold border-l-4 border-amber-700 pl-4 uppercase tracking-tighter">
            Cafe Joy <span className="text-amber-700">Admin</span>
          </h1>
          <button 
            onClick={fetchReservations}
            className="px-4 py-2 bg-amber-700 text-white text-xs font-bold uppercase tracking-widest hover:bg-amber-800 transition-colors"
          >
            Refresh List
          </button>
        </div>

        <div className="bg-white shadow-xl rounded-sm overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-stone-900 text-white text-xs uppercase tracking-widest">
              <tr>
                <th className="p-4">Customer Name</th>
                <th className="p-4">Date</th>
                <th className="p-4">Time</th>
                <th className="p-4 text-center">Guests</th>
                <th className="p-4">Booked On</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200">
              {loading ? (
                <tr><td colSpan="5" className="p-10 text-center text-stone-400">Loading reservations...</td></tr>
              ) : reservations.length === 0 ? (
                <tr><td colSpan="5" className="p-10 text-center text-stone-400">No reservations found.</td></tr>
              ) : (
                reservations.map((res) => (
                  <tr key={res.id} className="hover:bg-stone-50 transition-colors">
                    <td className="p-4 font-bold">{res.full_name}</td>
                    <td className="p-4 text-stone-600">{new Date(res.res_date).toLocaleDateString()}</td>
                    <td className="p-4 font-medium text-amber-800">{res.res_time}</td>
                    <td className="p-4 text-center">{res.guests}</td>
                    <td className="p-4 text-xs text-stone-400">
                      {new Date(res.created_at).toLocaleString()}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    
  );

  
}