using PMS.Entities.EskeysEntities;

namespace PMS.DTO
{
    public class EskeyReceivableCreateDTO
    {

        public int Id { get; set; }
        public int Count { get; set; }
        public string location { get; set; } = String.Empty;
        public DateTime DateProcessed { get; set; }
        public DateTime ArrivalDateTime { get; set; }
        public DateTime DateTimeReceived { get; set; }
        public int OperatorId { get; set; }
        public string Charter { get; set; } = String.Empty;
        public List<EskeyReceivableDetail> EskeyReceivableDetails { get; set; } = new List<EskeyReceivableDetail>();
    }
}