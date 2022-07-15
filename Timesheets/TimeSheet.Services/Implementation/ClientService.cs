using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TimeSheet.Core.Domain;
using TimeSheet.Core.RepositoryInterfaces;
using TimeSheet.Core.ServiceInterfaces;

namespace TimeSheet.Services.Implementation
{
    public class ClientService : IClientService
    {
        private IClientRepository clientRepository;

        public ClientService(IClientRepository clientRepository)
        {
            this.clientRepository = clientRepository;
        }

        public IEnumerable<Client> GetClients()
        {
            var clients = clientRepository.GetAll();
            return clients;
        }
         public IEnumerable<Client> GetClientsByName(string ClientN)
        {
            var clients = clientRepository.GetAllByName(ClientN);
            return clients;
        }

        public Client GetClientById(int id)
        {
            var response = clientRepository.GetClientById(id);
            return response;
        }

        public bool InsertClient(Client client)
        {
            var response = clientRepository.InsertClient(client);
            return response;
        }

        public bool UpdateClient(int id,Client client)
        {
            var response = clientRepository.UpdateClient(id,client);
            return response;
        }

        public bool DeleteClient(int id)
        {
             var response = clientRepository.DeleteClient(id);
            return true;
        }
    }
}