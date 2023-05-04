namespace JournalAPI.Models
{
    public class JournalItem
    {
        public long Id { get; set; }
        public DateTime EntryTime { get; set; }
        public string? Entry { get; set; }
        public string? Emotion { get; set; }
        public string? Secret { get; set; }
    }
}
