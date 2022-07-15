using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TimeSheet.Core.Domain;

namespace TimeSheet.Core.RepositoryInterfaces
{
    public interface ICountryRepository
    {
        IEnumerable<Country> GetAll();
        Country GetCountryById(int id);
        bool InsertCountry(Country country);
        bool UpdateCountry(int id,Country country);
        bool DeleteCountry(int id);
        void SaveChanges();
    }
}