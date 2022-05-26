using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PMS.Data.Migrations
{
    public partial class assigneeMap : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ActivityAssignee_Activity_ActivityId",
                table: "ActivityAssignee");

            migrationBuilder.DropColumn(
                name: "AssigneId",
                table: "ActivityAssignee");

            migrationBuilder.AddColumn<int>(
                name: "ActivityId1",
                table: "ActivityAssignee",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_ActivityAssignee_ActivityId1",
                table: "ActivityAssignee",
                column: "ActivityId1");

            migrationBuilder.AddForeignKey(
                name: "FK_ActivityAssignee_Activity_ActivityId",
                table: "ActivityAssignee",
                column: "ActivityId",
                principalTable: "Activity",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_ActivityAssignee_Activity_ActivityId1",
                table: "ActivityAssignee",
                column: "ActivityId1",
                principalTable: "Activity",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ActivityAssignee_Activity_ActivityId",
                table: "ActivityAssignee");

            migrationBuilder.DropForeignKey(
                name: "FK_ActivityAssignee_Activity_ActivityId1",
                table: "ActivityAssignee");

            migrationBuilder.DropIndex(
                name: "IX_ActivityAssignee_ActivityId1",
                table: "ActivityAssignee");

            migrationBuilder.DropColumn(
                name: "ActivityId1",
                table: "ActivityAssignee");

            migrationBuilder.AddColumn<int>(
                name: "AssigneId",
                table: "ActivityAssignee",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddForeignKey(
                name: "FK_ActivityAssignee_Activity_ActivityId",
                table: "ActivityAssignee",
                column: "ActivityId",
                principalTable: "Activity",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
