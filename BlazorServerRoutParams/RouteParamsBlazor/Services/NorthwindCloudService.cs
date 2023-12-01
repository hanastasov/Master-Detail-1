using System.Net.Http.Json;
using RouteParamsBlazor.Models.NorthwindCloud;

namespace RouteParamsBlazor.NorthwindCloud
{
    public class NorthwindCloudService: INorthwindCloudService
    {
        private readonly HttpClient _http;

        public NorthwindCloudService(HttpClient http)
        {
            _http = http;
        }

        public async Task<List<Customer>> GetCustomerList()
        {
            using HttpRequestMessage request = new HttpRequestMessage(HttpMethod.Get, new Uri("https://northwindcloud.azurewebsites.net/api/customers", UriKind.RelativeOrAbsolute));
            using HttpResponseMessage response = await _http.SendAsync(request).ConfigureAwait(false);
            if (response.IsSuccessStatusCode)
            {
                return await response.Content.ReadFromJsonAsync<List<Customer>>().ConfigureAwait(false);
            }

            return new List<Customer>();
        }

        public async Task<List<CustomerOrdersResult>> GetCustomerOrdersResultList(string customerId = "ALFKI")
        {
            using HttpRequestMessage request = new HttpRequestMessage(HttpMethod.Get, new Uri($"https://northwindcloud.azurewebsites.net/api/customer_orders/{customerId}", UriKind.RelativeOrAbsolute));
            using HttpResponseMessage response = await _http.SendAsync(request).ConfigureAwait(false);
            if (response.IsSuccessStatusCode)
            {
                return await response.Content.ReadFromJsonAsync<List<CustomerOrdersResult>>().ConfigureAwait(false);
            }

            return new List<CustomerOrdersResult>();
        }
    }
}
