using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TimeSheet.Core.Domain;

namespace TimeSheet.Core.ServiceInterfaces
{
    public interface IClientService
    {
        IEnumerable<Client> GetClients();
        Client GetClientById(int id);
        bool InsertClient(Client client);
        bool UpdateClient(int id,Client client);
        bool DeleteClient(int id);
        IEnumerable<Client> GetClientsByName(string ClientN);
    }
}