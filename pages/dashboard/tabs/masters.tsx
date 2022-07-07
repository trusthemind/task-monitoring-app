import React from 'react'
import { List, Avatar } from 'antd'
import { StarOutlined } from '@ant-design/icons'
import styles from '../style.module.scss'

interface Props {
  data: {
    id: number
    name: string
    avatar: React.ReactNode
    rate: number
    special: string
  }[]
}

const Masters: React.FC<Props> = ({ data }) => (
  <List
    className={`${styles.List} ${styles.Masters}`}
    dataSource={data}
    renderItem={(item) => (
      <List.Item className={styles.ListItem}>
        <List.Item.Meta
          avatar={<Avatar size={40} src={item.avatar} />}
          title={item.name}
          description={item.special}
        />

        <div style={{ gap: '0.5rem' }}>
          {item.rate}/5
          <StarOutlined style={{ fontSize: '20px' }} />
        </div>
      </List.Item>
    )}
  />
)

export default Masters