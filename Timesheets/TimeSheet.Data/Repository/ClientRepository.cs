using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using TimeSheet.Core.Domain;
using TimeSheet.Core.RepositoryInterfaces;
using TimeSheet.Data.Database;
using TimeSheet.Data.Entity;
// using TimeSheet.Services.Implementation;

namespace TimeSheet.Data.Repository
{
    public class ClientRepository : IClientRepository
    {
        private readonly ApplicationContext applicationContext;
        private readonly IMapper _mapper;
        private DbSet<ClientEntity> clients;

        public ClientRepository(ApplicationContext applicationContext, IMapper mapper)
        {
            this.applicationContext = applicationContext;
            _mapper = mapper;
            clients = applicationContext.Set<ClientEntity>();
        }

        public IEnumerable<Client> GetAll()
        {
            var clientEntities = clients.AsEnumerable().ToList();
            return clientEntities.Select(_mapper.Map<Client>);
        }

        public IEnumerable<Client> GetAllByName(string ClientN)
        {
            var clientEntities = clients.Where(client => client.Name.StartsWith(ClientN)).AsEnumerable().ToList();
            return clientEntities.Select(_mapper.Map<Client>);
        }

        public Client GetClientById(int id)
        {
           var client = clients.FirstOrDefault(a => a.Id == id);
            Client mappedClient = _mapper.Map<Client>(client);
           
          return mappedClient;
        }

        public bool InsertClient(Client client)
        {
             if(client == null)
            {
                // throw new ArgumentNullException("entity");
                return false;
            }
           ClientEntity mappedClient = _mapper.Map<ClientEntity>(client);
            clients.Add(mappedClient);
            SaveChanges();
           
            return true;
        }

        public bool UpdateClient(int id,Client client)
        {
           var OneClient = clients.SingleOrDefault(x => x.Id == id);
             
          ClientEntity mappedClient = _mapper.Map<ClientEntity>(OneClient);

          if(!client.Name.Equals("")){
            mappedClient.Name = client.Name;
          }
          if(!client.Address.Equals("")){
              mappedClient.Address = client.Address;
          }
          if(!client.City.Equals("")){
               mappedClient.City = client.City;
          }
          if(!client.PostalCode.Equals(0)){
              mappedClient.PostalCode = client.PostalCode;
          }
          if(!client.CountryID.Equals("")){
               mappedClient.CountryID = client.CountryID;
          }
          
          
         
          
         
            clients.Update(mappedClient);
             SaveChanges();
            return true;
        }

        public bool DeleteClient(int id)
        {
           var clientOne = clients.FirstOrDefault(a => a.Id == id);

           if(clientOne == null){
               
                return false;
           }
            // Client mappedClient = _mapper.Map<Client>(clientOne);
           clients.Remove(clientOne);
           SaveChanges();
          return true;
        }

        public void SaveChanges()
        {
             applicationContext.SaveChanges();
        }
    }
}