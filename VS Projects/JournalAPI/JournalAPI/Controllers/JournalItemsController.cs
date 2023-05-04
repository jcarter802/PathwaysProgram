using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using JournalAPI.Models;

namespace JournalAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JournalItemsController : ControllerBase
    {
        private readonly JournalContext _context;

        public JournalItemsController(JournalContext context)
        {
            _context = context;
        }

        // GET: api/JournalItems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<JournalItemDTO>>> GetJournalItems()
        {
          if (_context.JournalItems == null)
          {
              return NotFound();
          }
            return await _context.JournalItems.ToListAsync();
        }

        [HttpGet("emotion/{emotion}/date/{entryDate}")]
        public async Task<List<JournalItemDTO>> GetJournalItemByFilters(string emotion, string entryDate)
        {
            var journalItem = await _context.JournalItems.Where(e => e.Emotion != null && e.Emotion.ToLower() == emotion.ToLower() && e.EntryTime.ToString("MMddyyyy") == entryDate).ToListAsync();

            return journalItem;
        }

        // GET: api/JournalItems/emotion/Happy
        // Must come before id search if I do not want id to be required part of route (e.g. journalItems/id/1 vs journalItems/1)
        [HttpGet("emotion/{emotion}")]
        public async Task<List<JournalItemDTO>> GetJournalItemByEmotion(string emotion)
        {
            var journalItem = await _context.JournalItems.Where(e => e.Emotion != null && e.Emotion.ToLower() == emotion.ToLower()).ToListAsync();

            return journalItem;
        }

        [HttpGet("date/{entryDate}")]
        public async Task<List<JournalItemDTO>> GetJournalItemByDate(string entryDate)
        {
            var journalItem = await _context.JournalItems.Where(e => e.EntryTime.ToString("MMddyyyy") == entryDate).ToListAsync();

            return journalItem;
        }

        // GET: api/JournalItems/5
        [HttpGet("{id}")]
        public async Task<ActionResult<JournalItemDTO>> GetJournalItem(long id)
        {
            if (_context.JournalItems == null)
            {
                return NotFound();
            }
            var journalItem = await _context.JournalItems.FindAsync(id);

            if (journalItem == null)
            {
                return NotFound();
            }

            return journalItem;
        }

        // PUT: api/JournalItems/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutJournalItem(long id, JournalItemDTO journalItem)
        {
            if (id != journalItem.Id)
            {
                return BadRequest();
            }

            _context.Entry(journalItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!JournalItemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/JournalItems
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<JournalItemDTO>> PostJournalItem(JournalItemDTO journalItem)
        {
          if (_context.JournalItems == null)
          {
              return Problem("Entity set 'JournalContext.JournalItems' is null.");
          }
            _context.JournalItems.Add(journalItem);
            await _context.SaveChangesAsync();

            //return CreatedAtAction("GetJournalItem", new { id = journalItem.Id }, journalItem);
            return CreatedAtAction(nameof(GetJournalItem), new { id = journalItem.Id }, journalItem);
        }

        // DELETE: api/JournalItems/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteJournalItem(long id)
        {
            if (_context.JournalItems == null)
            {
                return NotFound();
            }
            var journalItem = await _context.JournalItems.FindAsync(id);
            if (journalItem == null)
            {
                return NotFound();
            }

            _context.JournalItems.Remove(journalItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool JournalItemExists(long id)
        {
            return (_context.JournalItems?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
