import { Button, Popconfirm, Space } from 'antd'
import dayjs from 'dayjs'
import { useNavigate } from 'react-router'

export const usePatientColumns = ({ onDelete, onEdit, holder }) => {
  const navigate = useNavigate()

  return [
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
      fixed: 'right',
      width: 150,
      render: (_, record) => (
        <Space size="middle">
          <Button
            color="default"
            variant="filled"
            onClick={() => onEdit(record)}
          >
            Редактировать
          </Button>
          <>
            {holder}
            <Popconfirm
              title="Удалить пациента"
              description="Вы уверены, что хотите удалить пациента?"
              onConfirm={() => onDelete(record.id)}
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
}
