namespace PMS.interfaces
{
    public interface IServiceBase<T>
    {
        public Task<T> Add(T t);
        public Task<T> Update(int id, T t);
        public Task<T> GetById(int id);
        public Task<List<T>> GetMany(int skip, int take);
        public Task<bool> Delete(int id);
    }
}