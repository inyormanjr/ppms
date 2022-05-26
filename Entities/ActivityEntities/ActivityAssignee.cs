namespace PMS.Entities.ActivityEntities
{
    public class ActivityAssignee
    {
        public int Id { get; set; }
        public int AssigneeId { get; set; }
        public AppUser Assignee { get; set; }
        public int ActivityId { get; set; }
        public Activity? Activity { get; set; }
    }
}