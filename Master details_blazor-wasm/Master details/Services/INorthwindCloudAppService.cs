namespace Master_details.NorthwindCloudApp
{
    public interface INorthwindCloudAppService
    {
        Task<List<Order>> GetOrder();

        Task<List<Customer>> GetCustomers();

        Task<List<Order_Detail>> GetOrder_Detail();
    }
}
