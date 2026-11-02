import React, { useState, useEffect } from 'react';
import { 
  ShieldAlert, 
  Users, 
  Calendar, 
  DollarSign, 
  Phone, 
  Mail, 
  Search, 
  Check, 
  X, 
  Trash2, 
  Edit, 
  Lock, 
  LogOut, 
  RefreshCw,
  Plus,
  BookOpen,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { FreeTrialApplication, ContactMessage, Teacher, PricingPlan, PageTab } from '../types';
import { 
  getStoredApplications, 
  updateApplicationStatus, 
  deleteApplication,
  getStoredContacts,
  updateContactStatus,
  getStoredTeachers,
  updateTeacher,
  getStoredPricing,
  updatePricingPlan,
  resetAllDemoData 
} from '../data/storage';

interface AdminDashboardProps {
  setActiveTab: (tab: PageTab) => void;
  onRefreshData?: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ setActiveTab }) => {
  // Simple auth gate for demo administration
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [adminPin, setAdminPin] = useState('');
  const [authError, setAuthError] = useState('');

  // Active Admin Tab
  const [adminTab, setAdminTab] = useState<'applications' | 'contacts' | 'teachers' | 'pricing'>('applications');

  // Loaded data
  const [applications, setApplications] = useState<FreeTrialApplication[]>([]);
  const [contacts, setContacts] = useState<ContactMessage[]>([]);
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [pricingPlans, setPricingPlans] = useState<PricingPlan[]>([]);

  // Filtering & Search
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');

  // Selected application for detail modal
  const [selectedApp, setSelectedApp] = useState<FreeTrialApplication | null>(null);

  // Editable pricing modal / state
  const [editingPricing, setEditingPricing] = useState<PricingPlan | null>(null);

  const loadData = () => {
    setApplications(getStoredApplications());
    setContacts(getStoredContacts());
    setTeachers(getStoredTeachers());
    setPricingPlans(getStoredPricing());
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPin === '786' || adminPin === 'admin' || adminPin === '1234') {
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Invalid Admin Passcode. Hint: Use demo passcode "786"');
    }
  };

  const handleStatusChange = (id: string, newStatus: FreeTrialApplication['status']) => {
    const updated = updateApplicationStatus(id, newStatus);
    setApplications(updated);
    if (selectedApp && selectedApp.id === id) {
      setSelectedApp({ ...selectedApp, status: newStatus });
    }
  };

  const handleDeleteApp = (id: string) => {
    if (window.confirm(`Are you sure you want to remove application ${id}?`)) {
      const updated = deleteApplication(id);
      setApplications(updated);
      if (selectedApp?.id === id) setSelectedApp(null);
    }
  };

  const handleContactStatus = (id: string, status: 'Unread' | 'Replied') => {
    const updated = updateContactStatus(id, status);
    setContacts(updated);
  };

  const handleResetData = () => {
    if (window.confirm('Reset all demo applications, inquiries, and teacher records to default factory seed?')) {
      resetAllDemoData();
      loadData();
    }
  };

  const handleSavePriceEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingPricing) {
      const updated = updatePricingPlan(editingPricing);
      setPricingPlans(updated);
      setEditingPricing(null);
    }
  };

  // WhatsApp quick greeting
  const openWhatsAppToStudent = (app: FreeTrialApplication) => {
    const text = encodeURIComponent(
      `Assalamu Alaikum ${app.studentName}! This is Tazyeenul Quran Academy administration regarding your Free Trial Application (${app.id}) for ${app.preferredCourse}. We are pleased to welcome you! When would you like to conduct your 1-on-1 trial class?`
    );
    window.open(`https://wa.me/${app.whatsapp.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  const filteredApps = applications.filter((app) => {
    const matchesStatus = statusFilter === 'All' || app.status === statusFilter;
    const matchesSearch = 
      app.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.whatsapp.includes(searchQuery);
    return matchesStatus && matchesSearch;
  });

  if (!isAuthenticated) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md bg-white rounded-3xl p-8 border-2 border-accent shadow-xl text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-primary text-accent flex items-center justify-center mx-auto border-2 border-accent">
            <Lock className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-2xl font-serif font-bold text-primary">Tazyeenul Quran Academy</h2>
            <p className="text-xs text-charcoal/60 mt-1">Authorized Administration Portal</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4 text-left">
            <div>
              <label className="block text-xs font-bold text-charcoal mb-1">
                Admin Passcode (Demo: 786)
              </label>
              <input
                type="password"
                value={adminPin}
                onChange={(e) => setAdminPin(e.target.value)}
                placeholder="Enter passcode..."
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-accent outline-none text-sm text-center tracking-widest bg-ivory"
              />
            </div>

            {authError && (
              <p className="text-xs text-red-500 font-medium text-center">{authError}</p>
            )}

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-primary hover:bg-primary-light text-white font-bold text-xs shadow transition-all border border-accent"
            >
              Sign In to Admin Panel
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('home')}
              className="w-full py-2 text-xs text-charcoal/60 hover:text-primary transition-colors text-center block"
            >
              ← Return to Main Website
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-primary-dark via-primary to-secondary text-white rounded-3xl p-6 sm:p-8 border border-accent/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-accent text-primary-dark flex items-center justify-center font-bold">
            <ShieldAlert className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-2xl font-serif font-bold text-white">
              Academy Administration Dashboard
            </h1>
            <p className="text-xs text-accent-light">
              Tazyeenul Quran Academy • Admissions & Academic Operations
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleResetData}
            className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-ivory flex items-center gap-1.5 transition-colors"
            title="Reset to factory sample data"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset Demo Data</span>
          </button>

          <button
            onClick={() => setActiveTab('home')}
            className="px-4 py-2 rounded-xl bg-accent text-primary-dark hover:bg-accent-light text-xs font-bold transition-all"
          >
            Visit Website
          </button>
        </div>
      </div>

      {/* KPI Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
          <span className="text-[11px] text-charcoal/60 uppercase font-semibold block">Total Trial Inquiries</span>
          <div className="text-2xl font-serif font-black text-primary mt-1">{applications.length}</div>
          <span className="text-[10px] text-emerald-600 font-bold block mt-0.5">Live admissions funnel</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
          <span className="text-[11px] text-charcoal/60 uppercase font-semibold block">Pending / New Trials</span>
          <div className="text-2xl font-serif font-black text-amber-600 mt-1">
            {applications.filter(a => a.status === 'New').length}
          </div>
          <span className="text-[10px] text-charcoal/50 block mt-0.5">Needs WhatsApp contact</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
          <span className="text-[11px] text-charcoal/60 uppercase font-semibold block">Active Instructors</span>
          <div className="text-2xl font-serif font-black text-primary mt-1">{teachers.length}</div>
          <span className="text-[10px] text-primary block mt-0.5">Male & Female Tutors</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
          <span className="text-[11px] text-charcoal/60 uppercase font-semibold block">Contact Inquiries</span>
          <div className="text-2xl font-serif font-black text-primary mt-1">{contacts.length}</div>
          <span className="text-[10px] text-emerald-600 block mt-0.5">{contacts.filter(c => c.status === 'Unread').length} Unread</span>
        </div>
      </div>

      {/* Admin Tab Buttons */}
      <div className="flex items-center gap-2 border-b border-gray-200 overflow-x-auto pb-2 text-xs font-semibold">
        {[
          { id: 'applications', label: `Trial Applications (${applications.length})` },
          { id: 'contacts', label: `Contact Inquiries (${contacts.length})` },
          { id: 'teachers', label: `Manage Teachers (${teachers.length})` },
          { id: 'pricing', label: `Pricing & Plans (${pricingPlans.length})` },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setAdminTab(tab.id as any)}
            className={`px-4 py-2 rounded-xl transition-all shrink-0 ${
              adminTab === tab.id
                ? 'bg-primary text-white shadow-sm'
                : 'text-charcoal/70 hover:bg-gray-100'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* TAB 1: Applications Management */}
      {adminTab === 'applications' && (
        <div className="space-y-6">
          
          {/* Filter Bar */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-charcoal/40 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by student name, ID, country..."
                className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-gray-200 focus:border-accent outline-none bg-ivory/50"
              />
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
              <span className="text-xs text-charcoal/60 mr-1 hidden sm:inline">Status:</span>
              {['All', 'New', 'Contacted', 'Trial Scheduled', 'Enrolled'].map((st) => (
                <button
                  key={st}
                  onClick={() => setStatusFilter(st)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                    statusFilter === st
                      ? 'bg-primary text-white'
                      : 'bg-ivory text-charcoal/70 hover:bg-gray-100'
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>

          {/* Applications Table */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-ivory/80 border-b border-gray-200 text-charcoal/70 uppercase text-[10px] tracking-wider font-bold">
                    <th className="p-4">App ID</th>
                    <th className="p-4">Student & Age</th>
                    <th className="p-4">Course</th>
                    <th className="p-4">Country & WhatsApp</th>
                    <th className="p-4">Schedule Preference</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredApps.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="p-8 text-center text-charcoal/50">
                        No applications found. New applications submitted on the Free Trial page appear here in real-time.
                      </td>
                    </tr>
                  ) : (
                    filteredApps.map((app) => (
                      <tr key={app.id} className="hover:bg-ivory/30 transition-colors">
                        <td className="p-4 font-mono font-bold text-primary">
                          {app.id}
                        </td>
                        <td className="p-4">
                          <strong className="text-charcoal block">{app.studentName}</strong>
                          <span className="text-[11px] text-charcoal/60">
                            Age: {app.studentAge} {app.parentName ? `• Parent: ${app.parentName}` : ''}
                          </span>
                        </td>
                        <td className="p-4 font-medium text-primary">
                          {app.preferredCourse}
                        </td>
                        <td className="p-4">
                          <span className="block text-charcoal font-semibold">{app.country}</span>
                          <span className="text-[11px] text-emerald-700">{app.whatsapp}</span>
                        </td>
                        <td className="p-4">
                          <span className="block text-charcoal">{app.preferredDays}</span>
                          <span className="text-[11px] text-charcoal/50">{app.preferredTime} ({app.timeZone})</span>
                        </td>
                        <td className="p-4">
                          <select
                            value={app.status}
                            onChange={(e) => handleStatusChange(app.id, e.target.value as any)}
                            className={`px-2.5 py-1 rounded-full text-[11px] font-bold border outline-none ${
                              app.status === 'New'
                                ? 'bg-amber-100 text-amber-800 border-amber-300'
                                : app.status === 'Contacted'
                                ? 'bg-blue-100 text-blue-800 border-blue-300'
                                : app.status === 'Trial Scheduled'
                                ? 'bg-purple-100 text-purple-800 border-purple-300'
                                : 'bg-emerald-100 text-emerald-800 border-emerald-300'
                            }`}
                          >
                            <option value="New">New</option>
                            <option value="Contacted">Contacted</option>
                            <option value="Trial Scheduled">Trial Scheduled</option>
                            <option value="Enrolled">Enrolled</option>
                            <option value="Archived">Archived</option>
                          </select>
                        </td>
                        <td className="p-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => openWhatsAppToStudent(app)}
                              className="p-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
                              title="Message Student on WhatsApp"
                            >
                              <Phone className="w-4 h-4 text-emerald-600" />
                            </button>
                            <button
                              onClick={() => setSelectedApp(app)}
                              className="p-1.5 rounded-lg bg-ivory text-primary hover:bg-gray-100 transition-colors"
                              title="View Full Application Details"
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteApp(app.id)}
                              className="p-1.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
                              title="Delete Application"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      )}

      {/* TAB 2: Contacts Management */}
      {adminTab === 'contacts' && (
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-4">
          <h3 className="font-serif text-lg font-bold text-primary">Website Contact Inquiries</h3>
          <div className="space-y-3">
            {contacts.map((cnt) => (
              <div key={cnt.id} className="p-4 rounded-2xl border border-gray-200 bg-ivory/20 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="font-serif font-bold text-primary text-sm">{cnt.subject}</h4>
                    <span className="text-xs text-charcoal/60">From: {cnt.name} ({cnt.email}) • {cnt.createdAt}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                      cnt.status === 'Unread' ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
                    }`}>
                      {cnt.status}
                    </span>
                    <button
                      onClick={() => handleContactStatus(cnt.id, cnt.status === 'Unread' ? 'Replied' : 'Unread')}
                      className="px-2.5 py-1 rounded bg-white border border-gray-200 text-xs font-semibold hover:bg-gray-50"
                    >
                      Mark as {cnt.status === 'Unread' ? 'Replied' : 'Unread'}
                    </button>
                  </div>
                </div>
                <p className="text-xs text-charcoal/80 bg-white p-3 rounded-xl border border-gray-100 leading-relaxed">
                  "{cnt.message}"
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: Teachers Management */}
      {adminTab === 'teachers' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-lg font-bold text-primary">Manage Teachers Profiles</h3>
            <span className="text-xs text-charcoal/60">Editable instructor database</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teachers.map((t) => (
              <div key={t.id} className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm space-y-3">
                <div className="flex items-center gap-3">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border border-accent" />
                  <div>
                    <h4 className="font-bold text-sm text-primary">{t.name}</h4>
                    <p className="text-xs text-charcoal/60">{t.title}</p>
                    <span className="text-[10px] bg-ivory px-2 py-0.5 rounded text-accent-dark font-semibold">
                      {t.gender === 'male' ? 'Male Instructor' : 'Female Instructor'}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-charcoal/70 line-clamp-2">{t.bio}</p>
                <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs">
                  <span className="text-charcoal/60">{t.experience}</span>
                  <span className="text-emerald-700 font-semibold">Available for Trial</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: Pricing Management */}
      {adminTab === 'pricing' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-lg font-bold text-primary">Manage Pricing Packages</h3>
            <span className="text-xs text-charcoal/60">Update plan rates & days per week</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPlans.map((p) => (
              <div key={p.id} className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif font-bold text-primary">{p.name}</h4>
                  <button
                    onClick={() => setEditingPricing(p)}
                    className="p-1 rounded text-primary hover:text-accent"
                    title="Edit Plan"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-xl font-bold text-primary">${p.prices.USD} / mo</div>
                <p className="text-xs text-charcoal/60">{p.daysPerWeek} Days/Week ({p.classDurationMinutes} Mins)</p>
                <ul className="text-[11px] text-charcoal/70 space-y-1 pt-2 border-t border-gray-100">
                  {p.features.slice(0, 3).map((f, i) => (
                    <li key={i}>• {f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Selected Application Details Modal */}
      {selectedApp && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-xl rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl border border-accent">
            <div className="flex items-center justify-between border-b pb-4">
              <div>
                <span className="text-xs text-accent-dark font-mono font-bold block">{selectedApp.id}</span>
                <h3 className="font-serif text-xl font-bold text-primary">{selectedApp.studentName}</h3>
              </div>
              <button onClick={() => setSelectedApp(null)} className="p-1 rounded hover:bg-gray-100">
                <X className="w-5 h-5 text-charcoal" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-charcoal/50 block">Email:</span>
                <strong className="text-charcoal">{selectedApp.email}</strong>
              </div>
              <div>
                <span className="text-charcoal/50 block">WhatsApp:</span>
                <strong className="text-emerald-700">{selectedApp.whatsapp}</strong>
              </div>
              <div>
                <span className="text-charcoal/50 block">Country:</span>
                <strong className="text-charcoal">{selectedApp.country}</strong>
              </div>
              <div>
                <span className="text-charcoal/50 block">Age:</span>
                <strong className="text-charcoal">{selectedApp.studentAge}</strong>
              </div>
              <div>
                <span className="text-charcoal/50 block">Course:</span>
                <strong className="text-primary">{selectedApp.preferredCourse}</strong>
              </div>
              <div>
                <span className="text-charcoal/50 block">Teacher Pref:</span>
                <strong className="text-charcoal capitalize">{selectedApp.preferredTeacherGender}</strong>
              </div>
              <div>
                <span className="text-charcoal/50 block">Days:</span>
                <strong className="text-charcoal">{selectedApp.preferredDays}</strong>
              </div>
              <div>
                <span className="text-charcoal/50 block">Time & TZ:</span>
                <strong className="text-charcoal">{selectedApp.preferredTime} ({selectedApp.timeZone})</strong>
              </div>
            </div>

            {selectedApp.message && (
              <div className="p-3 rounded-xl bg-ivory text-xs border border-gray-100">
                <span className="font-bold text-primary block mb-0.5">Student Message / Goals:</span>
                <p className="text-charcoal/80">{selectedApp.message}</p>
              </div>
            )}

            <div className="flex items-center justify-between pt-4 border-t">
              <button
                onClick={() => openWhatsAppToStudent(selectedApp)}
                className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold flex items-center gap-2 hover:bg-emerald-700"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Message on WhatsApp</span>
              </button>

              <button
                onClick={() => setSelectedApp(null)}
                className="px-4 py-2 rounded-xl border border-gray-300 text-xs font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Pricing Modal */}
      {editingPricing && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-md rounded-3xl p-6 space-y-4 shadow-2xl border border-accent">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-serif text-lg font-bold text-primary">Edit {editingPricing.name}</h3>
              <button onClick={() => setEditingPricing(null)}>
                <X className="w-5 h-5 text-charcoal" />
              </button>
            </div>

            <form onSubmit={handleSavePriceEdit} className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-charcoal mb-1">USD Price ($/month)</label>
                <input
                  type="number"
                  value={editingPricing.prices.USD}
                  onChange={(e) => setEditingPricing({
                    ...editingPricing,
                    prices: { ...editingPricing.prices, USD: Number(e.target.value) }
                  })}
                  className="w-full p-2.5 rounded-lg border border-gray-300"
                />
              </div>

              <div>
                <label className="block font-bold text-charcoal mb-1">Days Per Week</label>
                <input
                  type="number"
                  value={editingPricing.daysPerWeek}
                  onChange={(e) => setEditingPricing({
                    ...editingPricing,
                    daysPerWeek: Number(e.target.value)
                  })}
                  className="w-full p-2.5 rounded-lg border border-gray-300"
                />
              </div>

              <div>
                <label className="block font-bold text-charcoal mb-1">Minutes Per Session</label>
                <input
                  type="number"
                  value={editingPricing.classDurationMinutes}
                  onChange={(e) => setEditingPricing({
                    ...editingPricing,
                    classDurationMinutes: Number(e.target.value)
                  })}
                  className="w-full p-2.5 rounded-lg border border-gray-300"
                />
              </div>

              <div className="pt-3 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setEditingPricing(null)}
                  className="px-4 py-2 rounded-lg border text-xs"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-primary text-white text-xs font-bold"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
