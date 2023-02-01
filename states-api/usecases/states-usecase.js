import { readFile } from 'fs/promises'

export class StatesUsecase {
  async execute() {
    const { states } = JSON.parse(
      await readFile(new URL('../database/states.json', import.meta.url)),
    )

    const result = states.map((el) => {
      return {
        uf: el.uf,
        population: el.population,
      }
    })
    return result
  }
}
