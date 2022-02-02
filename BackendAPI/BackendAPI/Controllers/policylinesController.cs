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
    [Route("[controller]")]
    [ApiController]
    public class policylinesController : ControllerBase
    {
        private readonly LobContext _context;

        public policylinesController(LobContext context)
        {
            _context = context;
        }

        // GET: api/policylines
        [HttpGet]
        public async Task<ActionResult<IEnumerable<policyline>>> Getpolicylines()
        {
            return await _context.policylines.ToListAsync();
        }

        // GET: api/policylines/5
        [HttpGet("{id}")]
        public async Task<ActionResult<policyline>> Getpolicyline(int id)
        {
            var policyline = await _context.policylines.FindAsync(id);

            if (policyline == null)
            {
                return NotFound();
            }

            return policyline;
        }

        // PUT: api/policylines/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> Putpolicyline(int id, policyline policyline)
        {
            if (id != policyline.Id)
            {
                return BadRequest();
            }

            _context.Entry(policyline).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!policylineExists(id))
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

        // POST: api/policylines
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<policyline>> Postpolicyline(policyline policyline)
        {
            _context.policylines.Add(policyline);
            await _context.SaveChangesAsync();

            return CreatedAtAction("Getpolicyline", new { id = policyline.Id }, policyline);
        }

        // DELETE: api/policylines/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Deletepolicyline(int id)
        {
            var policyline = await _context.policylines.FindAsync(id);
            if (policyline == null)
            {
                return NotFound();
            }

            _context.policylines.Remove(policyline);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool policylineExists(int id)
        {
            return _context.policylines.Any(e => e.Id == id);
        }
    }
}
