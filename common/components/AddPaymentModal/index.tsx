import { useAddPaymentMutation } from '@common/api/paymentApi/payment.api'
import {
  IExtendedPayment,
  IPayment,
} from '@common/api/paymentApi/payment.api.types'
import { Form, message, Modal, Tabs, TabsProps } from 'antd'
import React, { FC, useState } from 'react'
import AddPaymentForm from '../Forms/AddPaymentForm'
import ReceiptForm from '../Forms/ReceiptForm'
import s from './style.module.scss'

interface Props {
  closeModal: VoidFunction
  paymentData?: object
  edit?: boolean
}

const AddPaymentModal: FC<Props> = ({ closeModal, paymentData, edit }) => {
  const [form] = Form.useForm()
  const [addPayment, { isLoading }] = useAddPaymentMutation()
  const [currPayment, setCurrPayment] = useState<IExtendedPayment>()
  const [activeTabKey, setActiveTabKey] = useState('1')

  const handleSubmit = async () => {
    const formData: IPayment = await form.validateFields()
    const response = await addPayment({
      payer: formData.payer,
      credit: formData.credit,
      description: formData.description,
      maintenance: formData.maintenance,
      placing: formData.placing,
      electricity: formData.electricity,
      water: formData.water,
      debit: formData.debit,
    })
    if ('data' in response) {
      setCurrPayment(response?.data.data)
      setActiveTabKey('2')
      form.resetFields()
      message.success('Додано')
    } else {
      message.error('Помилка при додаванні рахунку')
    }
  }

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Рахунок',
      children: (
        <AddPaymentForm form={form} edit={edit} paymentData={paymentData} />
      ),
    },
    {
      key: '2',
      label: 'Перегляд',
      disabled: currPayment ? false : true,
      children: (
        <ReceiptForm currPayment={currPayment} paymentData={paymentData} />
        // <>
        //   <p>{currPayment?.debit}</p>
        //   <p>{currPayment?.credit}</p>
        //   <p>{currPayment?.description}</p>
        // </>
      ),
    },
  ]

  return (
    <Modal
      open={true}
      title="Додавання рахунку"
      onOk={activeTabKey === '1' ? handleSubmit : closeModal}
      onCancel={() => {
        form.resetFields()
        closeModal()
      }}
      okText={!edit && 'Додати'}
      cancelText={edit ? 'Закрити' : 'Відміна'}
      confirmLoading={isLoading}
      className={s.Modal}
    >
      <Tabs activeKey={activeTabKey} items={items} onChange={setActiveTabKey} />
    </Modal>
  )
}

export default AddPaymentModal
