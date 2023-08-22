using Master_Detail.Models.Northwind;

namespace Master_Detail.Northwind
{
    public interface INorthwindService
    {
        Task<List<EmployeeType>> GetEmployeeTypes();

        Task<List<Customer>> GetCustomers();

        Task<List<Employee>> GetEmployees();

        Task<List<Order>> GetOrders();

        Task<List<Order>> GetCustomerOrders(string customerId);

        Task<List<OrderDetail>> GetOrderDetails();

        Task<List<CustomerOrderDetail>> GetCustomerOrderDetails(int? orderId);
    }
}