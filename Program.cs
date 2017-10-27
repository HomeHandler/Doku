using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace dokuweb
{
    public class Program
    {
        public static void Main(string[] args)
        {
            BuildWebHost(args).Run();
        }

        public static IWebHost BuildWebHost(string[] args)
        {
            var contentroot = Path.Combine(Directory.GetCurrentDirectory(), "src");

            System.Console.WriteLine(contentroot.ToString());

            return WebHost.CreateDefaultBuilder(args)
                    .UseStartup<Startup>()
                    //.UseContentRoot("src")
                    .UseUrls("http://localhost:5000")
                    .Build();
        }
    }
}
