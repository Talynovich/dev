import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  deletePatient,
  fetchPatients,
  setCurrentPatient,
} from '../../store/patientsSlice'
import SearchBarHeader from '../../components/SearchBarHeader/SearchBarHeader'
import { Button, Popconfirm, Space, Table, message } from 'antd'
import dayjs from 'dayjs'
import { useNavigate } from 'react-router'

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

  const navigate = useNavigate()
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

  const [messageApi, holder] = message.useMessage()

  const cancel = (e) => {}

  const onDelete = (id) => {
    dispatch(deletePatient(id))
    messageApi.success('Запись удалена')
  }
  const columns = [
    {
      title: 'Имя',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <a onClick={() => navigate(`/${record.id}`)}>{text}</a>
      ),
    },
    {
      title: 'Дата рождения',
      dataIndex: 'dob',
      key: 'dob',
      render: (dob) => dayjs(dob).format('DD.MM.YYYY'),
    },
    {
      title: 'Пол',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'Действия',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button
            color="default"
            variant="filled"
            onClick={() => handleEditingClick(record)}
          >
            Редактировать
          </Button>
          <>
            {holder}
            <Popconfirm
              title="Удалить пациента"
              description="Вы уверены, что хотите удалить пациента?"
              onConfirm={() => onDelete(record.id)}
              onCancel={cancel}
              okText="Да"
              cancelText="Нет"
            >
              <Button danger>Delete</Button>
            </Popconfirm>
          </>
        </Space>
      ),
    },
  ]

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
          <Table columns={columns} dataSource={filteredPatients} rowKey="id" />
        </div>
      </div>
    </div>
  )
}

export default PatientManagement
