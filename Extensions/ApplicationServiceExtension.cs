using Microsoft.EntityFrameworkCore;
using PMS.Data;
using PMS.Helpers;
using PMS.interfaces;
using PMS.services;

namespace PMS.Extensions
{
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config){
            services.AddScoped<ITokenService, TokenService>();
            services.AddScoped<IAccountService, AccountService>();
            services.AddScoped<IEskeyReceivableService, EskeyReceivableService>();
            services.AddAutoMapper(typeof(AutoMapperProfiles).Assembly);
            services.AddDbContext<PMSDbContext>(options =>
            {
                options.UseSqlServer(config.GetConnectionString("DefaultConnection"));
            });
            return services;
        }
    }
}