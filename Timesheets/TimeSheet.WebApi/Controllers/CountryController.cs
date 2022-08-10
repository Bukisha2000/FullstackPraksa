using System;
using Microsoft.AspNetCore.Mvc;
using TimeSheet.Core.Domain;
using TimeSheet.Core.ServiceInterfaces;

namespace TimeSheet.WebApi.Controllers
{
    [Route("api/Country")]
    [ApiController]
    public class CountryController : Controller
    {
        private readonly ILogger<CountryController> _logger;
        private ICountryService countryService;

        public CountryController(ILogger<CountryController> logger, ICountryService countryService)
        {
            _logger = logger;
            ArgumentNullException.ThrowIfNull(countryService, nameof(countryService));
            this.countryService = countryService;
        }
// ("all")
 
         [HttpGet("all")]
        public IActionResult GetCountries()
        {
            var countries = countryService.GetCountries();
            return Ok(countries);
            
            
        }
        [HttpPost]
        public IActionResult InsertCountries([FromBody] Country country)
        {
            var response = countryService.InsertCountry(country);
            if(response) 
            return Ok(response);

            return Ok("Not Added");
                
            
        }
         [HttpGet("{id}")]
        public IActionResult GetCountryById(int id)
        {
            var countries = countryService.GetCountry(id);
            return Ok(countries);
            
            
        }
         [HttpDelete("{id}")]
        public IActionResult DeleteCountryID(int id)
        {
            var countryOne = countryService.DeleteCountry(id);
        
             return Ok(countryOne);
        }
        [HttpPut("{id}")]
        public IActionResult UpdateCountries(int id,Country country)
        {
            var response = countryService.UpdateCountry(id,country);
            return Ok(response);
                
            
        }
    }
}