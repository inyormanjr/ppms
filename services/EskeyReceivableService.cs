using Microsoft.EntityFrameworkCore;
using PMS.Data;
using PMS.Entities.EskeysEntities;
using PMS.interfaces;

namespace PMS.services
{
    public class EskeyReceivableService : IEskeyReceivableService
    {
        private readonly PMSDbContext __dbContext;
        public EskeyReceivableService(PMSDbContext _dbContext)
        {
            __dbContext = _dbContext;
        }

        public async Task<EskeyReceivable> Add(EskeyReceivable t)
        {
           var result = await __dbContext.EskeyReceivable.AddAsync(t);
            await __dbContext.SaveChangesAsync();
            return t;
        }

        public async Task<bool> Delete(int id)
        {
            var result = await __dbContext.EskeyReceivable.FirstOrDefaultAsync(x=> x.Id == id);
            if(result == null) return false;
            __dbContext.EskeyReceivable.Remove(result);
             await __dbContext.SaveChangesAsync();
            return true;
        }

        public async Task<EskeyReceivable> GetById(int id)
        {
            return await __dbContext.EskeyReceivable.Where(x=> x.Id == id).Include(x=> x.EskeyReceivableDetails).FirstOrDefaultAsync();
        }

        public async Task<List<EskeyReceivable>> GetEskeyDeliveryReceivable(int skip, int take)
        {
            return await this.__dbContext.EskeyReceivable.Where(x => x.DateTimeReceived == null).OrderByDescending(x => x.Id).Skip(skip).Take(take).ToListAsync();
        }

        public async Task<List<EskeyReceivable>> GetEskeyDeliveryReceived(int skip, int take)
        {
            return await this.__dbContext.EskeyReceivable.Include(x=> x.EskeyReceivableDetails).Where(x => x.DateTimeReceived != null).OrderByDescending(x => x.Id).Skip(skip).Take(take).ToListAsync();
        }

        public async Task<List<EskeyReceivable>> GetMany(int skip, int take)
        {
            var result = await __dbContext.EskeyReceivable.OrderByDescending(x=> x.DateProcessed).Skip(skip).Take(take).ToListAsync();
            return result;
        }

        public async Task<EskeyReceivable> Update(int id, EskeyReceivable t)
        {
            var result =  __dbContext.EskeyReceivable.Count(x => x.Id == id);
            if (result == 0) { return null; };
            var val = __dbContext.EskeyReceivable.Update(t);
            await __dbContext.SaveChangesAsync();
            return t;
        }
    }
}