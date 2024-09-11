import Sidebar from "../../components/sidebar";
import Header from "../../components/header";

const AdminDashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-grow ml-64">
        {/* Header */}
        <Header />
      </div>
    </div>
  );
};

export default AdminDashboard;
