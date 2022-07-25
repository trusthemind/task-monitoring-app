import { useState } from 'react'
import { PlusOutlined } from '@ant-design/icons'
import { Button, Form, Input } from 'antd'
import { useAddCategoryMutation } from 'common/api/categoriesApi/category.api'
import { ICategory } from 'common/modules/models/Category'
import AddCategoryForm from '../../Forms/AddCategoryForm'
import Categories from '../../Categories'
import ModalWindow from '../../UI/ModalWindow'
import s from './style.module.scss'
import useDebounce from '../../../modules/hooks/useDebounce'

const AdminPageCategories: React.FC = () => {
  const { Search } = Input

  const [form] = Form.useForm()

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const [isFormDisabled, setIsFormDisabled] = useState<boolean>(false)

  const [addCategory] = useAddCategoryMutation()

  const onCancelModal = () => {
    setIsModalVisible(false)
    form.resetFields()
  }

  const onSubmitModal = async () => {
    const formData: ICategory = await form.validateFields()
    setIsFormDisabled(true)
    await addCategory({ ...formData })
    form.resetFields()
    setIsModalVisible(false)
    setIsFormDisabled(false)
  }

  const [search, setSearch] = useState('')
  const debounced = useDebounce<string>(search)

  return (
    <>
      <div className={s.Controls}>
        {/* <Search
          className={s.Search}
          placeholder="input search text"
          onSearch={() => console.log('search')}
          enterButton
        /> */}
        <Input
          placeholder="Search Category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button
          className={s.AddButton}
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => setIsModalVisible(true)}
        />
        <ModalWindow
          title="Add category"
          isModalVisible={isModalVisible}
          onCancel={onCancelModal}
          onOk={onSubmitModal}
          okText="Create category"
          cancelText="Cancel"
        >
          <AddCategoryForm isFormDisabled={isFormDisabled} form={form} />
        </ModalWindow>
      </div>

      <Categories nameFilter={debounced} />
    </>
  )
}

export default AdminPageCategories
