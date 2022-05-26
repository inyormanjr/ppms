using AutoMapper;
using PMS.DTO;
using PMS.Entities;
using PMS.Entities.ActivityEntities;
using PMS.Entities.EskeysEntities;

namespace PMS.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<AppUser, UserDTO>().ReverseMap();
            CreateMap<UserProfileDTO, AppUser>().ReverseMap();
            CreateMap<EskeyReceivableCreateDTO, EskeyReceivable>().ReverseMap();
            CreateMap<EskeyReceivableDetailCreateDTO, EskeyReceivableDetail>().ReverseMap();
            CreateMap<EskeyReceivableViewDTO, EskeyReceivable>().ReverseMap();

            CreateMap<AppUser, ActivityAssigneeDTO>()
            .ForMember( x => x.AssigneeId, b => b.MapFrom(x => x.Id))
            .ForMember(x => x.AssigneeUserName, 
            b => b.MapFrom(x => x.UserName));
            CreateMap<ActivityAssigneeDTO, ActivityAssignee>().ReverseMap();
            CreateMap<ActivityAssigneeCreateDTO, ActivityAssignee>().ReverseMap();
            CreateMap<Activity, ActivityDTO>()
            .ForMember(
             x => x.DepartmentName,
             b => b.MapFrom(x => (x.Department != null) ? x.Department.DepartmentName : "")
             )
            .ForMember(
             x => x.TypeName,
             b => b.MapFrom(x => (x.Type != null) ? x.Type.TypeName : "")
             )
            .ForMember(
             x=> x.CreatedByName,
             b=> b.MapFrom(x=> (x.CreatedBy != null) ? x.CreatedBy.Surname + ',' + x.CreatedBy.GivenName : "No Name Provided" ))
             .ForMember(
             x=> x.CreatedByUsername, 
             b=> b.MapFrom(x=> (x.CreatedBy != null) ? x.CreatedBy.UserName : "No Email Provided"));
            CreateMap<ActivityDTO, Activity>();

            CreateMap<ActivityComment, ActivityCommentDTO>().ForMember(x => x.CommentorUserName, b => b.MapFrom(x => x.Commentor.UserName));
            CreateMap<ActivityCommentCreateDTO, ActivityComment>().ReverseMap();
            CreateMap<ActivityCommentDTO, ActivityComment>();

        }
    }
}