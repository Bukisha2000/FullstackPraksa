using TimeSheet.Core.Domain;
using TimeSheet.Core.RepositoryInterfaces;
using TimeSheet.Core.ServiceInterfaces;

namespace TimeSheet.Services.Implementation
{
    public class CountryService : ICountryService
    {

        private ICountryRepository countryRepository;

        private Country country;

        public CountryService(ICountryRepository countryRepository)
        {
            this.countryRepository = countryRepository;
        }

        public IEnumerable<Country> GetCountries()
        {
            var countries = countryRepository.GetAll();
            return countries;
        }

        public Country GetCountry(int id)
        {
            
             var countries = countryRepository.GetCountryById(id);
            return countries;
        }

        public bool InsertCountry(Country country)
        {
            var response = countryRepository.InsertCountry(country);
            return response;
            
        }

        public bool UpdateCountry(int id,Country country)
        {
             var response = countryRepository.UpdateCountry(id,country);
            return response;
        }

        public bool DeleteCountry(int id)
        {
             var response = countryRepository.DeleteCountry(id);
            return true;
        }
    }
}