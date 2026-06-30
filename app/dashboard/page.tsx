import WelcomeSection from "@/components/dashboard/WelcomeSection";
import DashboardCardsGrid from "@/components/dashboard/DashboardCardsGrid";

export default function DashboardPage() {
  const counts = {
    medicalRecords: 0,
    appointments: 0,
    medicines: 0,
    insurance: 0,
    emergencyContacts: 0,
  };

  return (
    <div className="space-y-8">
      <WelcomeSection
        fullName="Yashvin Kanwar"
        email="yashwin.kanwar@gmail.com"
      />

      <DashboardCardsGrid counts={counts} />
    </div>
  );
}