import { FiShield, FiLock, FiCloud } from "react-icons/fi";

export default function Hero() {
  return (
    <main className="bg-gradient-to-t from-primary">
      <div className="container mx-auto py-36">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-white/20 border border-white/70 backdrop-blur-sm shadow-lg rounded-full px-6 py-2">
              <FiShield className="text-xl" />
              <span className="font-medium">Secure Password Manager</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Store Your Passwords
            <span className="block ">Securely in the Cloud</span>
          </h1>

          <p className="text-xl  mb-8 max-w-2xl mx-auto">
            KeyStore is your trusted companion for managing passwords safely.
            Built with Next.js and MongoDB for maximum security and reliability.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-white">
            <div className="flex items-center space-x-2 bg-white/15 backdrop-blur-sm rounded-lg px-4 py-2">
              <FiLock className="text-lg" />
              <span>End-to-End Encryption</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/15 backdrop-blur-sm rounded-lg px-4 py-2">
              <FiCloud className="text-lg" />
              <span>Cloud Sync</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/15 backdrop-blur-sm rounded-lg px-4 py-2">
              <FiShield className="text-lg" />
              <span>Zero-Knowledge</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
