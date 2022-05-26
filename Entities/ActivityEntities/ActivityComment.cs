namespace PMS.Entities.ActivityEntities
{
    public class ActivityComment
    {
        public int Id { get; set; }
        
        public int CommentorId { get; set; }
        public AppUser Commentor { get; set; }
        public string Comment { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public int ActivityId { get; set; }
        public Activity Activity { get; set; }

    }
}