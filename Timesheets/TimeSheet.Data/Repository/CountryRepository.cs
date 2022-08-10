using Microsoft.EntityFrameworkCore;
using TimeSheet.Data.Database;
using TimeSheet.Data.Entity;
using AutoMapper;
using TimeSheet.Core.Domain;
using TimeSheet.Core.RepositoryInterfaces;
using System.ComponentModel;
using System.Security.Cryptography.X509Certificates;

namespace TimeSheet.Data.Repository
{
    public class CountryRepository : ICountryRepository
    {

        private readonly ApplicationContext applicationContext;
        private readonly IMapper _mapper;
        private DbSet<CountryEntity> countries;

        public CountryRepository(ApplicationContext applicationContext, IMapper mapper)
        {
            this.applicationContext = applicationContext;
            _mapper = mapper;
            countries = applicationContext.Set<CountryEntity>();
        }

        public IEnumerable<Country> GetAll()
        {
            var countryEntities = countries.AsEnumerable().ToList(); 
            return countryEntities.Select(_mapper.Map<Country>);
        }

        public Country? GetCountryById(int id)
        {
            var OneCountry = countries.SingleOrDefault(x => x.Id == id);
           
            Country mappedCountry = _mapper.Map<Country>(OneCountry);
           
          return mappedCountry;
        }

        public bool InsertCountry(Country country)
        {
            
            if(country == null)
            {
                throw new ArgumentNullException("entity");
                return false;
            }
           CountryEntity mappedCountry = _mapper.Map<CountryEntity>(country);
            countries.Add(mappedCountry);
            SaveChanges();
            return true;
           
        }

        public bool UpdateCountry(int id,Country country)
        {
             var OneCountry = countries.SingleOrDefault(x => x.Id == id);
             
          CountryEntity mappedCountry = _mapper.Map<CountryEntity>(OneCountry);
          mappedCountry.CountryName = country.CountryName;
            countries.Update(mappedCountry);
          SaveChanges();
            return true;
           
        }

        public bool DeleteCountry(int id)
        {
           var CountryOne = countries.FirstOrDefault(a => a.Id == id);
            // Client mappedClient = _mapper.Map<Client>(clientOne);
           countries.Remove(CountryOne);
         SaveChanges();
          return true;
        }

        public void SaveChanges()
        {
             applicationContext.SaveChanges();
        }
    }
}