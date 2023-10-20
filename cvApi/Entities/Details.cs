using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace MongoDbDemo.Entities
{
    public class Details
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
      
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Phone { get; set; }
        public string EMail { get; set; }
        public string EDUName { get; set; }
        public string EDUFaculty { get; set; }
        public string EDULevel { get; set; }
        public string EDUStatus { get; set; }
        public string WorkName { get; set; }
        public string WorkPosition { get; set; }
        public string WorkLoad { get; set; }
        public string WorkTime { get; set; }
        public string SkilDesc { get; set; }
        public string SkilType { get; set; }
        public string SkilAchievement { get; set; }

        public string AddrCountry { get; set; }
        public string AddrIndex { get; set; }
        public string AddrCity { get; set; }
        public string AddrStreet { get; set; }
        public string AddrNr { get; set; }


    }
}
