import React, { useEffect } from 'react'
import { Activity, ArrowLeft, Calendar, Mars, Phone, Venus } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router'
import { fetchPatients } from '../../store/patientsSlice.js'
import IsLoading from '../../components/isLoading'

const PatientDetailsPage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchPatients())
  }, [dispatch])

  const { id } = useParams()
  const patients = useSelector((store) => store.patients.patient)
  const patientId = patients.find((patient) => patient.id === id)

  return patientId ? (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans text-slate-700">
      <button className="flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-6">
        <Link
          to="/"
          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span>Назад к списку</span>
        </Link>
      </button>

      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-blue-600 p-6 text-white">
          <h2 className="text-2xl font-semibold">{patientId.name}</h2>
          <p className="opacity-90">ID пациента: {patientId.id}</p>
        </div>

        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
              Личные данные
            </h3>
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-blue-500" />
              <span>{patientId.dob}</span>
            </div>
            <div className="flex items-center gap-3">
              <Venus className="w-5 h-5 text-blue-500" />
              <span>{patientId.gender}</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-blue-500" />
              <span>{patientId.phone}</span>
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
              <p className="text-slate-800">{patientId.diagnosis}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500 leading-relaxed">
                {patientId.history}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <IsLoading />
  )
}

export default PatientDetailsPage
