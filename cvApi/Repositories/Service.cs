using Microsoft.Extensions.Options;
using MongoDB.Driver;
using MongoDbDemo.Configurations;
using MongoDbDemo.Entities;

namespace MongoDbDemo.Repositories
{
    public class Service :IService
    {
        private readonly IMongoCollection<Details> productCollection;

        public Service(
         IOptions<DBSettings> productDatabaseSetting)
        {
            var mongoClient = new MongoClient(
                productDatabaseSetting.Value.ConnectionString);

            var mongoDatabase = mongoClient.GetDatabase(
                productDatabaseSetting.Value.DatabaseName);

            productCollection = mongoDatabase.GetCollection<Details>(
                productDatabaseSetting.Value.ProductCollectionName);
        }

        public async Task<List<Details>> ListAsync()
        {
            return await productCollection.Find(_ => true).ToListAsync();
        }

        public async Task<Details> GetByIdAsync(string productId)
        {
            return await productCollection.Find(x => x.Id == productId).FirstOrDefaultAsync();
        }

        public async Task AddAsync(Details productDetails)
        {
            await productCollection.InsertOneAsync(productDetails);
        }

        public async Task UpdateAsync(string productId, Details productDetails)
        {
             await productCollection.ReplaceOneAsync(x => x.Id == productId, productDetails);
        }

        public async Task DeleteAsync(string productId)
        {
            await productCollection.DeleteOneAsync(x => x.Id == productId);
        }
    }
}
