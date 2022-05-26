namespace PMS.DTO
{
    public class ActivityAssigneeDTO
    {
        public int AssigneeId { get; set; }
        public string AssigneeUserName { get; set; } = string.Empty;
    }

    public class ActivityAssigneeCreateDTO {
        public int AssigneeId { get; set; }
        public string AssigneeUserName { get; set; } = string.Empty;
    }
}