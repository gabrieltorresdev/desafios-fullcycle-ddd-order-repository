import RepositoryInterface from "../../@shared/repository/repository-interface";
import Order from "../../checkout/entity/order";

export default interface OrderRepositoryInterface
  extends RepositoryInterface<Order> {}
