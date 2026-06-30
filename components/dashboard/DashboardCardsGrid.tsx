import {
  CalendarClock,
  FileText,
  Pill,
  ShieldCheck,
  Siren,
} from "lucide-react";

import DashboardCard from "@/components/dashboard/DashboardCard";

export interface DashboardCounts {
  medicalRecords: number;
  appointments: number;
  medicines: number;
  insurance: number;
  emergencyContacts: number;
}

interface DashboardCardsGridProps {
  counts: DashboardCounts;
}

export default function DashboardCardsGrid({
  counts,
}: DashboardCardsGridProps) {
  return (
    <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-5">

      <DashboardCard
        label="Medical Records"
        count={counts.medicalRecords}
        href="/medical-records"
        icon={FileText}
        accent="cyan"
      />

      <DashboardCard
        label="Appointments"
        count={counts.appointments}
        href="/appointments"
        icon={CalendarClock}
        accent="blue"
      />

      <DashboardCard
        label="Medicines"
        count={counts.medicines}
        href="/medicines"
        icon={Pill}
        accent="violet"
      />

      <DashboardCard
        label="Insurance"
        count={counts.insurance}
        href="/insurance"
        icon={ShieldCheck}
        accent="emerald"
      />

      <DashboardCard
        label="Emergency Contacts"
        count={counts.emergencyContacts}
        href="/emergency"
        icon={Siren}
        accent="amber"
      />

    </section>
  );
}