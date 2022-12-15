import { StateOrders } from '../enums/state-orders';
import { OrderI } from '../interfaces/order-i';
import { Clients } from './clients';

export class Order implements OrderI {
  id!: number;
  client!: Clients;
  type_presta!: string;
  designation!: string;
  nb_days = 5;
  unit_price = 500;
  state = StateOrders.OPTION;
}
