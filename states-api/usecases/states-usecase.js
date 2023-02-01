import { readFile } from 'fs/promises'

export class StatesUsecase {
  async findStates() {
    const states = await this.getStates()

    const result = states.map((state) => {
      return {
        uf: state.uf,
        population: state.population,
      }
    })
    return result
  }

  async findPopulationByUf({ uf }) {
    const states = await this.getStates()
    const result = states.find((state) => state.uf === uf.toUpperCase())
    return result
  }

  async findAllStates() {
    const states = await this.getStates()

    return states
  }

  async getStates() {
    const { states } = JSON.parse(
      await readFile(new URL('../database/states.json', import.meta.url)),
    )
    return states
  }
}
