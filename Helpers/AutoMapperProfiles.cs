using AutoMapper;
using PMS.DTO;
using PMS.Entities;
using PMS.Entities.EskeysEntities;

namespace PMS.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<AppUser, UserDTO>().ReverseMap();
            CreateMap<EskeyReceivableCreateDTO, EskeyReceivable>().ReverseMap();
        }
    }
}