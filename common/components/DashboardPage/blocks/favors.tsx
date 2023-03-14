import React, { FC, ReactElement } from 'react'
import { Alert, message, Popconfirm, Spin, Table } from 'antd'
import FavorCardHeader from '@common/components/UI/FavorCardHeader'
import TableCard from '@common/components/UI/TableCard'
import {
  useDeleteFavorMutation,
  useGetAllFavorsQuery,
} from '@common/api/favorApi/favor.api'
import { dateToDefaultFormat } from '@common/assets/features/formatDate'
import { IExtendedFavor } from '@common/api/favorApi/favor.api.types'
import { DeleteOutlined } from '@ant-design/icons'
import { useGetUserByEmailQuery } from '@common/api/userApi/user.api'
import { AppRoutes, Roles } from '@utils/constants'
import { Tooltip } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'
import cn from 'classnames'
import s from './style.module.scss'
import { useSession } from 'next-auth/react'

const FavorsBlock = () => {
  const router = useRouter()
  const {
    pathname,
    query: { email },
  } = router
  const { data } = useSession()

  const {
    data: byEmailUser,
    isLoading: byEmailUserLoading,
    isFetching: byEmailUserFetching,
    isError: byEmailUserError,
  } = useGetUserByEmailQuery(email, { skip: !email })
  const {
    data: currUser,
    isLoading: currUserLoading,
    isFetching: currUserFetching,
    isError: currUserError,
  } = useGetUserByEmailQuery(data?.user.email, { skip: !data?.user.email })

  const isAdmin = currUser?.data?.role === Roles.ADMIN

  const {
    data: favors,
    isLoading: favorsLoading,
    isFetching: favorsFetching,
    isError: favorsError,
  } = useGetAllFavorsQuery({
    limit: pathname === AppRoutes.FAVOR ? 200 : 5,
    ...(email || isAdmin
      ? { userId: byEmailUser?.data._id as string }
      : { userId: currUser?.data._id as string }),
  })

  const [deleteFavor, { isLoading: deleteLoading, isError: deleteError }] =
    useDeleteFavorMutation()

  const handleDeleteFavor = async (id: string) => {
    const response = await deleteFavor(id)
    if ('data' in response) {
      message.success('Видалено!')
    } else {
      message.error('Помилка при видаленні рахунку')
    }
  }

  const columns = [
    {
      title: 'Місяць',
      dataIndex: 'date',
      key: 'date',
      width: '15%',
      render: (date) => dateToDefaultFormat(date),
    },
    {
      title: 'Утримання',
      dataIndex: 'orenda',
      key: 'orenda',
      width: '20%',
    },
    {
      title: 'Електрика',
      dataIndex: 'electricPrice',
      key: 'electricPrice',
      width: '20%',
    },
    {
      title: 'Вода',
      dataIndex: 'waterPrice',
      key: 'waterPrice',
      width: '15%',
      ellipsis: true,
    },
    {
      title: 'Інд Інф',
      dataIndex: 'inflaPrice',
      key: 'inflaPrice',
      width: '15%',
      ellipsis: true,
    },
    {
      title: 'Опис',
      dataIndex: 'description',
      key: 'description',
      width: '15%',
      ellipsis: true,
    },
    isAdmin
      ? {
          title: '',
          dataIndex: '',
          width: '15%',
          render: (_, favor: IExtendedFavor) => (
            <div className={s.popconfirm}>
              <Popconfirm
                title={`Ви впевнені що хочете видалити оплату від ${dateToDefaultFormat(
                  favor?.date as unknown as string
                )}?`}
                onConfirm={() => handleDeleteFavor(favor?._id)}
                cancelText="Відміна"
                disabled={deleteLoading}
              >
                <DeleteOutlined className={s.icon} />
              </Popconfirm>
            </div>
          ),
        }
      : { width: '0' },
  ]

  let content: ReactElement

  if (byEmailUserError || deleteError || favorsError || currUserError) {
    content = <Alert message="Помилка" type="error" showIcon closable />
  } else {
    content = (
      <Table
        columns={columns}
        dataSource={favors}
        pagination={false}
        bordered
        loading={
          byEmailUserLoading ||
          byEmailUserFetching ||
          currUserLoading ||
          currUserFetching ||
          favorsLoading ||
          favorsFetching
        }
        rowKey="_id"
      />
    )
  }

  return <TableCard title={<FavorCardHeader />}>{content}</TableCard>
}
export default FavorsBlock