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

        public async Task<List<EskeyReceivable>> GetMany(int skip, int take)
        {
            var result = await __dbContext.EskeyReceivable.OrderByDescending(x=> x.ArrivalDateTime).Skip(skip).Take(take).ToListAsync();
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