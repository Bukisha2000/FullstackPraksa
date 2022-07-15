using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TimeSheet.Core.Domain;

namespace TimeSheet.Core.RepositoryInterfaces
{
    public interface IClientRepository
    {
        IEnumerable<Client> GetAll();
        Client GetClientById(int id);
        bool InsertClient(Client client);
        bool UpdateClient(int id,Client client);
        bool DeleteClient(int id);
        void SaveChanges();
        IEnumerable<Client> GetAllByName(string ClientN);
    }
}