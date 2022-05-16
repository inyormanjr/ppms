using Microsoft.AspNetCore.Mvc;
using PMS.Data;

namespace PMS.Controllers
{
    public class BuggyController : ApiBaseController
    {
        private readonly PMSDbContext _context;
        public BuggyController(PMSDbContext context)
        {
            this._context = context;

        }

        public ActionResult<string> GetSecret() {
            return "secret";
        }
    }
}