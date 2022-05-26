﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using PMS.Data;

#nullable disable

namespace PMS.Data.Migrations
{
    [DbContext(typeof(PMSDbContext))]
    [Migration("20220525131112_modifyDepartmentName")]
    partial class modifyDepartmentName
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.3")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("PMS.Entities.ActivityEntities.Activity", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<int>("ActivityTypeId")
                        .HasColumnType("int");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("datetime2");

                    b.Property<int>("CreatedById")
                        .HasColumnType("int");

                    b.Property<int>("DepartmentId")
                        .HasColumnType("int");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Level")
                        .HasColumnType("int");

                    b.Property<string>("Subject")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("ActivityTypeId");

                    b.HasIndex("CreatedById");

                    b.HasIndex("DepartmentId");

                    b.ToTable("Activity");
                });

            modelBuilder.Entity("PMS.Entities.ActivityEntities.ActivityAssignee", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<int>("ActivityId")
                        .HasColumnType("int");

                    b.Property<int>("AssigneId")
                        .HasColumnType("int");

                    b.Property<int>("AssigneeId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("ActivityId");

                    b.HasIndex("AssigneeId");

                    b.ToTable("ActivityAssignee");
                });

            modelBuilder.Entity("PMS.Entities.ActivityEntities.ActivityType", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("TypeName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("ActivityType");
                });

            modelBuilder.Entity("PMS.Entities.AppUser", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("Address")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Contact")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("GivenName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ImagePath")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<byte[]>("PasswordHash")
                        .HasColumnType("varbinary(max)");

                    b.Property<byte[]>("PasswordSalt")
                        .HasColumnType("varbinary(max)");

                    b.Property<byte>("Role")
                        .HasColumnType("tinyint");

                    b.Property<string>("Surname")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("PMS.Entities.DepartmentEntities.Department", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("DepartmentName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Department");
                });

            modelBuilder.Entity("PMS.Entities.EskeysEntities.EskeyReceivable", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<DateTime>("ArrivalDateTime")
                        .HasColumnType("datetime2");

                    b.Property<string>("Charter")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Count")
                        .HasColumnType("int");

                    b.Property<DateTime>("DateProcessed")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("DateTimeReceived")
                        .HasColumnType("datetime2");

                    b.Property<int>("OperatorId")
                        .HasColumnType("int");

                    b.Property<string>("location")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("OperatorId");

                    b.ToTable("EskeyReceivable");
                });

            modelBuilder.Entity("PMS.Entities.EskeysEntities.EskeyReceivableDetail", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<bool>("Checked")
                        .HasColumnType("bit");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("EskeyNo")
                        .HasColumnType("int");

                    b.Property<int>("EskeyReceivableId")
                        .HasColumnType("int");

                    b.Property<string>("Initials")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Temp")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("EskeyReceivableId");

                    b.ToTable("EskeyReceivableDetail");
                });

            modelBuilder.Entity("PMS.Entities.ActivityEntities.Activity", b =>
                {
                    b.HasOne("PMS.Entities.ActivityEntities.ActivityType", "Type")
                        .WithMany()
                        .HasForeignKey("ActivityTypeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("PMS.Entities.AppUser", "CreatedBy")
                        .WithMany()
                        .HasForeignKey("CreatedById")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("PMS.Entities.DepartmentEntities.Department", "Department")
                        .WithMany()
                        .HasForeignKey("DepartmentId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("CreatedBy");

                    b.Navigation("Department");

                    b.Navigation("Type");
                });

            modelBuilder.Entity("PMS.Entities.ActivityEntities.ActivityAssignee", b =>
                {
                    b.HasOne("PMS.Entities.ActivityEntities.Activity", "Activity")
                        .WithMany("Assignees")
                        .HasForeignKey("ActivityId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.HasOne("PMS.Entities.AppUser", "Assignee")
                        .WithMany()
                        .HasForeignKey("AssigneeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Activity");

                    b.Navigation("Assignee");
                });

            modelBuilder.Entity("PMS.Entities.EskeysEntities.EskeyReceivable", b =>
                {
                    b.HasOne("PMS.Entities.AppUser", "Operator")
                        .WithMany()
                        .HasForeignKey("OperatorId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Operator");
                });

            modelBuilder.Entity("PMS.Entities.EskeysEntities.EskeyReceivableDetail", b =>
                {
                    b.HasOne("PMS.Entities.EskeysEntities.EskeyReceivable", "EskeyReceivable")
                        .WithMany("EskeyReceivableDetails")
                        .HasForeignKey("EskeyReceivableId")
                        .OnDelete(DeleteBehavior.ClientCascade)
                        .IsRequired();

                    b.Navigation("EskeyReceivable");
                });

            modelBuilder.Entity("PMS.Entities.ActivityEntities.Activity", b =>
                {
                    b.Navigation("Assignees");
                });

            modelBuilder.Entity("PMS.Entities.EskeysEntities.EskeyReceivable", b =>
                {
                    b.Navigation("EskeyReceivableDetails");
                });
#pragma warning restore 612, 618
        }
    }
}
