//namespace Master_details.Data.Financial; // Razor won't recognize third level namespace
namespace Master_details.Financial;

public class BoxOfficeRevenueType
{
    public string Franchise { get; set; }
    public double TotalWorldBoxOfficeRevenue { get; set; }
    public double HighestGrossingMovieInSeries { get; set; }
}
