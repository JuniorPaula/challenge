import { Address } from './address'
import { AddressProtocol } from './protocols/address-protocol'

export class Client {
    constructor(
        private readonly name: string,
        private readonly brithday: Date, 
        private readonly address: AddressProtocol
    ) {}

    getname(): string {
        return this.name
    }

    getAge(): number {
        const data = this.brithday
        return data.getDate()
    }

    get calculateAge(): number {
        return this.getAge()
    }
}

const data = new Date('04-04-1996')

const address = new Address('Rua dos bobos', new Date())
const clinet = new Client('João', data, address)

console.log('Name', clinet.getname()) 
console.log('Age',  clinet.getAge()) 