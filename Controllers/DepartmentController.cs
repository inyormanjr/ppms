using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PMS.Data;
using PMS.Entities.DepartmentEntities;

namespace PMS.Controllers
{
    public class DepartmentController : ApiBaseController
    {
        private readonly PMSDbContext __context;
        private readonly IMapper __mapper;
        public DepartmentController(PMSDbContext _context, IMapper _mapper)
        {
            this.__mapper = _mapper;
            this.__context = _context;
        }

        [HttpGet]
        [Authorize]
        public async Task<List<Department>> GetAll() {
            return await this.__context.Department.ToListAsync();
        }

        [HttpGet("{id}")]
        [Authorize]
        public async Task<Department> GetById(int id)
        {
            return await this.__context.Department.FindAsync(id);
        }

        [HttpPost]
        [Authorize]
        public async Task<Department> Create(Department department)
        {
            var result = await this.__context.Department.AddAsync(department);
            await this.__context.SaveChangesAsync();
            return department;
        }
        

    }
}