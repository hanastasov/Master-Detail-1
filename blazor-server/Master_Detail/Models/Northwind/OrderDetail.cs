namespace Master_Detail.Models.Northwind
{
    public class OrderDetail
    {
        public int OrderID { get; set; }
        public int ProductID { get; set; }
        public double UnitPrice { get; set; }
        public double Quantity { get; set; }
        public double Discount { get; set; }
        public Order Order { get; set; }
        public Product Product { get; set; }
    }
}
