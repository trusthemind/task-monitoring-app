/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import type { NextApiRequest, NextApiResponse } from 'next'
import start, { Data } from 'pages/api/api.config'
import { getServerSession } from 'next-auth'
import { authOptions } from '@pages/api/auth/[...nextauth]'
import User from '@common/modules/models/User'
import { Roles } from '@utils/constants'
import RealEstate from '@common/modules/models/RealEstate'

start()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const session = await getServerSession(req, res, authOptions)
  const user = await User.findOne({ email: session?.user?.email })
  const isAdmin = user?.role === Roles.ADMIN

  if (!isAdmin) {
    return res.status(400).json({ success: false, message: 'not allowed' })
  }

  switch (req.method) {
    case 'GET':
      try {
        const realEstates = await RealEstate.find({})
          .sort({ data: -1 })
          .limit(req.query.limit)

        return res.status(200).json({
          success: true,
          data: realEstates,
        })
      } catch (error) {
        return res.status(400).json({ success: false })
      }

    case 'POST':
      try {
        // TODO: body validation
        const realEstate = await RealEstate.create(req.body)
        return res.status(200).json({ success: true, data: realEstate })
      } catch (error) {}
  }
}