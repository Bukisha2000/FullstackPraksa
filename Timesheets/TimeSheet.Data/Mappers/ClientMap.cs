using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TimeSheet.Data.Entity;
using Microsoft.EntityFrameworkCore;
using TimeSheet.Core.Domain;

namespace TimeSheet.Data.Mappers
{
    public class ClientMap
    {
        public ClientMap(EntityTypeBuilder<ClientEntity> entityTypeBuilder)
        {
            entityTypeBuilder.HasKey(t => t.Id);
            entityTypeBuilder.Property(t => t.Name);
            entityTypeBuilder.Property(t => t.Address);
            entityTypeBuilder.Property(t => t.City);
            entityTypeBuilder.Property(t => t.PostalCode);
            entityTypeBuilder.Property(t => t.CountryID);
        //      entityTypeBuilder
        // .HasOne(a => a.Country)
        // .WithMany(a => a.Clients);

        
        
            
        }
    }
}