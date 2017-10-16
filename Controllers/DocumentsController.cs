using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using dokuweb.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace dokuweb.Controllers
{
    [Route("api/[controller]")]
    public class DocumentsController : Controller
    {
        // GET: api/values
        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<Document>), 200)]
        public IActionResult Get()
        {
            var docs = new List<Document>
            {
                new Document
                {
                    Id = "1",
                    Name = "FM transzmitter",
                    Added = new DateTime(2016,5,4),
                    Expires = null,
                    Keywords = new string[]{"auto", "garancia"}
                }
            };

            return Ok(docs);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
