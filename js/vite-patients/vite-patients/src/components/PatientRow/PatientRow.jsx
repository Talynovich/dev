import { User, ChevronRight } from 'lucide-react'

const PatientRow = ({ patient }) => (
  <tr
    className="hover:bg-blue-50/30 transition-colors group cursor-pointer border-b border-slate-100 last:border-0"
    onClick={() => onClick(patient)}
  >
    <td className="px-6 py-4">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
          <User className="w-4 h-4" />
        </div>
        <span className="font-medium text-slate-800">{patient.name}</span>
      </div>
    </td>
    <td className="px-6 py-4 text-slate-600 text-sm">{patient.dob}</td>
    <td className="px-6 py-4">
      <span
        className={`px-2 py-1 rounded-md text-xs font-medium ${
          patient.gender === 'Мужской'
            ? 'bg-blue-100 text-blue-700'
            : 'bg-pink-100 text-pink-700'
        }`}
      >
        {patient.gender}
      </span>
    </td>
    <td className="px-6 py-4 text-slate-600 text-sm">{patient.phone}</td>
    <td className="px-6 py-4 text-right">
      <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-blue-500 transition-colors inline" />
    </td>
  </tr>
)

export default PatientRow
