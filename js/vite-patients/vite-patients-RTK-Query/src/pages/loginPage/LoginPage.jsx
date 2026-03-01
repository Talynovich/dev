import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Card, Form, Input, Typography, notification } from 'antd'

import { useGetUserQuery, useLoginMutation } from '../../store/auth/authApi'
import { setCredentials } from '../../store/auth/authSlice.js'

const { Title, Text } = Typography

const LoginPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [login] = useLoginMutation()
  const { isAuthenticated } = useSelector((state) => state.auth)
  const { isLoading } = useGetUserQuery()
  const onFinish = async (values) => {
    try {
      const res = await login(values).unwrap()
      dispatch(setCredentials(res))
    } catch {
      notification.error({ title: 'Неверный логин или пароль' })
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated])

  if (isLoading || isAuthenticated) return null

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <Card className="w-full max-w-md shadow-lg">
        <div className="text-center mb-6">
          <Title level={3} className="!mb-1">
            Медицинский портал
          </Title>
          <Text type="secondary">Вход в систему</Text>
        </div>

        <Form
          name="login"
          layout="vertical"
          onFinish={onFinish}
          initialValues={{ username: 'emilys', password: 'emilyspass' }}
        >
          <Form.Item
            label="Логин"
            name="username"
            rules={[{ required: true, message: 'Введите логин' }]}
          >
            <Input
              size="large"
              prefix={<UserOutlined />}
              placeholder="Введите логин"
            />
          </Form.Item>

          <Form.Item
            label="Пароль"
            name="password"
            rules={[
              { required: true, message: 'Введите пароль' },
              { min: 5, message: 'Пароль должен быть не менее 5 символов' },
            ]}
          >
            <Input.Password
              size="large"
              prefix={<LockOutlined />}
              placeholder="Введите пароль"
            />
          </Form.Item>

          <Form.Item className="mb-2">
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="w-full"
            >
              Войти
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default LoginPage
