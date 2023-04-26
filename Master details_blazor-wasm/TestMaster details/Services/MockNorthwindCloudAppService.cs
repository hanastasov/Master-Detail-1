namespace Master_details.NorthwindCloudApp
{
    public class MockNorthwindCloudAppService : INorthwindCloudAppService
    {
        public Task<List<Order>> GetOrder()
        {
            return Task.FromResult<List<Order>>(new());
        }

        public Task<List<Order_Detail>> GetOrder_Detail()
        {
            return Task.FromResult<List<Order_Detail>>(new());
        }
    }
}