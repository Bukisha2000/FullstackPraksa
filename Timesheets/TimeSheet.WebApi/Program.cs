using System.ComponentModel.Design;
using Microsoft.EntityFrameworkCore;
using TimeSheet.Core.RepositoryInterfaces;
using TimeSheet.Core.ServiceInterfaces;
using TimeSheet.Data.Database;
using TimeSheet.Data.Repository;
using TimeSheet.Services.Implementation;
using Microsoft.AspNetCore.Mvc.Cors;
using DinkToPdf;
using DinkToPdf.Contracts;

var builder = WebApplication.CreateBuilder(args);
// builder.Services.AddCors(cors => cors.AddPolicy("Default", corsPolicyBuilder =>
//             {
//                 corsPolicyBuilder.AllowAnyOrigin();
//                 corsPolicyBuilder.WithHeaders("Origin", "Content-Type", "Accept", "Version", "Authorization");
//                 corsPolicyBuilder.WithMethods("GET", "POST", "PUT", "OPTIONS");
//             }));

builder.Services.AddCors(options => 
{
  options.AddPolicy("CORSPolicy",
    builder =>
    {
      builder
      .AllowAnyMethod()
      .AllowAnyHeader()
      .WithOrigins("http://localhost:3000");
    });
});
builder.Services.AddSingleton(typeof(IConverter),
    new SynchronizedConverter(new PdfTools()));
builder.Services.AddControllers();

// Add EntityFrameworkCore.SqlServer package to fix UseSqlServerError
builder.Services.AddDbContext<ApplicationContext>( options =>
{
  options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
  
});
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Add DI to use AutoMapper anywehere in the solution
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());


// DI for interfaces and services
builder.Services.AddScoped<ICategoryService, CategoryService>();
builder.Services.AddScoped<IClientService, ClientService>();
builder.Services.AddScoped<IProjectService, ProjectService>();
builder.Services.AddScoped<ITeamMemberService, TeamMemberService>();
builder.Services.AddScoped<ICountryService, CountryService>();
builder.Services.AddScoped<IActivityService, ActivityService>();


// You should add AddScoped method for repository
builder.Services.AddScoped<ICategoryRepository, CategoryRepository>();
builder.Services.AddScoped<IClientRepository, ClientRepository>();
builder.Services.AddScoped<ITeamMemberRepository, TeamMemberRepository>();
builder.Services.AddScoped<ICountryRepository, CountryRepository>();
builder.Services.AddScoped<IProjectRepository, ProjectRepository>();
builder.Services.AddScoped<IActivityRepository, ActivityRepository>();



var app = builder.Build();


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(options =>
      {
    options.SwaggerEndpoint("/swagger/v1/swagger.json", "v1");
    options.RoutePrefix = string.Empty;
      });
}

app.UseHttpsRedirection();

// app.MapGet("/get-all-countries",async () => await CountryRepository.GetAll());
app.UseCors("CORSPolicy");
app.UseAuthorization();

app.MapControllers();

app.Run();
