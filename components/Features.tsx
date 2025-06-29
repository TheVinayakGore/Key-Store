import {
  FiLock,
  FiShield,
  FiEye,
  FiGrid,
  FiSearch,
  FiDownload,
} from "react-icons/fi";

export default function Features() {
  const features = [
    {
      icon: <FiLock size={24} />,
      title: "Secure Storage",
      description:
        "All your passwords are encrypted and stored safely in your personal vault.",
    },
    {
      icon: <FiShield size={24} />,
      title: "One-Click Copy",
      description:
        "Easily copy passwords with a single click—no more typing complex strings.",
    },
    {
      icon: <FiEye size={24} />,
      title: "Password Visibility",
      description:
        "Toggle between hidden and visible passwords when you need to check them.",
    },
    {
      icon: <FiGrid size={24} />,
      title: "Categories",
      description:
        "Organize your credentials by type (social, work, finance, etc.) for easy access.",
    },
    {
      icon: <FiSearch size={24} />,
      title: "Quick Search",
      description:
        "Find any credential instantly with our powerful search functionality.",
    },
    {
      icon: <FiDownload size={24} />,
      title: "Export Options",
      description: "Backup your passwords securely whenever you need them.",
    },
  ];

  return (
    <>
      <main className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 md:p-10 bg-gradient-to-br from-primary/10 border border-primary/40 rounded-md hover:shadow-lg transition-all hover:scale-105 duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary/10 text-primary rounded-full mr-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="opacity-60">{feature.description}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
