using Microsoft.AspNetCore.Mvc;

namespace PMS.Base
{
    public class UnAuthorized : UnauthorizedResult
    {
       
        public UnAuthorized(string message)
        {
            this.Message = message;

        }
        public string Message { get; set; }
    }
}