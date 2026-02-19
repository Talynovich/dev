import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPatients, setCurrentPatient } from '../../store/patientsSlice'
import Table from '../../components/table/Table'
import SearchBarHeader from '../../components/SearchBarHeader/SearchBarHeader'

const PatientManagement = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingPatient, setEditingPatient] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPatients())
  }, [dispatch])

  const patients = useSelector((store) => store.patients.patient)

  const filteredPatients = patients.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleEditingClick = (patient) => {
    setEditingPatient(patient)
    setIsModalOpen(true)
    dispatch(setCurrentPatient(patient))
  }

  const handleCloseModal = () => {
    setEditingPatient(null)
    setIsModalOpen(false)
    dispatch(setCurrentPatient(null))
  }

  return (
    <div className="bg-slate-50 p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <SearchBarHeader
          filteredPatients={filteredPatients}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          initialDate={editingPatient}
          handleCloseModal={handleCloseModal}
        />
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <Table
            filteredPatients={filteredPatients}
            isModalOpen={isModalOpen}
            handleEditingClick={handleEditingClick}
          />
        </div>
      </div>
    </div>
  )
}

export default PatientManagement
