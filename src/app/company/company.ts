import { Phone } from './phone';
import { Address } from './address';

export class Company  {
    id: number;
    name: string;
    document: string;
    email: string;
    phones: Phone;
    addess: Address;
}
