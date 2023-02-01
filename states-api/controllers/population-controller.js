import { StatesUsecase } from '../usecases/states-usecase.js'

export class PopulationController {
  async handle(request, response) {
    try {
      const { uf } = request.params

      const statesUsecase = new StatesUsecase()
      const state = await statesUsecase.findPopulationByUf({ uf })

      return response.status(200).json(state)
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
