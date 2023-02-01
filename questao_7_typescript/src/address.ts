import { AddressProtocol } from './protocols/address-protocol';

export class Address implements AddressProtocol {
    constructor(
        private readonly logradouro: string,
        private readonly complemento: Date
    ) {}

    getLogradouro(): string {
        return this.logradouro
    }
    getComplemento(): string {
        return this.complemento.toDateString();
    }
    getCompleteAddress(): string {
        return this.logradouro + this.complemento
    }
    
}