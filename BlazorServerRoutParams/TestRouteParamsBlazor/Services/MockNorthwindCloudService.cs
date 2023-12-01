using RouteParamsBlazor.Models.NorthwindCloud;

namespace RouteParamsBlazor.NorthwindCloud
{
    public class MockNorthwindCloudService : INorthwindCloudService
    {
        public Task<List<Customer>> GetCustomerList()
        {
            return Task.FromResult<List<Customer>>(new());
        }

        public Task<List<CustomerOrdersResult>> GetCustomerOrdersResultList(string customerId)
        {
            return Task.FromResult<List<CustomerOrdersResult>>(new());
        }
    }
}
