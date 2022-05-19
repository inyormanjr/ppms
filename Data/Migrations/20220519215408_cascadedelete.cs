using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PMS.Data.Migrations
{
    public partial class cascadedelete : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_EskeyReceivableDetail_EskeyReceivable_EskeyReceivableId",
                table: "EskeyReceivableDetail");

            migrationBuilder.AddForeignKey(
                name: "FK_EskeyReceivableDetail_EskeyReceivable_EskeyReceivableId",
                table: "EskeyReceivableDetail",
                column: "EskeyReceivableId",
                principalTable: "EskeyReceivable",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_EskeyReceivableDetail_EskeyReceivable_EskeyReceivableId",
                table: "EskeyReceivableDetail");

            migrationBuilder.AddForeignKey(
                name: "FK_EskeyReceivableDetail_EskeyReceivable_EskeyReceivableId",
                table: "EskeyReceivableDetail",
                column: "EskeyReceivableId",
                principalTable: "EskeyReceivable",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
