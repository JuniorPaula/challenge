import axios from 'axios'

export class StatesUsecase {
  constructor() {
    this.BaseUrl = 'http://localhost:4000'
    this.api = axios
  }

  async execute() {
    const { data: states } = await this.api.get(`${this.BaseUrl}/states/load`)
    return states
  }
}
