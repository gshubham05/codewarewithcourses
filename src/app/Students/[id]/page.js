import courseStudents from "../data";
import { notFound } from "next/navigation";

export default async function CourseStudentProfile({ params }) {
  const { id } = await Promise.resolve(params);
  const student = courseStudents.find((s) => s.id === id);
  if (!student) return notFound();

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-950 text-white py-24 px-4">
      <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-10 md:p-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left: Profile */}
        <div className="flex flex-col items-center">
          <img
            src={student.image}
            alt={student.name}
            className="w-40 h-40 rounded-full border-4 border-white shadow-md mb-4 object-cover"
          />
          <span className="text-sm uppercase text-blue-200 font-medium tracking-widest bg-blue-700/30 px-4 py-1 rounded-full mb-6">
            {student.role}
          </span>
          <a
            href={`/Students/${student.id}/certificate`}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:scale-105 transition"
          >
            🎓 View Certificate
          </a>
        </div>

        {/* Right: Info */}
        <div className="md:col-span-2">
          <h1 className="text-4xl font-extrabold mb-2 text-white">
            {student.name}
          </h1>
          <p className="text-lg text-gray-300 mb-2">{student.role}</p>
          <p className="text-md text-blue-200 mb-6">🏫 {student.college}</p>

          <h2 className="text-xl font-bold text-purple-300 mb-2">
            Course Summary
          </h2>
          <p className="text-gray-200 leading-relaxed">
            {student.name} completed the course at <strong>Codeware IT</strong>,
            gaining in-depth knowledge in <strong>{student.role}</strong>.
            Through expert sessions, hands-on projects, and mentorship, they
            proved their commitment to learning and professional growth.
          </p>

          {student.placed && (
            <div className="mt-6 text-green-400 font-semibold text-sm">
              🎉 Placed after course completion!
            </div>
          )}

          <div className="mt-8 text-sm text-gray-400 border-t border-gray-600 pt-4">
            🧑‍🏫 Certified by Codeware IT | Verified Skill Training
          </div>
        </div>
      </div>
    </main>
  );
}
