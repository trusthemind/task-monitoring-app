import Notification from '@common/modules/models/Notification'
import type { NextApiRequest, NextApiResponse } from 'next'
import start, { Data } from '../api.config'

start()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'POST':
      try {
        const notification = await Notification.create(req.body)
        return res.status(201).json({ success: true, data: notification })
      } catch (error) {
        return res.status(400).json({ success: false, error: error })
      }
  }
}
