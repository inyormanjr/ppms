using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PMS.Data;
using PMS.DTO;
using PMS.Entities.EskeysEntities;
using PMS.interfaces;
using PMS.services;

namespace PMS.Controllers
{
    public class EskeysController : ApiBaseController
    {
        private readonly IEskeyReceivableService _eskeyReceivableService;
        private readonly IMapper _mapper;
        public EskeysController(IEskeyReceivableService eskeyReceivableService, IMapper mapper)
        {
            this._mapper = mapper;
            this._eskeyReceivableService = eskeyReceivableService;
        }


        [HttpGet]
        [Authorize]
        public async Task<ActionResult<List<EskeyReceivable>>> GetEskeysReceivables(int skip, int take)
        {
            var ret = await _eskeyReceivableService.GetMany(skip, take);
            return ret;
        }
        [HttpPost("Create")]
        [Authorize]
        public async Task<ActionResult<EskeyReceivableCreateDTO>> CreateNewEskeyReceivables(EskeyReceivableCreateDTO eskeyReceivableDTO)
        {
            var mapped = _mapper.Map<EskeyReceivable>(eskeyReceivableDTO);
             var result =  await this._eskeyReceivableService.Add(mapped);
             return _mapper.Map<EskeyReceivableCreateDTO>(result);
        }

        [HttpPut("Update/{id}")]
        [Authorize]
        public async Task<ActionResult<EskeyReceivableCreateDTO>> UpateEskeyReceivable(int id, EskeyReceivableCreateDTO eskeyReceivableCreateDTO) {
            var mapped = _mapper.Map<EskeyReceivable>(eskeyReceivableCreateDTO);
            var result = await this._eskeyReceivableService.Update(id, mapped);
            return _mapper.Map<EskeyReceivableCreateDTO>(result);
        }
    }
}