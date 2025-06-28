import { getPasswords } from './actions/password.actions';
import Hero from '@/components/Hero';
import Form from '@/components/Form';
import KeyList from '@/components/KeyList';

export default async function Home() {
  const passwords = await getPasswords();

  return (
    <main className="min-h-screen relative top-16">
      <Hero />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 py-5 md:py-10">
          <div className="lg:col-span-1">
            <Form />
          </div>
          <div className="lg:col-span-2">
            <KeyList passwords={passwords} />
          </div>
        </div>
      </div>
    </main>
  );
}