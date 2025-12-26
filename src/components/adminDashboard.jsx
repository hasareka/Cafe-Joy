import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaTrashAlt, FaSearch } from 'react-icons/fa'; 

export default function AdminDashboard() {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

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

  // NEW: Function to update status (Confirmed, Seated, etc.)
  const handleStatusChange = async (id, newStatus) => {
    try {
      await axios.patch(`http://localhost:5000/api/reservations/${id}/status`, { status: newStatus });
      // Update local state so the UI changes immediately
      setReservations(reservations.map(res => 
        res.id === id ? { ...res, status: newStatus } : res
      ));
    } catch (error) {
      alert("Error updating status");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this reservation?")) {
      try {
        await axios.delete(`http://localhost:5000/api/reservations/${id}`);
        setReservations(reservations.filter(res => res.id !== id));
      } catch (error) {
        alert("Error deleting reservation");
      }
    }
  };

  const filteredReservations = reservations.filter((res) =>
    res.full_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Helper to style status badges
  const getStatusStyle = (status) => {
    switch (status) {
      case 'Confirmed': return 'bg-green-100 text-green-700 border-green-200';
      case 'Seated': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'No-Show': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-amber-100 text-amber-700 border-amber-200'; // Pending
    }
  };

  return (
    <div className="min-h-screen bg-stone-100 p-8 pt-24 text-stone-900">
      <div className="max-w-6xl mx-auto">
        <Link to="/" className="text-stone-500 hover:text-amber-700 mb-4 inline-block text-sm">
          ← Back to Website
        </Link>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h1 className="text-3xl font-bold border-l-4 border-amber-700 pl-4 uppercase tracking-tighter">
            Cafe Joy <span className="text-amber-700">Admin</span>
          </h1>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative w-full md:w-64">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 text-sm" />
              <input 
                type="text"
                placeholder="Search by name..."
                className="w-full pl-10 pr-4 py-2 border border-stone-300 rounded-sm focus:outline-none focus:border-amber-700 text-sm"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <button 
              onClick={fetchReservations}
              className="whitespace-nowrap px-4 py-2 bg-amber-700 text-white text-xs font-bold uppercase tracking-widest hover:bg-amber-800 transition-colors"
            >
              Refresh
            </button>
          </div>
        </div>

        <div className="bg-white shadow-xl rounded-sm overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-stone-900 text-white text-xs uppercase tracking-widest">
              <tr>
                <th className="p-4">Customer & Status</th>
                <th className="p-4">Phone</th>
                <th className="p-4">Date</th>
                <th className="p-4">Time</th>
                <th className="p-4 text-center">Guests</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200">
              {loading ? (
                <tr><td colSpan="6" className="p-10 text-center text-stone-400">Loading...</td></tr>
              ) : filteredReservations.length === 0 ? (
                <tr><td colSpan="6" className="p-10 text-center text-stone-400">No matching reservations found.</td></tr>
              ) : (
                filteredReservations.map((res) => (
                  <tr key={res.id} className="hover:bg-stone-50 transition-colors">
                    <td className="p-4">
                      <div className="font-bold">{res.full_name}</div>
                      {/* Status Badge */}
                      <div className={`mt-1 inline-block px-2 py-0.5 rounded-full text-[10px] font-bold border ${getStatusStyle(res.status)}`}>
                        {res.status || 'Pending'}
                      </div>
                    </td>
                    <td className="p-4 text-stone-600">{res.phone}</td>
                    <td className="p-4 text-stone-600">{new Date(res.res_date).toLocaleDateString()}</td>
                    <td className="p-4 font-medium text-amber-800">{res.res_time}</td>
                    <td className="p-4 text-center">{res.guests}</td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-3">
                        {/* Status Dropdown */}
                        <select 
                          className="text-[11px] border border-stone-300 rounded p-1 focus:outline-none focus:border-amber-700 bg-white"
                          value={res.status || 'Pending'}
                          onChange={(e) => handleStatusChange(res.id, e.target.value)}
                        >
                          <option value="Pending">Pending</option>
                          <option value="Confirmed">Confirm</option>
                          <option value="Seated">Seated</option>
                          <option value="No-Show">No-Show</option>
                        </select>

                        <button 
                          onClick={() => handleDelete(res.id)}
                          className="text-stone-400 hover:text-red-600 transition-colors"
                          title="Delete Reservation"
                        >
                          <FaTrashAlt size={14} />
                        </button>
                      </div>
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