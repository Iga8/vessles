﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Vessesls.Models
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class msdb2773Entities : DbContext
    {
        public msdb2773Entities()
            : base("name=msdb2773Entities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<History> Histories { get; set; }
        public virtual DbSet<Port> Ports { get; set; }
        public virtual DbSet<Vessel> Vessels { get; set; }
        public virtual DbSet<VesselMovment> VesselMovments { get; set; }
    }
}
