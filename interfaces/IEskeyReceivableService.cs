using PMS.Entities.EskeysEntities;

namespace PMS.interfaces
{
    public interface IEskeyReceivableService:IServiceBase<EskeyReceivable>
    {
        public  Task<List<EskeyReceivable>> GetEskeyDeliveryReceived(int skip, int take);
        public Task<List<EskeyReceivable>> GetEskeyDeliveryReceivable(int skip, int take);
    }
}