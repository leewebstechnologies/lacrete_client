// import styles from "./page.module.css";

const Dashboard = () => {
  return (
    <div className="adminDashboard">
      <div className="row">
        <div className="col-md-3">{/* Sidebar */}</div>
        <div className="col-md-9">
          {/* Dashboard */}
          <div className="card shadow border-0">
            <div className="card-body">
              <h4>Admin Dashboard</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard