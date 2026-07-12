import { createContext, useContext, useState, useEffect, useCallback } from 'react'

const STORAGE_KEY = 'counsel-clarity-leads'

const INITIAL_LEADS = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    practiceArea: 'Family Law',
    phone: '+44 7700 900012',
    email: 'sarah.j@email.com',
    status: 'New',
    source: 'Contact Form',
    createdAt: '2024-03-10T09:30:00Z',
  },
  {
    id: '2',
    name: 'Mark Rossi',
    practiceArea: 'Contract Dispute',
    phone: '+44 7700 900543',
    email: 'mark.rossi@email.com',
    status: 'Booked',
    source: 'Consultation',
    createdAt: '2024-03-09T14:15:00Z',
  },
  {
    id: '3',
    name: 'Elena Lopez',
    practiceArea: 'Property Law',
    phone: '+44 7700 900888',
    email: 'elena.lopez@email.com',
    status: 'Contacted',
    source: 'Contact Form',
    createdAt: '2024-03-08T11:00:00Z',
  },
]

const LeadsContext = createContext(null)

export function LeadsProvider({ children }) {
  const [leads, setLeads] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      return stored ? JSON.parse(stored) : INITIAL_LEADS
    } catch {
      return INITIAL_LEADS
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(leads))
  }, [leads])

  const addLead = useCallback((lead) => {
    const newLead = {
      id: crypto.randomUUID(),
      status: 'New',
      createdAt: new Date().toISOString(),
      ...lead,
    }
    setLeads((prev) => [newLead, ...prev])
    return newLead
  }, [])

  const updateLeadStatus = useCallback((id, status) => {
    setLeads((prev) => prev.map((lead) => (lead.id === id ? { ...lead, status } : lead)))
  }, [])

  const deleteLead = useCallback((id) => {
    setLeads((prev) => prev.filter((lead) => lead.id !== id))
  }, [])

  return (
    <LeadsContext.Provider value={{ leads, addLead, updateLeadStatus, deleteLead }}>
      {children}
    </LeadsContext.Provider>
  )
}

export function useLeads() {
  const ctx = useContext(LeadsContext)
  if (!ctx) throw new Error('useLeads must be used within LeadsProvider')
  return ctx
}
