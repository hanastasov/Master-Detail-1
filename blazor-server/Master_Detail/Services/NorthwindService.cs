using System.Net.Http.Json;
using Master_Detail.Models.Northwind;

namespace Master_Detail.Northwind
{
    public class NorthwindService : INorthwindService
    {
        private readonly HttpClient _http;

        public NorthwindService(HttpClient http)
        {
            _http = http;
        }

        public async Task<List<EmployeeType>> GetEmployeeTypes()
        {
            using HttpRequestMessage request = new HttpRequestMessage(HttpMethod.Get, new Uri("/static-data/northwind-employees-type.json", UriKind.RelativeOrAbsolute));
            using HttpResponseMessage response = await _http.SendAsync(request).ConfigureAwait(false);
            if (response.IsSuccessStatusCode)
            {
                return await response.Content.ReadFromJsonAsync<List<EmployeeType>>().ConfigureAwait(false);
            }

            return new List<EmployeeType>();
        }
        public async Task<List<Customer>> GetCustomers()
        {
            using HttpRequestMessage request = new HttpRequestMessage(HttpMethod.Get, new Uri("https://northwindcloud.azurewebsites.net/api/customers", UriKind.RelativeOrAbsolute));
            using HttpResponseMessage response = await _http.SendAsync(request).ConfigureAwait(false);
            if (response.IsSuccessStatusCode)
            {
                return await response.Content.ReadFromJsonAsync<List<Customer>>().ConfigureAwait(false);
            }

            return new List<Customer>();
        }

        public async Task<List<Employee>> GetEmployees()
        {
            using HttpRequestMessage request = new HttpRequestMessage(HttpMethod.Get, new Uri("https://northwindcloud.azurewebsites.net/api/employees", UriKind.RelativeOrAbsolute));
            using HttpResponseMessage response = await _http.SendAsync(request).ConfigureAwait(false);
            if (response.IsSuccessStatusCode)
            {
                return await response.Content.ReadFromJsonAsync<List<Employee>>().ConfigureAwait(false);
            }

            return new List<Employee>();
        }

        public async Task<List<Order>> GetOrders()
        {
            using HttpRequestMessage request = new HttpRequestMessage(HttpMethod.Get, new Uri("https://northwindcloud.azurewebsites.net/api/orders", UriKind.RelativeOrAbsolute));
            using HttpResponseMessage response = await _http.SendAsync(request).ConfigureAwait(false);
            if (response.IsSuccessStatusCode)
            {
                return await response.Content.ReadFromJsonAsync<List<Order>>().ConfigureAwait(false);
            }

            return new List<Order>();
        }

        public async Task<List<Order>> GetCustomerOrders(string customerId)
        {
            using HttpRequestMessage request = new HttpRequestMessage(HttpMethod.Get, new Uri($"https://northwindcloud.azurewebsites.net/api/customer_orders/{customerId}", UriKind.RelativeOrAbsolute));
            using HttpResponseMessage response = await _http.SendAsync(request).ConfigureAwait(false);
            if (response.IsSuccessStatusCode)
            {
                return await response.Content.ReadFromJsonAsync<List<Order>>().ConfigureAwait(false);
            }

            return new List<Order>();
        }

        public async Task<List<OrderDetail>> GetOrderDetails()
        {
            using HttpRequestMessage request = new HttpRequestMessage(HttpMethod.Get, new Uri("https://northwindcloud.azurewebsites.net/api/order_details", UriKind.RelativeOrAbsolute));
            using HttpResponseMessage response = await _http.SendAsync(request).ConfigureAwait(false);
            if (response.IsSuccessStatusCode)
            {
                return await response.Content.ReadFromJsonAsync<List<OrderDetail>>().ConfigureAwait(false);
            }

            return new List<OrderDetail>();
        }

        public async Task<List<CustomerOrderDetail>> GetCustomerOrderDetails(int? orderId)
        {
            using HttpRequestMessage request = new HttpRequestMessage(HttpMethod.Get, new Uri($"https://northwindcloud.azurewebsites.net/api/customer_order_details/{orderId}", UriKind.RelativeOrAbsolute));
            using HttpResponseMessage response = await _http.SendAsync(request).ConfigureAwait(false);
            if (response.IsSuccessStatusCode)
            {
                return await response.Content.ReadFromJsonAsync<List<CustomerOrderDetail>>().ConfigureAwait(false);
            }

            return new List<CustomerOrderDetail>();
        }
    }
}