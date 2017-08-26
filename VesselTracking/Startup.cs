using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(VesselTracking.Startup))]
namespace VesselTracking
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
