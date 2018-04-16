import { Router } from 'express'
import { fetchConversation } from '../shared/api/message'
import { fetchFirstThread } from '../shared/api/thread'

const getRoutes = () => {
  return Router()
    .use('/messages', async (req, res, next) => {
      const thread = await fetchFirstThread()
      const { storeInitiaState } = res || {}
      res.storeInitiaState = { ...storeInitiaState, thread }
      next()
    })
    .use('/messages/:username', async (req, res, next) => {
      const conversation = await fetchConversation(req.params.username)
      const { storeInitiaState } = res || {}
      res.storeInitiaState = { ...storeInitiaState, conversation }
      next()
    })
}

export default getRoutes
