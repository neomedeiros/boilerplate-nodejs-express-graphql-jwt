import { authenticate } from '@modules/auth/services/auth.service'
import Auth from './types/auth'

const resolvers = {
  Mutation: {
    async authenticate(data, context): Promise<Auth> {
      return await authenticate(data)
    }
  }
}

export default resolvers
