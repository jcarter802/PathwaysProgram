using Microsoft.EntityFrameworkCore;
using JournalAPI;
using JournalAPI.Controllers;
using JournalAPI.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

namespace TestJournal
{

    [TestClass]
    public class JournalTests
    {
        [TestMethod]
        public void TestMethod1()
        {

            var builder = WebApplication.CreateBuilder();

            // Add services to the container.

            builder.Services.AddControllers();
            builder.Services.AddDbContext<JournalContext>(opt =>
                opt.UseInMemoryDatabase("Journal"));
            builder.Services.AddEndpointsApiExplorer();
            //builder.Services.AddSwaggerGen();

            var app = builder.Build();

            app.UseDefaultFiles();
            app.UseStaticFiles();

            app.UseHttpsRedirection();

            app.UseAuthorization();

            app.MapControllers();

            app.Run();

            new JournalItemDTO
            {
                Id = 1,
                Entry = "Ate a burger",
                Emotion = "Happy",
                EntryTime = new DateTime(2023, 05, 02)
            };
        }
    }
}