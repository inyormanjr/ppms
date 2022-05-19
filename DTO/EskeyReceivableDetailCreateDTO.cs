namespace PMS.DTO
{
    public class EskeyReceivableDetailCreateDTO
    {
        public int Id { get; set; }
        public int EskeyNo { get; set; }
        public string Description { get; set; } = String.Empty;
        public string Temp { get; set; } = "N/A";
        public string Initials { get; set; } = String.Empty;
    }
}