import React, { useEffect, useState } from 'react'
import { Phone, Calendar, ArrowLeft, Activity, Venus, Mars } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPatients } from '../../store/patientsSlice'
import Table from '../../components/table/Table'
import SearchBarHeader from '../../components/SearchBarHeader/SearchBarHeader'

const PatientManagement = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedPatient, setSelectedPatient] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPatients())
  }, [dispatch])

  const patients = useSelector((store) => store.patients.patient)

  const filteredPatients = patients.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
  // Вид: Карточка пациента
  if (selectedPatient) {
    return (
      <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans text-slate-700">
        <button
          onClick={() => setSelectedPatient(null)}
          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Назад к списку
        </button>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-blue-600 p-6 text-white">
            <h2 className="text-2xl font-semibold">{selectedPatient.name}</h2>
            <p className="opacity-90">ID пациента: #00{selectedPatient.id}</p>
          </div>

          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                Личные данные
              </h3>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-blue-500" />
                <span>{selectedPatient.dob}</span>
              </div>
              <div className="flex items-center gap-3">
                {selectedPatient.gender === 'Мужской' ? (
                  <Mars className="w-5 h-5 text-blue-500" />
                ) : (
                  <Venus className="w-5 h-5 text-pink-500" />
                )}
                <span>{selectedPatient.gender}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500" />
                <span>{selectedPatient.phone}</span>
              </div>
            </div>

            <div className="space-y-4 border-l border-slate-100 pl-0 md:pl-8">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                Медицинская информация
              </h3>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <div className="flex items-center gap-2 text-blue-700 font-medium mb-2">
                  <Activity className="w-4 h-4" /> Диагноз
                </div>
                <p className="text-slate-800">{selectedPatient.diagnosis}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {selectedPatient.history}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

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
