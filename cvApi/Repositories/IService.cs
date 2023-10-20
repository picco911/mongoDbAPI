using MongoDbDemo.Entities;

namespace MongoDbDemo.Repositories
{
    public interface IService
    {
        public Task<List<Details>> ListAsync();

        public Task<Details> GetByIdAsync(string id);

        public Task AddAsync(Details details);

        public Task UpdateAsync(string id,Details details);

        public Task DeleteAsync(String id);
    }
}
