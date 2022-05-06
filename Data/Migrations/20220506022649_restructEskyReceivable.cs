using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PMS.Data.Migrations
{
    public partial class restructEskyReceivable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_EskeyReceivable_Users_CollectorId",
                table: "EskeyReceivable");

            migrationBuilder.RenameColumn(
                name: "CollectorId",
                table: "EskeyReceivable",
                newName: "OperatorId");

            migrationBuilder.RenameIndex(
                name: "IX_EskeyReceivable_CollectorId",
                table: "EskeyReceivable",
                newName: "IX_EskeyReceivable_OperatorId");

            migrationBuilder.AddColumn<string>(
                name: "Charter",
                table: "EskeyReceivable",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<DateTime>(
                name: "DateProcessed",
                table: "EskeyReceivable",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "DateTimeReceived",
                table: "EskeyReceivable",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "location",
                table: "EskeyReceivable",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateTable(
                name: "EskeyReceivableDetail",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EskeyNo = table.Column<int>(type: "int", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Temp = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Initials = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    EskeyReceivableId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EskeyReceivableDetail", x => x.Id);
                    table.ForeignKey(
                        name: "FK_EskeyReceivableDetail_EskeyReceivable_EskeyReceivableId",
                        column: x => x.EskeyReceivableId,
                        principalTable: "EskeyReceivable",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_EskeyReceivableDetail_EskeyReceivableId",
                table: "EskeyReceivableDetail",
                column: "EskeyReceivableId");

            migrationBuilder.AddForeignKey(
                name: "FK_EskeyReceivable_Users_OperatorId",
                table: "EskeyReceivable",
                column: "OperatorId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_EskeyReceivable_Users_OperatorId",
                table: "EskeyReceivable");

            migrationBuilder.DropTable(
                name: "EskeyReceivableDetail");

            migrationBuilder.DropColumn(
                name: "Charter",
                table: "EskeyReceivable");

            migrationBuilder.DropColumn(
                name: "DateProcessed",
                table: "EskeyReceivable");

            migrationBuilder.DropColumn(
                name: "DateTimeReceived",
                table: "EskeyReceivable");

            migrationBuilder.DropColumn(
                name: "location",
                table: "EskeyReceivable");

            migrationBuilder.RenameColumn(
                name: "OperatorId",
                table: "EskeyReceivable",
                newName: "CollectorId");

            migrationBuilder.RenameIndex(
                name: "IX_EskeyReceivable_OperatorId",
                table: "EskeyReceivable",
                newName: "IX_EskeyReceivable_CollectorId");

            migrationBuilder.AddForeignKey(
                name: "FK_EskeyReceivable_Users_CollectorId",
                table: "EskeyReceivable",
                column: "CollectorId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
