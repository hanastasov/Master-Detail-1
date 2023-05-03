namespace Master_details.Models
{
    public class EmployeeModel
    {
        public int EmployeeID { get; set; }

        public string AvatarUrl { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Title { get; set; }

        public Address Address { get; set; }
    }
}
