namespace PMS.Entities.ActivityEntities
{
    public class ActivityAssignee
    {
        public int Id { get; set; }
        public int AssigneId { get; set; }
        public AppUser Assignee { get; set; } = new AppUser();
        public int ActivityId { get; set; }
        public Activity Activity { get; set; } = new Activity();
    }
}