namespace PMS.DTO
{
    public class EskeyReceivableCreateDTO
    {

        public int Id { get; set; }
        public int Count { get; set; }
        public DateTime ArrivalDateTime { get; set; }
        public int CollectorId { get; set; }
    }
}