import React, { useEffect, useState } from 'react'
import {
  User,
  Phone,
  Calendar,
  ChevronRight,
  ArrowLeft,
  Activity,
  Venus,
  Mars,
} from 'lucide-react'
import SearchBar from '../components/SearchBarHeader/SearchBar.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPatients } from '../store/patientsSlice.js'

const PatientManagement = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedPatient, setSelectedPatient] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPatients())
  }, [dispatch])

  // Имитация данных
  const patients1 = [
    {
      id: 1,
      name: 'Иванов Александр Петрович',
      dob: '12.05.1985',
      gender: 'Мужской',
      phone: '+7 (900) 123-45-67',
      diagnosis: 'Гипертоническая болезнь II стадии',
      history:
        'Наблюдается с 2023 года. Рекомендована диета и регулярный мониторинг АД.',
    },
    {
      id: 2,
      name: 'Смирнова Елена Викторовна',
      dob: '24.08.1992',
      gender: 'Женский',
      phone: '+7 (911) 987-65-43',
      diagnosis: 'Острый ринит',
      history: 'Жалобы на заложенность носа. Назначены капли и покой.',
    },
    {
      id: 3,
      name: 'Кузнецов Игорь Николаевич',
      dob: '03.02.1978',
      gender: 'Мужской',
      phone: '+7 (950) 444-22-11',
      diagnosis: 'Сахарный диабет 2 типа',
      history: 'Плановый осмотр. Уровень сахара в норме.',
    },
  ]

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

  // Вид: Таблица (Главная)
  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">
              Реестр пациентов
            </h1>
            <p className="text-slate-500">
              Всего записей: {filteredPatients.length}
            </p>
          </div>

          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-100">
                  <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                    ФИО
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                    Дата рождения
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                    Пол
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                    Телефон
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-slate-600"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredPatients.map((patient) => (
                  <tr
                    key={patient.id}
                    className="hover:bg-blue-50/30 transition-colors group cursor-pointer"
                    onClick={() => setSelectedPatient(patient)}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                          <User className="w-4 h-4" />
                        </div>
                        <span className="font-medium text-slate-800">
                          {patient.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-600 text-sm">
                      {patient.dob}
                    </td>
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
                    <td className="px-6 py-4 text-slate-600 text-sm">
                      {patient.phone}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-blue-500 transition-colors inline" />
                    </td>
                  </tr>
                ))}
                {filteredPatients.length === 0 && (
                  <tr>
                    <td
                      colSpan="5"
                      className="px-6 py-12 text-center text-slate-400"
                    >
                      Пациенты не найдены
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PatientManagement
