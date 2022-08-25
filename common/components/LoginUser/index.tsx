import { useState } from 'react'
import Router from 'next/router'
import { Avatar, Button, Card, Image } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { signIn, signOut, useSession } from 'next-auth/react'
import { AppRoutes } from '../../../utils/constants'
import classNames from 'classnames'
import s from './style.module.scss'
import { useGetUserByEmailQuery } from 'common/api/userApi/user.api'
import router from 'next/router'

const LoginUser: React.FC = () => {
  const [menuActive, setMenuActive] = useState(false)

  const { data: session } = useSession()
  const { data } = useGetUserByEmailQuery(`${session?.user?.email}`)
  const user = data?.data

  if (!session?.user) {
    return (
      <div className={s.SignButtons}>
        <Button
          onClick={() => signIn()}
          ghost
          type="primary"
          className={s.Button}
        >
          Увійти
        </Button>
        <Button
          onClick={() => {
            router.push(AppRoutes.AUTH_SIGN_UP)
          }}
          ghost
          type="primary"
          className={s.Button}
        >
          Зареєструватися
        </Button>
      </div>
    )
  }

  return (
    <>
      <div
        className={s.Avatar}
        onClick={() => setMenuActive((prevState) => !prevState)}
      >
        <Avatar
          icon={<UserOutlined />}
          src={
            <Image
              src={session?.user?.image || undefined}
              preview={false}
              style={{ width: 32 }}
              alt="UserImg"
            />
          }
        />
      </div>
      <div
        onClick={() => setMenuActive(false)}
        className={classNames(s.Info, { [s.Active]: menuActive })}
      >
        <Card onClick={(e) => e.stopPropagation()} className={s.Card}>
          <Avatar
            size={100}
            icon={<UserOutlined />}
            src={
              <Image
                src={session?.user?.image || undefined}
                preview={false}
                alt="UserImg"
              />
            }
          />

          <h2>{session?.user?.name}</h2>
          <p>{session?.user?.email}</p>
          {user?.role === 'Admin' && (
            <Button type="link" onClick={() => Router.push(AppRoutes.ADMIN)}>
              Панель адміна
            </Button>
          )}
          <div className={s.Buttons}>
            <Button
              type="link"
              block
              onClick={() => Router.push(AppRoutes.PROFILE)}
            >
              Мій профіль
            </Button>
            <Button type="link" block onClick={() => signOut()}>
              Вийти
            </Button>
          </div>
        </Card>
      </div>
    </>
  )
}

export default LoginUser
