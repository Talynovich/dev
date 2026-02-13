import React from 'react'
import { ChevronRight, User } from 'lucide-react'
import { useNavigate } from 'react-router'
import { deletePatient } from '../../store/patientsSlice'
import { useDispatch } from 'react-redux'

const TableRow = ({ patient }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onDelete = (id) => {
    dispatch(deletePatient(id))
  }

  return (
    <tr className="hover:bg-blue-50/30 transition-colors group cursor-pointer">
      <td className="px-6 py-4" onClick={() => navigate(`/${patient.id}`)}>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
            <User className="w-4 h-4" />
          </div>
          <span className="font-medium text-slate-800">{patient.name}</span>
        </div>
      </td>
      <td
        className="px-6 py-4 text-slate-600 text-sm"
        onClick={() => navigate(`/${patient.id}`)}
      >
        {patient.dob.slice(0, 10)}
      </td>
      <td className="px-6 py-4">
        <span
          className="px-2 py-1 rounded-md text-xs font-medium text-blue-500"
          onClick={() => navigate(`/${patient.id}`)}
        >
          {patient.gender}
        </span>
      </td>
      <td
        className="px-6 py-4 text-slate-600 text-sm"
        onClick={() => navigate(`/${patient.id}`)}
      >
        {patient.phone}
      </td>
      <td className="px-6 py-4 text-right">
        <div className="flex justify-end gap-2 group-hover:opacity-100 transition">
          {/* Изменить */}
          <button
            onClick={() => {}}
            className="p-1.5 rounded-md hover:bg-blue-100 text-blue-500 cursor-pointer"
            title="Редактировать"
          >
            ✏️
          </button>

          <button
            onClick={() => onDelete(patient.id)}
            className="p-1.5 rounded-md hover:bg-red-100 text-red-500 cursor-pointer"
            title="Удалить"
          >
            🗑
          </button>
        </div>
      </td>
      <td className="px-6 py-4 text-right">
        <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-blue-500 transition-colors inline" />
      </td>
    </tr>
  )
}

export default TableRow
