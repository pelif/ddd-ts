import Customer from "../../../customer/entity/customer";
import CustomerRepositoryInterface from "../../../customer/repository/customer-repository.interface";
import { InputListCustomerDto, OutputListCustomerDto } from "./list.customer.dto";

export default class ListCustomerUseCase {
    private customerRepository: CustomerRepositoryInterface;

    constructor(customerRepository: CustomerRepositoryInterface) {
        this.customerRepository = customerRepository;
    }

    async execute(input: InputListCustomerDto): Promise<OutputListCustomerDto> {
        const customers = await this.customerRepository.findAll();
        return OutputMapper.toOutput(customers);
    }
}

class OutputMapper {
    static toOutput(customer: Customer[]): OutputListCustomerDto {
        return {
            customers: customer.map((cust) => ({
                id: cust.id,
                name: cust.name,
                address: {
                    street: cust.address.street,
                    number: cust.address.number,
                    zip: cust.address.zip,
                    city: cust.address.city,
                },
            })),
        }
    }

}