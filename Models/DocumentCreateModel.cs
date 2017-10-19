using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dokuweb.Models
{
    public class DocumentCreateModel
    {
        public string Name { get; set; }
        public string[] Keywords { get; set; }
        public DateTime? Expires { get; set; }
    }
}
