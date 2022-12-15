import { StateClients } from '../enums/state-clients';
import { ClientsI } from '../interfaces/clients-i';

export class Clients implements ClientsI {
  id!: number;
  company_name!: string;
  first_name!: string;
  last_name!: string;
  email!: string;
  phone!: number;
  address!: string;
  zip_code!: string;
  city!: string;
  country = 'France';
  state = StateClients.ACTIVE;
}
