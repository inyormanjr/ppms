namespace PMS.DTO
{
    public class ActivityCommentDTO
    {
        public int Id { get; set; }

        public int ActivityId { get; set; }
        public int CommentorId { get; set; }
        public string CommentorUserName { get; set; }
        public string Comment { get; set; }
        public DateTime CreatedAt { get; set; }
    }

    public class ActivityCommentCreateDTO {
        public int Id { get; set; }
        public int ActivityId { get; set; }
        public int CommentorId { get; set; }
        public string CommentorUserName { get; set; }
        public string Comment { get; set; }
    }
}