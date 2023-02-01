import { StatesUsecase } from '../usecases/states-usecase.js'

export class StatesController {
  async handle(request, response) {
    try {
      const statesUsecase = new StatesUsecase()
      const states = await statesUsecase.execute()

      return response.status(200).json(states)
    } catch (err) {
      return response.status(500).json({
        error: {
          statusCode: 500,
          message: 'Internal server error',
        },
      })
    }
  }
}
