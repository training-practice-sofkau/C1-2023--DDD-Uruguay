import { OrderDomainEntityBase } from "../entities"
import { BenefitedDomainEntityBase, KitDomainEntityBase, EmployedDomainEntityBase } from "../entities/order";

export interface IOrderDomainService<T extends OrderDomainEntityBase = OrderDomainEntityBase> {

    createOrder(order: T): Promise<T>;
    getOrder(orderId: string): Promise<OrderDomainEntityBase>;
    addBenefited(benefited: BenefitedDomainEntityBase): Promise<BenefitedDomainEntityBase>;
    addKit(kit: KitDomainEntityBase): Promise<KitDomainEntityBase>;
    addEmployed(employed: EmployedDomainEntityBase): Promise<EmployedDomainEntityBase>;
    updateBenefited(orderId: string, newBenefited: BenefitedDomainEntityBase): Promise<BenefitedDomainEntityBase>;
    updateKit(orderId: string, newKit: KitDomainEntityBase): Promise<KitDomainEntityBase>;
    updateEmployed(orderId: string, newEmployed: EmployedDomainEntityBase): Promise<EmployedDomainEntityBase>;
    changeStatus(orderId: string): Promise<T>;

}