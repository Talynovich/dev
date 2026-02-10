import React, { useEffect, useState } from 'react'
import { Phone, Calendar, ArrowLeft, Activity, Venus, Mars } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPatients } from '../../store/patientsSlice'
import Table from '../../components/table/Table'
import SearchBarHeader from '../../components/SearchBarHeader/SearchBarHeader'

const PatientManagement = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPatients())
  }, [dispatch])

  const patients = useSelector((store) => store.patients.patient)

  const filteredPatients = patients.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="bg-slate-50 p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <SearchBarHeader
          filteredPatients={filteredPatients}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <Table filteredPatients={filteredPatients} />
        </div>
      </div>
    </div>
  )
}

export default PatientManagement
