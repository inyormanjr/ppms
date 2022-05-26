using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PMS.Data;
using PMS.DTO;
using PMS.Entities;
using PMS.Entities.ActivityEntities;

namespace PMS.Controllers
{
    public class ActivityController : ApiBaseController
    {
        private readonly PMSDbContext __context;
        private readonly IMapper _mapper;
        public ActivityController(PMSDbContext _context, IMapper _mapper)
        {
            this.__context = _context;
            this._mapper = _mapper;
        }

        [HttpGet]
        [Authorize]
        public async Task<ActionResult<List<ActivityDTO>>> Get(int skip =0, int take = 100)
        {
            var result = await __context.Activity.Include(x => x.Type).Include(x=> x.Department)
                .Include(x => x.Assignees)
                .ThenInclude(x => x.Assignee)
                .Include(x => x.CreatedBy).OrderByDescending(x=> x.Id).Skip(skip).Take(take).ToListAsync();
            var mapped = _mapper.Map<List<ActivityDTO>>(result);
            return mapped;

        }

        [HttpGet("assignees")]
        [Authorize]
        public async Task<ActionResult<List<ActivityAssigneeDTO>>> GetAssignees()
        {
            var result = await __context.ActivityAssignee.Include(x=> x.Assignee).ToListAsync();
            var mapped = _mapper.Map<List<ActivityAssigneeDTO>>(result);
            return mapped;

        }



        [HttpGet("{id}")]
        [Authorize]
        public async Task<ActionResult<Activity>> GetById(int id)
        {
            return await __context.Activity.FindAsync(id);
        }

        [HttpPost]
        [Authorize]
        public async Task<ActionResult<ActivityDTO>> Create(ActivityDTO activity)
        {
            var mapped = _mapper.Map<Activity>(activity);
            var userId = this.User.Claims.FirstOrDefault().Value;
            mapped.CreatedById = int.Parse(userId);
            await __context.Activity.AddAsync(mapped);
            await __context.SaveChangesAsync();
            return activity;
        }

        [HttpPost("comment")]
        [Authorize]
        public async Task<ActionResult<ActivityCommentDTO>> CreateComment(ActivityCommentCreateDTO comment)
        {
            var mapped = _mapper.Map<ActivityComment>(comment);
            var userId = this.User.Claims.FirstOrDefault().Value;
            mapped.CommentorId = int.Parse(userId);
            await __context.ActivityComment.AddAsync(mapped);
            await __context.SaveChangesAsync();
            var fetched = await  __context.ActivityComment.Include(x => x.Commentor).FirstOrDefaultAsync(x => x.Id == mapped.Id);
            var remapped = _mapper.Map<ActivityCommentDTO>(fetched);
            return remapped;
        }

        [HttpGet("comment/{activityId}")]
        [Authorize]
        public async Task<ActionResult<List<ActivityCommentDTO>>> GetCommentByActivityId(int activityId)
        {
            var result = await __context.ActivityComment.Include(x=> x.Commentor).Where(x => x.ActivityId == activityId).ToListAsync();
            var mapped = _mapper.Map<List<ActivityCommentDTO>>(result);
            return mapped;

        }

        [HttpPut("{id}")]
        [Authorize]
        public async Task<ActionResult<Activity>> Update(int id, Activity activity)
        {
            __context.Activity.Update(activity);
            await __context.SaveChangesAsync();
            return activity;
        }

        //References
        [HttpGet("activityType")]
        [Authorize]
        public async Task<ActionResult<List<ActivityType>>> GetActivityType()
        {
            return await __context.ActivityType.ToListAsync();
        }

        [HttpGet("activityType/{id}")]
        [Authorize]
        public async Task<ActionResult<ActivityType>> GetActivityTypeById(int id)
        {
            return await __context.ActivityType.FindAsync(id);
        }

        [HttpPost("activityType")]
        [Authorize]
        public async Task<ActionResult<ActivityType>> CreateActivityType(ActivityType activityType)
        {
            await __context.ActivityType.AddAsync(activityType);
            await __context.SaveChangesAsync();
            return activityType;
        }




    }
}