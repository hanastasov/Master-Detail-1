using Master_details.Models;

namespace Master_details.NorthwindCloudApp
{
    public interface INorthwindCloudAppService
    {
        Task<List<Order>> GetOrder();

        Task<List<Customer>> GetCustomers();

        Task<List<EmployeeModel>> GetEmployees();

        Task<List<Order_Detail>> GetOrder_Detail();
    }
}
