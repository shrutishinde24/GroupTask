using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BackendAPI.Models;

namespace BackendAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class distribution_queueController : ControllerBase
    {
        private readonly LobContext _context;

        public distribution_queueController(LobContext context)
        {
            _context = context;
        }

        // GET: api/distribution_queue
        [HttpGet]
        public async Task<ActionResult<IEnumerable<distribution_queue>>> Getdistribution_Queues()
        {
            return await _context.distribution_Queues.ToListAsync();
        }

        // GET: api/distribution_queue/5
        [HttpGet("{id}")]
        public async Task<ActionResult<distribution_queue>> Getdistribution_queue(int id)
        {
            var distribution_queue = await _context.distribution_Queues.FindAsync(id);

            if (distribution_queue == null)
            {
                return NotFound();
            }

            return distribution_queue;
        }

        // PUT: api/distribution_queue/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> Putdistribution_queue(int id, distribution_queue distribution_queue)
        {
            if (id != distribution_queue.Id)
            {
                return BadRequest();
            }

            _context.Entry(distribution_queue).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!distribution_queueExists(id))
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

        // POST: api/distribution_queue
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<distribution_queue>> Postdistribution_queue(distribution_queue distribution_queue)
        {
            _context.distribution_Queues.Add(distribution_queue);
            await _context.SaveChangesAsync();

            return CreatedAtAction("Getdistribution_queue", new { id = distribution_queue.Id }, distribution_queue);
        }

        // DELETE: api/distribution_queue/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Deletedistribution_queue(int id)
        {
            var distribution_queue = await _context.distribution_Queues.FindAsync(id);
            if (distribution_queue == null)
            {
                return NotFound();
            }

            _context.distribution_Queues.Remove(distribution_queue);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool distribution_queueExists(int id)
        {
            return _context.distribution_Queues.Any(e => e.Id == id);
        }
    }
}
