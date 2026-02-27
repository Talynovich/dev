import React, { useState } from 'react'
import SearchBarHeader from '../../components/SearchBarHeader/SearchBarHeader'
import { Table, message } from 'antd'
import { usePatientColumns } from './usePatientColumns'
import {
  useDeletePatientMutation,
  useGetPatientsQuery,
  useSavePatientMutation,
} from '../../store/patients/patientsApi.js'
import { useDispatch } from 'react-redux'
import { setCurrentPatient } from '../../store/patients/patientsSlice.js'

const PatientManagement = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingPatient, setEditingPatient] = useState(null)
  const dispatch = useDispatch()
  const { data = [], isLoading } = useGetPatientsQuery()
  const [deletePatient] = useDeletePatientMutation()
  const [savePatient] = useSavePatientMutation()
  const filteredPatients = data.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
  const handleEditingClick = (patient) => {
    savePatient(patient)
    setIsModalOpen(true)
    setEditingPatient(patient)
    console.log(patient, `<<<<<`)
  }

  const handleCloseModal = () => {
    setEditingPatient(null)
    setIsModalOpen(false)
    dispatch(setCurrentPatient(null))
  }

  const [messageApi, holder] = message.useMessage()

  const onDelete = (id) => {
    deletePatient(id)
  }

  const columns = usePatientColumns({
    onDelete,
    onEdit: handleEditingClick,
    holder,
  })

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
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200">
          <Table
            columns={columns}
            dataSource={filteredPatients}
            loading={isLoading}
            rowKey="id"
            scroll={{ x: 'max-content' }}
          />
        </div>
      </div>
    </div>
  )
}

export default PatientManagement
