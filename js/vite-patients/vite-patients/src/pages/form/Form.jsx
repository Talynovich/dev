import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { baseurl } from '../../constant/constant.js'

const Form = ({ isOpen, onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    name: '',
    birthDate: '',
    phone: '',
    status: 'Стабилен',
  })

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm()

  if (!isOpen) return null

  const OnSubmit = (data) => {
    axios.post(`${baseurl}`, data)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden">
        {/* Шапка модалки */}
        <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-slate-800">
            Новый пациент
          </h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Форма */}
        <form onSubmit={handleSubmit(OnSubmit)} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              ФИО пациента
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg
                 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              placeholder="Иванов Иван Иванович"
              {...register('name', { required: true })}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Дата рождения
              </label>
              <input
                required
                type="date"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg
                   focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                {...register('dob', { required: true })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Телефон
              </label>
              <input
                required
                type="tel"
                placeholder="+7 (___) ___"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg
                   focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                {...register('phone', { required: true })}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Пол
            </label>
            <select
              className="w-full px-3 py-2 border border-slate-300 rounded-lg
                 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-white"
              {...register('gender', { required: true })}
            >
              <option value="Мужской">Мужской</option>
              <option value="Женский">Женский</option>
            </select>
          </div>

          {/* Диагноз */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Диагноз
            </label>
            <input
              type="text"
              placeholder="Основной диагноз"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg
                 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              {...register('diagnosis', { required: true })}
            />
          </div>

          {/* История болезни */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              История болезни
            </label>
            <textarea
              rows={4}
              placeholder="Опишите историю болезни пациента..."
              className="w-full px-3 py-2 border border-slate-300 rounded-lg
                 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
              {...register('medicalHistory')}
            />
          </div>

          {/* Кнопки управления */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-slate-300 text-slate-600
                 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Отмена
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 border border-slate-300 text-slate-600
                 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
              onClick={OnSubmit}
            >
              Сохранить
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form
