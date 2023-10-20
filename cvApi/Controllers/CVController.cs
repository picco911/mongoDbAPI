using Microsoft.AspNetCore.Mvc;
using MongoDbDemo.Entities;
using MongoDbDemo.Repositories;

namespace MongoDbDemo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CVController : ControllerBase
    {
        private readonly IService service;

        public CVController(IService service) =>
            this.service = service;

        [HttpGet]
        public async Task<List<Details>> Get()
        {
            return await service.ListAsync();
        }

        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<Details>> Get(string id)
        {
            var details = await service.GetByIdAsync(id);

            if (details is null)
            {
                return NotFound();
            }

            return details;
        }

        [HttpPost]
        public async Task<IActionResult> Post(Details details)
        {
            await service.AddAsync(details);

            return CreatedAtAction(nameof(Get), new { id = details.Id }, details);
        }

        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> Update(string id, Details details)
        {
            var detail = await service.GetByIdAsync(id);

            if (detail is null)
            {
                return NotFound();
            }

            details.Id = detail.Id;

            await service.UpdateAsync(id, details);

            return Ok();
        }

        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> Delete(string id)
        {
            var details = await service.GetByIdAsync(id);

            if (details is null)
            {
                return NotFound();
            }

            await service.DeleteAsync(id);

            return Ok();
        }
    }
}
