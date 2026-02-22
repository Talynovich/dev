import { Table, Input, Button, Space, Card } from 'antd'
import { SearchOutlined, PlusOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../store/products/productsThunks.js'

const { Search } = Input

const PatientsTable = () => {
  const [searchValue, setSearchValue] = useState('')
  const [correntPage, setCorrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')
  const products = useSelector((state) => state.products)
  const dispatch = useDispatch()

  const handlePageChange = (pagination) => {
    setCorrentPage(pagination)
  }

  const handleSearch = (value) => {
    setSearchQuery(value)
  }

  useEffect(() => {
    dispatch(
      getProducts({ limit: 30, skip: 30 * (correntPage - 1), q: searchQuery })
    )
  }, [dispatch, correntPage, searchQuery])

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Rating',
      dataIndex: 'rating',
      key: 'rating',
    },
  ]

  return (
    <Card>
      <Input.Search
        placeholder="Поиск пациента"
        allowClear
        enterButton
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onSearch={handleSearch}
        style={{}}
      />

      <Table
        rowKey="id"
        columns={columns}
        dataSource={products.data.products.products}
        loading={products.isLoading}
        onChange={(e) => handlePageChange(e.current)}
        pagination={{
          current: correntPage,
          pageSize: 30,
          total: products.data.total,
          showSizeChanger: false,
        }}
      />
    </Card>
  )
}

export default PatientsTable
