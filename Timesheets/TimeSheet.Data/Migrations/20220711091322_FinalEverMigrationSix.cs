using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TimeSheet.Data.Migrations
{
    public partial class FinalEverMigrationSix : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CategoryID",
                table: "ActivityEntity");

            migrationBuilder.DropColumn(
                name: "ClientID",
                table: "ActivityEntity");

            migrationBuilder.DropColumn(
                name: "ProjectID",
                table: "ActivityEntity");

            migrationBuilder.DropColumn(
                name: "TeamMemberID",
                table: "ActivityEntity");

            migrationBuilder.AlterColumn<string>(
                name: "CountryID",
                table: "ClientEntity",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<string>(
                name: "CategoryName",
                table: "ActivityEntity",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ClientName",
                table: "ActivityEntity",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ProjectName",
                table: "ActivityEntity",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "TeamMemberName",
                table: "ActivityEntity",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CategoryName",
                table: "ActivityEntity");

            migrationBuilder.DropColumn(
                name: "ClientName",
                table: "ActivityEntity");

            migrationBuilder.DropColumn(
                name: "ProjectName",
                table: "ActivityEntity");

            migrationBuilder.DropColumn(
                name: "TeamMemberName",
                table: "ActivityEntity");

            migrationBuilder.AlterColumn<int>(
                name: "CountryID",
                table: "ClientEntity",
                type: "int",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AddColumn<int>(
                name: "CategoryID",
                table: "ActivityEntity",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ClientID",
                table: "ActivityEntity",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ProjectID",
                table: "ActivityEntity",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "TeamMemberID",
                table: "ActivityEntity",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
