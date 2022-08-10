using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TimeSheet.Data.Migrations
{
    public partial class FinalEverMigrationThree : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ClientID",
                table: "ProjectEntity");

            migrationBuilder.AddColumn<string>(
                name: "ClientName",
                table: "ProjectEntity",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ClientName",
                table: "ProjectEntity");

            migrationBuilder.AddColumn<int>(
                name: "ClientID",
                table: "ProjectEntity",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
