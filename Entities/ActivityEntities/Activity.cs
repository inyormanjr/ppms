using PMS.Entities.DepartmentEntities;

namespace PMS.Entities.ActivityEntities
{
    public class Activity
    {
       
        public int Id { get; set; }
        public int DepartmentId { get; set; }
        public Department? Department { get; set; }
        public string Subject { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public int ActivityTypeId { get; set; }
        public ActivityType? Type { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public int CreatedById { get; set; }
        public AppUser? CreatedBy { get; set; }
        public ActivityLevel Level { get; set; } = ActivityLevel.Normal;
        public List<ActivityAssignee> Assignees { get; set; }
        public List<ActivityComment> Comments { get; set; }

    }
}