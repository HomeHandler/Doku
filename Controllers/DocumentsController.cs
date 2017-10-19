using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using dokuweb.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace dokuweb.Controllers
{
    [Route("api/documents")]
    public class DocumentsController : Controller
    {
        private static int Id = 1;
        private static List<Document> Documents = new List<Document>
        {
            new Document
                {
                    Id = Id++.ToString(),
                    Name = "FM transzmitter",
                    Added = new DateTime(2016,5,4),
                    Expires = null,
                    Keywords = new string[]{"auto", "garancia"}
                }
        };

        [Route("")]
        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<Document>), 200)]
        public IActionResult GetDocuments()
        {
            return Ok(Documents);
        }

        [Route("")]
        [HttpPost]
        [ProducesResponseType(200)]
        public IActionResult CreateDocument([FromBody]DocumentCreateModel model)
        {
            var doc = new Document
            {
                Id = Id++.ToString(),
                Name = model.Name,
                Keywords = model.Keywords,
                Expires = model.Expires,
                Added = DateTime.UtcNow
            };

            Documents.Add(doc);

            return Ok();
        }
    }
}
