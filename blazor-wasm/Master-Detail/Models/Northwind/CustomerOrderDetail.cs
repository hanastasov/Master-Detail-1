namespace Master_Detail.Models.Northwind
{
    public class CustomerOrderDetail
    {
        public string ProductName { get; set; }
        public double UnitPrice { get; set; }
        public int Quantity { get; set; }
        public int Discount { get; set; }
        public double ExtendedPrice { get; set; }
    }
}

