using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;

namespace JournalAPI.Models
{
    public class JournalContext : DbContext
    {
        public JournalContext(DbContextOptions<JournalContext> options)
            : base(options)
        {
        }

        public DbSet<JournalItemDTO> JournalItems { get; set; } = null!;

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    base.OnModelCreating(modelBuilder);
        //    modelBuilder.Entity<JournalItemDTO>().HasData(
        //        new JournalItemDTO { Id = 1, Entry = "Ate a burger", Emotion = "Happy", EntryTime = new DateTime(2023, 05, 02) },
        //        new JournalItemDTO { Id = 2, Entry = "Ate a burger", Emotion = "Happy", EntryTime = new DateTime(2023, 05, 02) }
        //    );
        //}
    }

}