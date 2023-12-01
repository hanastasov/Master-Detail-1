using RouteParamsBlazor.Models.NorthwindCloud;

namespace RouteParamsBlazor.NorthwindCloud
{
    public interface INorthwindCloudService
    {
        Task<List<Customer>> GetCustomerList();
        Task<List<CustomerOrdersResult>> GetCustomerOrdersResultList(string customerId = "ALFKI");
    }
}
