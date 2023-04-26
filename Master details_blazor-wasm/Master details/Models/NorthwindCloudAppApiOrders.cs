//namespace Master_details.Data.NorthwindCloudApp; // Razor won't recognize third level namespace
namespace Master_details.NorthwindCloudApp;

public class Order
{
    public double OrderID { get; set; }
    public string CustomerID { get; set; }
    public double EmployeeID { get; set; }
    public DateTime OrderDate { get; set; }
    public DateTime RequiredDate { get; set; }
    public DateTime ShippedDate { get; set; }
    public double ShipVia { get; set; }
    public double Freight { get; set; }
    public string ShipName { get; set; }
    public string ShipAddress { get; set; }
    public string ShipCity { get; set; }
    public string ShipRegion { get; set; }
    public string ShipPostalCode { get; set; }
    public string ShipCountry { get; set; }
    public Customer Customer { get; set; }
    public Employee Employee { get; set; }
    public Shipper ShipViaNavigation { get; set; }
    public OrderDetail[] Order_Details { get; set; } = Array.Empty<OrderDetail>();
}

public class Customer
{
    public string CustomerID { get; set; }
    public string CompanyName { get; set; }
    public string ContactName { get; set; }
    public string ContactTitle { get; set; }
    public string Address { get; set; }
    public string City { get; set; }
    public string Region { get; set; }
    public string PostalCode { get; set; }
    public string Country { get; set; }
    public string Phone { get; set; }
    public string Fax { get; set; }
    public Order[] Orders { get; set; } = Array.Empty<Order>();
    public CustomerDemographic[] CustomerTypes { get; set; } = Array.Empty<CustomerDemographic>();
}

public class CustomerDemographic
{
    public string CustomerTypeID { get; set; }
    public string CustomerDesc { get; set; }
    public Customer[] Customers { get; set; } = Array.Empty<Customer>();
}

public class Employee
{
    public double EmployeeID { get; set; }
    public string LastName { get; set; }
    public string FirstName { get; set; }
    public string Title { get; set; }
    public string TitleOfCourtesy { get; set; }
    public DateTime BirthDate { get; set; }
    public DateTime HireDate { get; set; }
    public string Address { get; set; }
    public string City { get; set; }
    public string Region { get; set; }
    public string PostalCode { get; set; }
    public string Country { get; set; }
    public string HomePhone { get; set; }
    public string Extension { get; set; }
    public string Photo { get; set; }
    public string Notes { get; set; }
    public double ReportsTo { get; set; }
    public string PhotoPath { get; set; }
    public Employee ReportsToNavigation { get; set; }
    public Employee[] InverseReportsToNavigation { get; set; } = Array.Empty<Employee>();
    public Order[] Orders { get; set; } = Array.Empty<Order>();
    public Territory[] Territories { get; set; } = Array.Empty<Territory>();
}

public class Territory
{
    public string TerritoryID { get; set; }
    public string TerritoryDescription { get; set; }
    public double RegionID { get; set; }
    public Region Region { get; set; }
    public Employee[] Employees { get; set; } = Array.Empty<Employee>();
}

public class Region
{
    public double RegionID { get; set; }
    public string RegionDescription { get; set; }
    public Territory[] Territories { get; set; } = Array.Empty<Territory>();
}

public class Shipper
{
    public double ShipperID { get; set; }
    public string CompanyName { get; set; }
    public string Phone { get; set; }
    public Order[] Orders { get; set; } = Array.Empty<Order>();
}

public class OrderDetail
{
    public double OrderID { get; set; }
    public double ProductID { get; set; }
    public double UnitPrice { get; set; }
    public double Quantity { get; set; }
    public double Discount { get; set; }
    public Order Order { get; set; }
    public Product Product { get; set; }
}

public class Product
{
    public double ProductID { get; set; }
    public string ProductName { get; set; }
    public double SupplierID { get; set; }
    public double CategoryID { get; set; }
    public string QuantityPerUnit { get; set; }
    public double UnitPrice { get; set; }
    public double UnitsInStock { get; set; }
    public double UnitsOnOrder { get; set; }
    public double ReorderLevel { get; set; }
    public bool Discontinued { get; set; }
    public Category Category { get; set; }
    public Supplier Supplier { get; set; }
    public OrderDetail[] Order_Details { get; set; } = Array.Empty<OrderDetail>();
}

public class Category
{
    public double CategoryID { get; set; }
    public string CategoryName { get; set; }
    public string Description { get; set; }
    public string Picture { get; set; }
    public Product[] Products { get; set; } = Array.Empty<Product>();
}

public class Supplier
{
    public double SupplierID { get; set; }
    public string CompanyName { get; set; }
    public string ContactName { get; set; }
    public string ContactTitle { get; set; }
    public string Address { get; set; }
    public string City { get; set; }
    public string Region { get; set; }
    public string PostalCode { get; set; }
    public string Country { get; set; }
    public string Phone { get; set; }
    public string Fax { get; set; }
    public string HomePage { get; set; }
    public Product[] Products { get; set; } = Array.Empty<Product>();
}
