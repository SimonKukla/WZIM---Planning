export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#2b2a29] p-10">
      <h1 className="text-4xl font-bold mb-6">Wspólnota Życie i Misja</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card title="Plan Wydarzeń" />
        <Card title="Członkowie" />
        <Card title="Plan Liturgiczny" />
        <Card title="Materiały" />
        <Card title="Zarządzanie" />
      </div>
    </main>
  );
}

function Card({ title }: { title: string }) {
  return (
    <div className="border border-[#2b2a29] rounded-2xl p-6 shadow-md hover:shadow-lg transition">
      <h2 className="text-xl font-semibold">{title}</h2>
    </div>
  );
}