using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using TimeSheet.Core.Domain;
using TimeSheet.Data.Entity;

namespace TimeSheet.Data.Mappers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<CategoryEntity, Category>().ReverseMap();
            CreateMap<ClientEntity, Client>().ReverseMap();
            CreateMap<CountryEntity, Country>().ReverseMap();
            CreateMap<ProjectEntity, Project>().ReverseMap();
            CreateMap<TeamMemberEntity, TeamMember>().ReverseMap();
            CreateMap<ActivityEntity, Activity>().ReverseMap();
        }
    }
}