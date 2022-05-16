using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PMS.DTO;
using PMS.Entities.EskeysEntities;
using PMS.interfaces;
using System.Web;
namespace PMS.Controllers
{
    public class EskeysController : ApiBaseController
    {
        private readonly IEskeyReceivableService _eskeyReceivableService;
        private readonly IMapper _mapper;
        private readonly ITokenService tokenService;
        private readonly IAccountService _accountService;

        public EskeysController(IEskeyReceivableService eskeyReceivableService, IMapper mapper, ITokenService tokenService, IAccountService accountService)
        {
            this._accountService = accountService;
            this._mapper = mapper;
            this.tokenService = tokenService;
            this._eskeyReceivableService = eskeyReceivableService;
        }


        [HttpGet]
        [Authorize]
        public async Task<ActionResult<List<EskeyReceivable>>> GetEskeysReceivables(int skip, int take = 10)
        {
            var ret = await _eskeyReceivableService.GetMany(skip, take);
            return ret;
        }
        [HttpPost]
        [Authorize]
        public async Task<ActionResult<EskeyReceivableCreateDTO>> CreateNewEskeyReceivables( EskeyReceivableCreateDTO eskeyReceivableDTO)
        {
            var mapped = _mapper.Map<EskeyReceivable>(eskeyReceivableDTO);
        
            var result = await this._eskeyReceivableService.Add(mapped);
            return _mapper.Map<EskeyReceivableCreateDTO>(result);
        }

        [HttpPut("Update/{id}")]
        [Authorize]
        public async Task<ActionResult<EskeyReceivableCreateDTO>> UpdateEskeyReceivable(int id, EskeyReceivableCreateDTO eskeyReceivableCreateDTO)
        {
            var mapped = _mapper.Map<EskeyReceivable>(eskeyReceivableCreateDTO);
            var result = await this._eskeyReceivableService.Update(id, mapped);
            return _mapper.Map<EskeyReceivableCreateDTO>(result);
        }
    }
}