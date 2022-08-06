namespace PMS.Entities.ProblemEntities
{
    public class Problem
    {
        public int Id { get; set; }
        public string Barcode { get; set; }
        public string Description { get; set; }
        public DateTime ReportedDate { get; set; }
        public string ReportedBy { get; set; }
    }
}