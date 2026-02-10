import React from 'react'
import TableRow from './TableRow.jsx'
import PatientsNotFound from '../patientsNotFound/index.js'
import TableHead from '../tableHead/index.js'

const Table = ({ filteredPatients }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <TableHead />
        <tbody className="divide-y divide-slate-100">
          {filteredPatients.map((patient) => (
            <TableRow patient={patient} key={patient.id} />
          ))}
          {filteredPatients.length === 0 && <PatientsNotFound />}
        </tbody>
      </table>
    </div>
  )
}

export default Table
