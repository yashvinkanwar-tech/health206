import {
  FileText,
  Bell,
  Shield,
  Calendar,
  HeartPulse,
  Bot,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Medical Records",
    description: "Store and access your health records securely anytime.",
  },
  {
    icon: Bell,
    title: "Medicine Reminder",
    description: "Never miss your medicines with smart reminders.",
  },
  {
    icon: Shield,
    title: "Insurance",
    description: "Manage all your health insurance in one place.",
  },
  {
    icon: Calendar,
    title: "Appointments",
    description: "Book and manage doctor appointments easily.",
  },
  {
    icon: HeartPulse,
    title: "Emergency Profile",
    description: "Instantly share critical health information in emergencies.",
  },
  {
    icon: Bot,
    title: "AI Health Assistant",
    description: "Get intelligent health guidance powered by AI.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Everything You Need For Your Health
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Health 206 combines all your essential healthcare tools into one
            secure platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl bg-slate-900 border border-slate-800 p-8 hover:border-cyan-400 transition duration-300"
              >
                <Icon
                  size={42}
                  className="text-cyan-400 mb-6"
                />

                <h3 className="text-xl font-semibold mb-3">
                  {feature.title}
                </h3>

                <p className="text-slate-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}