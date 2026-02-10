import React from 'react'

const TableHead = () => {
  return (
    <thead>
      <tr className="bg-slate-50/50 border-b border-slate-100">
        <th className="px-6 py-4 text-sm font-semibold text-slate-600">ФИО</th>
        <th className="px-6 py-4 text-sm font-semibold text-slate-600">
          Дата рождения
        </th>
        <th className="px-6 py-4 text-sm font-semibold text-slate-600">Пол</th>
        <th className="px-6 py-4 text-sm font-semibold text-slate-600">
          Телефон
        </th>
        <th className="px-6 py-4 text-sm font-semibold text-slate-600"></th>
      </tr>
    </thead>
  )
}

export default TableHead