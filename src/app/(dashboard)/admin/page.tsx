import Announcements from "@/components/Announcements";
import AttendenceChart from "@/components/AttendenceChart";
import CountCharts from "@/components/CountCharts";
import EventCalendar from "@/components/EventCalendar";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* left */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* USER CARDS */}
        <div className="flex flex-wrap gap-4 justify-between">
          <UserCard type="students" />
          <UserCard type="teachers" />
          <UserCard type="parents" />
          <UserCard type="staffs" />
        </div>
        {/* MIDDLE CHARTS */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* COUNT CHART */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountCharts />
          </div>
          {/* ATTENDENCE CHART */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendenceChart />
          </div>
        </div>
        {/* BOTTOM CHART */}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
};

export default AdminPage;
