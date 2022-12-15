import { StateOrders } from '../enums/state-orders';
import { Clients } from '../models/clients';

export interface OrderI {
  id: number;
  client: Clients;
  type_presta: string;
  designation: string;
  nb_days: number;
  unit_price: number;
  state: StateOrders;
}
