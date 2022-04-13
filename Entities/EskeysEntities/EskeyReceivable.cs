namespace PMS.Entities.EskeysEntities
{
    public class EskeyReceivable
    {
        public int Id { get; set; }
        public int Count { get; set; }
        public DateTime ArrivalDateTime { get; set; }
        public int CollectorId { get; set; }
        public AppUser Collector { get; set; } = new AppUser();
    }
}