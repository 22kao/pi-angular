import { Phone } from './phone';
import { Address } from './address';

export class Company extends Address {
    id: number;
    name: string;
    document: string;
    email: string;
    phones: Phone;
    addess: Address;
}
