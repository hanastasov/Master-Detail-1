namespace Master_Detail.Northwind;

public class EmployeesType
{
    public double EmployeeID { get; set; }
    public string LastName { get; set; }
    public string FirstName { get; set; }
    public string Title { get; set; }
    public string TitleOfCourtesy { get; set; }
    public DateTime BirthDate { get; set; }
    public DateTime HireDate { get; set; }
    public AddressType Address { get; set; }
    public double ManagerID { get; set; }
    public string Notes { get; set; }
    public object[] TerritoryIDs { get; set; } = Array.Empty<object>();
    public string AvatarUrl { get; set; }
}

public class AddressType
{
    public string Street { get; set; }
    public string City { get; set; }
    public string Region { get; set; }
    public string PostalCode { get; set; }
    public string Country { get; set; }
    public string Phone { get; set; }
}
