using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TimeSheet.Core.ServiceInterfaces;
using TimeSheet.Core.Domain;
namespace TimeSheet.WebApi.Controllers
{
    [Route("api/Client")]
    [ApiController]
    public class ClientController : Controller
    {
        private readonly ILogger<ClientController> _logger;
        private IClientService clientService;

        public ClientController(ILogger<ClientController> logger, IClientService clientService)
        {
            ArgumentNullException.ThrowIfNull(clientService, nameof(clientService));
            _logger = logger;
            this.clientService = clientService;
        }

        [HttpGet("all")]
        public IActionResult GetClients()
        {
            var clients = clientService.GetClients();
            return Ok(clients);
        }
        [HttpPost]
         public IActionResult InsertClients([FromBody] Client client) 
        {
          

            var response = clientService.InsertClient(client);
            if(response) 
            return Ok(response);

            return Ok("Not Added");
                
            
        }
         [HttpGet("name")]
        public IActionResult GetClients(string ClientN)
        {
            var clients = clientService.GetClientsByName(ClientN);
            return Ok(clients);
        }
        [HttpGet("{id}")]
        public IActionResult GetOneClient( int id)
        {
            var client= clientService.GetClientById(id);
             return Ok(client);
        }
        [HttpDelete("{id}")]
        public IActionResult DeleteClient(int id)
        {
            var clientOne = clientService.DeleteClient(id);
        
             return Ok(clientOne);
        }
         [HttpPut("{id}")]
        public IActionResult UpdateClientID(int id,Client client)
        {
            var response = clientService.UpdateClient(id,client);
            return Ok(response);
                
            
        }
    }
}