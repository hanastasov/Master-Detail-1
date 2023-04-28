//namespace Master_details.Data.NorthwindCloudApp; // Razor won't recognize third level namespace
namespace Master_details.NorthwindCloudApp;

public class Order_Detail
{
    public int OrderID { get; set; }
    public int ProductID { get; set; }
    public double UnitPrice { get; set; }
    public int Quantity { get; set; }
    public double Discount { get; set; }
}
