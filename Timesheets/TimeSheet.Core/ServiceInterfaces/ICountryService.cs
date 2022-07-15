using TimeSheet.Core.Domain;

namespace TimeSheet.Core.ServiceInterfaces
{
    public interface ICountryService
    {
        IEnumerable<Country> GetCountries();
        Country GetCountry(int id);
        bool InsertCountry(Country country);
        bool UpdateCountry(int id,Country country);
        bool DeleteCountry(int id);
    }
}