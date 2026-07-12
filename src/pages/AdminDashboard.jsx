import { useState } from 'react'
import PageMeta from '../components/ui/PageMeta'
import AnimateOnScroll from '../components/ui/AnimateOnScroll'
import MaterialIcon from '../components/ui/MaterialIcon'
import { useLeads } from '../context/LeadsContext'

export default function AdminDashboard() {
  const { leads, updateLeadStatus, deleteLead } = useLeads()
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState(null)
  const [sortBy, setSortBy] = useState('date')

  const filteredLeads = leads
    .filter(lead => {
      const matchesSearch = !searchTerm || 
        lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.email.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesStatus = !filterStatus || lead.status === filterStatus
      return matchesSearch && matchesStatus
    })
    .sort((a, b) => {
      if (sortBy === 'date') return new Date(b.createdAt) - new Date(a.createdAt)
      if (sortBy === 'name') return a.name.localeCompare(b.name)
      if (sortBy === 'status') return a.status.localeCompare(b.status)
      return 0
    })

  const stats = {
    total: leads.length,
    new: leads.filter(l => l.status === 'New').length,
    contacted: leads.filter(l => l.status === 'Contacted').length,
    booked: leads.filter(l => l.status === 'Booked').length,
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-GB', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    })
  }

  return (
    <>
      <PageMeta
        title="Admin Dashboard"
        description="Lead and consultation management dashboard for Counsel & Clarity."
      />

      {/* Luxury Header */}
      <section className="bg-luxe-black text-luxe-cream py-stack-lg px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <AnimateOnScroll animation="fadeInUp">
            <h1 className="font-serif text-display-lg-mobile md:text-display-lg mb-stack-md">
              Admin Dashboard
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeInUp" delay={0.1}>
            <p className="font-sans text-body-lg text-luxe-cream/80">Manage leads and consultations</p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-luxe-light py-stack-lg px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Total Leads', value: stats.total, icon: 'people' },
              { label: 'New', value: stats.new, icon: 'mail_outline' },
              { label: 'Contacted', value: stats.contacted, icon: 'call_made' },
              { label: 'Booked', value: stats.booked, icon: 'calendar_check' },
            ].map((stat, idx) => (
              <AnimateOnScroll key={idx} animation="fadeInUp" delay={idx * 0.05}>
                <div className="luxury-card bg-luxe-cream p-4 rounded-lg border border-luxe-gold/20 text-center hover:shadow-luxury-md transition-all">
                  <div className="w-10 h-10 rounded-lg bg-luxe-gold/10 flex items-center justify-center mx-auto mb-2">
                    <MaterialIcon name={stat.icon} className="text-luxe-gold text-xl" />
                  </div>
                  <div className="font-serif text-display-lg-mobile text-luxe-gold">{stat.value}</div>
                  <div className="font-sans text-caption text-luxe-grey">{stat.label}</div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Table Section */}
      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-luxe-cream">
        <div className="max-w-container-max mx-auto">
          {/* Filters */}
          <AnimateOnScroll animation="fadeInUp" className="mb-stack-lg space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search */}
              <div>
                <label className="block font-sans font-semibold text-label-md text-luxe-black mb-2 tracking-widest uppercase text-xs">Search</label>
                <div className="relative">
                  <MaterialIcon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-luxe-gold/40" />
                  <input
                    type="text"
                    placeholder="Search by name or email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-lg font-sans border-2 border-luxe-gold/20 focus:border-luxe-gold focus:outline-none transition-colors bg-luxe-cream/50"
                  />
                </div>
              </div>

              {/* Filter Status */}
              <div>
                <label className="block font-sans font-semibold text-label-md text-luxe-black mb-2 tracking-widest uppercase text-xs">Filter by Status</label>
                <select
                  value={filterStatus || ''}
                  onChange={(e) => setFilterStatus(e.target.value || null)}
                  className="w-full px-4 py-2 rounded-lg font-sans border-2 border-luxe-gold/20 focus:border-luxe-gold focus:outline-none transition-colors bg-luxe-cream/50 text-luxe-black"
                >
                  <option value="">All Statuses</option>
                  <option value="New">New</option>
                  <option value="Contacted">Contacted</option>
                  <option value="Booked">Booked</option>
                </select>
              </div>

              {/* Sort */}
              <div>
                <label className="block font-sans font-semibold text-label-md text-luxe-black mb-2 tracking-widest uppercase text-xs">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg font-sans border-2 border-luxe-gold/20 focus:border-luxe-gold focus:outline-none transition-colors bg-luxe-cream/50 text-luxe-black"
                >
                  <option value="date">Date (Newest)</option>
                  <option value="name">Name (A-Z)</option>
                  <option value="status">Status</option>
                </select>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Table */}
          <AnimateOnScroll animation="fadeInUp" delay={0.1} className="overflow-x-auto">
            {filteredLeads.length > 0 ? (
              <table className="w-full bg-luxe-cream rounded-lg overflow-hidden shadow-luxury-sm border border-luxe-gold/20">
                <thead>
                  <tr className="bg-luxe-light border-b border-luxe-gold/20">
                    <th className="px-4 py-3 text-left font-sans font-semibold text-label-md text-luxe-black tracking-widest uppercase text-xs">Name</th>
                    <th className="px-4 py-3 text-left font-sans font-semibold text-label-md text-luxe-black tracking-widest uppercase text-xs hidden md:table-cell">Email</th>
                    <th className="px-4 py-3 text-left font-sans font-semibold text-label-md text-luxe-black tracking-widest uppercase text-xs hidden lg:table-cell">Phone</th>
                    <th className="px-4 py-3 text-left font-sans font-semibold text-label-md text-luxe-black tracking-widest uppercase text-xs hidden md:table-cell">Source</th>
                    <th className="px-4 py-3 text-left font-sans font-semibold text-label-md text-luxe-black tracking-widest uppercase text-xs">Status</th>
                    <th className="px-4 py-3 text-left font-sans font-semibold text-label-md text-luxe-black tracking-widest uppercase text-xs hidden md:table-cell">Date</th>
                    <th className="px-4 py-3 text-left font-sans font-semibold text-label-md text-luxe-black tracking-widest uppercase text-xs">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLeads.map((lead, idx) => (
                    <tr key={lead.id} className={`border-b border-luxe-gold/10 font-sans ${idx % 2 === 0 ? 'bg-luxe-cream' : 'bg-luxe-light'}`}>
                      <td className="px-4 py-3 text-body-md text-luxe-black font-serif">{lead.name}</td>
                      <td className="px-4 py-3 text-body-md text-luxe-grey hidden md:table-cell">{lead.email}</td>
                      <td className="px-4 py-3 text-body-md text-luxe-grey hidden lg:table-cell">{lead.phone}</td>
                      <td className="px-4 py-3 text-body-md text-luxe-grey hidden md:table-cell">
                        <span className="px-3 py-1 rounded-lg bg-luxe-gold/10 text-luxe-gold text-caption font-semibold">
                          {lead.source}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <select
                          value={lead.status}
                          onChange={(e) => updateLeadStatus(lead.id, e.target.value)}
                          className={`px-3 py-1 rounded-lg font-sans font-semibold text-caption border-0 cursor-pointer transition-colors ${
                            lead.status === 'New' ? 'bg-luxe-gold/10 text-luxe-gold' :
                            lead.status === 'Contacted' ? 'bg-luxe-accent/10 text-luxe-accent' :
                            'bg-luxe-black/10 text-luxe-black'
                          }`}
                        >
                          <option value="New">New</option>
                          <option value="Contacted">Contacted</option>
                          <option value="Booked">Booked</option>
                        </select>
                      </td>
                      <td className="px-4 py-3 text-body-md text-luxe-grey hidden md:table-cell">{formatDate(lead.createdAt)}</td>
                      <td className="px-4 py-3">
                        <div className="flex gap-2">
                          <a
                            href={`mailto:${lead.email}`}
                            title="Send email"
                            className="p-2 rounded-lg hover:bg-luxe-gold/10 hover:text-luxe-gold transition-colors text-luxe-grey"
                          >
                            <MaterialIcon name="mail" className="text-lg" />
                          </a>
                          <a
                            href={`tel:${lead.phone}`}
                            title="Call"
                            className="p-2 rounded-lg hover:bg-luxe-gold/10 hover:text-luxe-gold transition-colors text-luxe-grey"
                          >
                            <MaterialIcon name="call" className="text-lg" />
                          </a>
                          <button
                            onClick={() => deleteLead(lead.id)}
                            title="Delete"
                            className="p-2 rounded-lg hover:bg-error/10 hover:text-error transition-colors text-luxe-grey"
                          >
                            <MaterialIcon name="delete" className="text-lg" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="text-center py-stack-lg bg-luxe-cream rounded-lg border border-luxe-gold/20">
                <MaterialIcon name="inbox" className="text-4xl text-luxe-gold/20 mb-4 inline-block" />
                <p className="font-serif text-headline-sm text-luxe-black">No leads found</p>
                <p className="font-sans text-body-md text-luxe-grey mt-2">
                  {leads.length === 0 ? 'No leads yet' : 'Try adjusting your filters'}
                </p>
              </div>
            )}
          </AnimateOnScroll>

          {/* Results Info */}
          <AnimateOnScroll animation="fadeInUp" delay={0.2} className="mt-4 font-sans text-caption text-luxe-grey">
            Showing {filteredLeads.length} of {leads.length} leads
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
