import { getPasswords } from "./actions/password.actions";
import Hero from "@/components/Hero";
import Form from "@/components/Form";
import KeyList from "@/components/KeyList";
import Features from "@/components/Features";
import Demo from "@/components/Demo";

export default async function Home() {
  const passwords = await getPasswords();

  return (
    <main className="min-h-screen relative top-16">
      <Hero />
      <div className="container mx-auto py-10 md:py-20">
        <Demo />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 py-5 md:py-20">
          <div className="lg:col-span-1">
            <Form />
          </div>
          <div className="lg:col-span-2">
            <KeyList passwords={passwords} />
          </div>
        </div>
        <Features />
      </div>
    </main>
  );
}
