using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TimeSheet.Core.Domain;

namespace TimeSheet.Core.RepositoryInterfaces
{
    public interface IUserRepository
    {
        IEnumerable<User> GetAll();
        User GetUserById(int id);
        User InsertUser(User user);
        User UpdateUser(User user);
        void DeleteUser(int id);
        void SaveChanges();
    }
}