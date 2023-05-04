namespace JournalAPI.Models
{
    public class JournalItemDTO
    {
        public long Id { get; set; }
        public DateTime EntryTime { get; set; }
        public string? Entry { get; set; }
        public string? Emotion { get; set; }
    }
}
