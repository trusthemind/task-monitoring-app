import { Button, Empty, Radio } from 'antd'
import { useEffect, useState } from 'react'
import { TaskStatuses } from '../../../../utils/constants'
import { useGetAllTaskQuery } from '../../../api/taskApi/task.api'
import { ITask } from '../../../modules/models/Task'
import CardOneTask from '../../CardOneTask'
import s from './style.module.scss'

const Filter: React.FC = () => {
  const { data } = useGetAllTaskQuery('')
  const tasks = data?.data

  const [taskList, setTaskList] = useState(tasks)
  const [filter, setFilter] = useState('')

  const resetFilters = () => {
    setFilter('')
    setTaskList(tasks)
  }
  useEffect(() => {
    setTaskList(tasks?.filter((task: ITask) => task.status === filter))
  }, [filter, tasks])

  useEffect(() => {
    setTaskList(tasks)
  }, [])

  return (
    <>
      <div className={s.Filtration}>
        <Radio.Group
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          optionType="button"
          buttonStyle="solid"
        >
          {Object.entries(TaskStatuses).map((key) => {
            return (
              <Radio
                key={key[1]}
                value={key[1]}
                className={s.Filter}
                onClick={() => resetFilters()}
              >
                {key[1]}
              </Radio>
            )
          })}
        </Radio.Group>
      </div>
      {taskList?.length !== 0 ? (
        <div className={s.TasksList}>
          {taskList &&
            taskList.map((task: ITask, index) => {
              return <CardOneTask key={index} task={task} />
            })}
        </div>
      ) : filter?.length === 0 && tasks?.length !== 0 ? (
        <div className={s.TasksList}>
          {tasks &&
            tasks.map((task: ITask, index) => {
              return <CardOneTask key={index} task={task} />
            })}
        </div>
      ) : (
        <Empty description="Немає даних" />
      )}
    </>
  )
}

export default Filter