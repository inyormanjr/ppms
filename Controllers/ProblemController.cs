using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PMS.Data;
using PMS.Entities.ProblemEntities;

namespace PMS.Controllers
{
    public class ProblemController:ApiBaseController
    {
        private readonly IMapper mapper;
        private readonly PMSDbContext context;

        public ProblemController(IMapper mapper, PMSDbContext context){
            this.mapper = mapper;
            this.context = context;
        }

        [HttpGet()]
        public async Task<ActionResult<List<Problem>>> Get(int skip, int take){
            return await this.context.Problem.Skip(skip).Take(take).ToListAsync();

        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Problem>> Get(int id) {
            return await this.context.Problem.FirstOrDefaultAsync(x => x.Id == id) ?? new Problem();
        }

        [HttpPost]
        public async Task<ActionResult<Problem>> Post(Problem problem){
            var result = await this.context.Problem.AddAsync(problem);
            await this.context.SaveChangesAsync();
            return Ok(problem);
        }


    }
}