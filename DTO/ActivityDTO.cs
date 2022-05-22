using PMS.Entities.ActivityEntities;

namespace PMS.DTO
{
    public class ActivityDTO
    {
        public int Id { get; set; }
        public string Subject { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public int ActivityTypeId { get; set; }
        public string TypeName { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public int CreatedById { get; set; }
        public string? CreatedByName { get; set; }
        public string? CreatedByUsername { get; set; }
        public ActivityLevel Level { get; set; } = ActivityLevel.Normal;
        public List<ActivityAssignee>? Assignees { get; set; } = new List<ActivityAssignee>();
    }
}