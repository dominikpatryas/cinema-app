using AutoMapper;
using cinema_api.Dtos;
using cinema_api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cinema_api.Helpers
{
    public class Automapper : Profile
    {
        public Automapper()
        {
            CreateMap<UserForRegisterDto, User>();
        }
    }
}
