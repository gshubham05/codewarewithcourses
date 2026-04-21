import students from "../data";
import { notFound } from "next/navigation";

export default async function InternProfile({ params }) {
  const { id } = await Promise.resolve(params);
  const intern = students.find((s) => s.id === id);
  if (!intern) notFound();

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-950 text-white py-24 px-4">
      <div className="max-w-6xl mx-auto bg-white text-gray-800 rounded-3xl shadow-2xl p-10 md:p-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left: Profile */}
        <div className="flex flex-col items-center">
          <img
            src={intern.image}
            alt={intern.name}
            className="w-40 h-40 rounded-full border-4 border-white shadow-md mb-4 object-cover"
          />
          <span className="text-xs uppercase font-semibold tracking-widest bg-yellow-400 text-black px-4 py-1 rounded-full mb-6">
            {intern.role}
          </span>

          <a
            href={`/intern/${intern.id}/certificate`}
            className="bg-blue-700 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-blue-800 transition"
          >
            🎓 View Certificate
          </a>
        </div>

        {/* Right: Info */}
        <div className="md:col-span-2">
          <h1 className="text-4xl font-extrabold mb-3">{intern.name}</h1>

          <p className="text-md text-gray-600 mb-1">
            {intern.role} at{" "}
            <span className="font-semibold text-gray-800">Codeware IT</span>
          </p>
          <p className="text-sm text-blue-700 mb-6">🏫 {intern.college}</p>

          <h2 className="text-xl font-bold text-blue-800 mb-2">
            Internship Summary
          </h2>
          <p className="text-gray-700 leading-relaxed">
            <strong>{intern.name}</strong> successfully completed the internship
            program at <strong>Codeware IT</strong>, contributing to live
            projects, improving real-world development skills, and gaining deep
            industry insight. As a <strong>{intern.role}</strong>, they worked
            with experienced mentors, participated in team collaboration, and
            built production-level applications.
          </p>

          <div className="mt-8 text-sm text-gray-500 border-t border-gray-300 pt-4">
            🧑‍🏫 Issued by Codeware IT | Verified Internship
          </div>
        </div>
      </div>
    </main>
  );
}
