using Master_Detail.Models.Northwind.Models;

namespace Master_Detail.Models.Northwind
{
    public class EmployeeType
    {
        public int EmployeeID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Title { get; set; }
        public string TitleOfCourtesy { get; set; }
        public string BirthDate { get; set; }
        public string HireDate { get; set; }
        public AddressType Address { get; set; }
        public int ManagerID { get; set; }
        public string Notes { get; set; }
        public string AvatarUrl { get; set; }
    }
}
