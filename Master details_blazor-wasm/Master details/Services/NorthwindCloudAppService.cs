using System.Net.Http.Json;

namespace Master_details.NorthwindCloudApp
{
    public class NorthwindCloudAppService: INorthwindCloudAppService
    {
        private readonly HttpClient _http;

        public NorthwindCloudAppService(HttpClient http)
        {
            _http = http;
        }

        public async Task<List<Order>> GetOrder()
        {
            using HttpRequestMessage request = new HttpRequestMessage(HttpMethod.Get, new Uri("https://northwindcloud.azurewebsites.net/api/orders", UriKind.RelativeOrAbsolute));
            using HttpResponseMessage response = await _http.SendAsync(request).ConfigureAwait(false);
            if (response.IsSuccessStatusCode)
            {
                return await response.Content.ReadFromJsonAsync<List<Order>>().ConfigureAwait(false);
            }

            return new List<Order>();
        }

        public async Task<List<Order_Detail>> GetOrder_Detail()
        {
            using HttpRequestMessage request = new HttpRequestMessage(HttpMethod.Get, new Uri("https://northwindcloud.azurewebsites.net/api/order_details", UriKind.RelativeOrAbsolute));
            using HttpResponseMessage response = await _http.SendAsync(request).ConfigureAwait(false);
            if (response.IsSuccessStatusCode)
            {
                return await response.Content.ReadFromJsonAsync<List<Order_Detail>>().ConfigureAwait(false);
            }

            return new List<Order_Detail>();
        }
    }
}