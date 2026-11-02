import React, { useState } from 'react';
import { 
  User, 
  BookOpen, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Bell, 
  Video, 
  Award, 
  FileText, 
  Phone, 
  TrendingUp, 
  LogOut,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { PageTab } from '../types';

interface StudentDashboardProps {
  setActiveTab: (tab: PageTab) => void;
}

export const StudentDashboard: React.FC<StudentDashboardProps> = ({ setActiveTab }) => {
  const [activeTab, setActiveDashboardTab] = useState<'overview' | 'schedule' | 'progress' | 'assignments' | 'notifications'>('overview');

  const student = {
    name: 'Zayd Ali',
    id: 'TQA-ST-2026-88',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    enrolledSince: 'September 2026',
    overallAttendance: '96%',
    classesCompleted: 28,
    activeCourses: [
      {
        id: 'noorani-qaida',
        name: 'Noorani Qaida & Tajweed Basics',
        teacher: 'Qari Muhammad Abdullah',
        progress: 85,
        currentLesson: 'Lesson 14: Rules of Noon Sakinah & Meem Sakinah',
        nextClass: 'Today at 5:30 PM (GMT)'
      },
      {
        id: 'daily-duas',
        name: 'Daily Masnoon Duas & Salah',
        teacher: 'Ustadha Fatima Noor',
        progress: 60,
        currentLesson: 'Morning & Evening Protection Adhkar',
        nextClass: 'Thursday at 6:00 PM (GMT)'
      }
    ],
    nextClass: {
      subject: 'Noorani Qaida - Lesson 14 Revision',
      time: '5:30 PM - 6:00 PM (GMT)',
      teacher: 'Qari Muhammad Abdullah',
      zoomLink: 'https://zoom.us/j/sample-tazyeenul-quran-live'
    },
    assignments: [
      {
        id: 'asg-1',
        title: 'Recitation Audio: Surah Al-Ikhlas with Tajweed Ghunnah',
        dueDate: 'Tomorrow, Nov 3',
        status: 'Submitted - Graded (9.5/10)',
        feedback: 'Excellent pronunciation of Qalqalah on the Dal. MashaAllah!'
      },
      {
        id: 'asg-2',
        title: 'Memorize Morning Adhkar #4 (Sayyidul Istighfar)',
        dueDate: 'Nov 6, 2026',
        status: 'Pending Submission',
        feedback: 'Practice rhythm with parents before recording.'
      }
    ],
    notifications: [
      {
        id: 'notif-1',
        title: 'Weekly Progress Report Available',
        time: 'Yesterday',
        body: 'Teacher Qari Abdullah submitted your October month-end evaluation. You passed the Makharij milestone!'
      },
      {
        id: 'notif-2',
        title: 'Class Reminder',
        time: '2 hours ago',
        body: 'Your live session starts today at 5:30 PM. Please prepare your Noorani Qaida book.'
      }
    ]
  };

  const [assignments, setAssignments] = useState(student.assignments);

  const handleSimulateAudioSubmission = (id: string) => {
    setAssignments(assignments.map(a => a.id === id ? { ...a, status: 'Submitted - Pending Teacher Review' } : a));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Top Welcome Header */}
      <div className="bg-gradient-to-r from-primary-dark via-primary to-secondary text-white rounded-3xl p-6 sm:p-8 border border-accent/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-accent shadow-md shrink-0">
            <img src={student.avatar} alt={student.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-serif font-bold text-white">
                Assalamu Alaikum, {student.name}!
              </h1>
              <span className="text-[10px] bg-accent text-primary-dark px-2 py-0.5 rounded-full font-bold">
                Active Student
              </span>
            </div>
            <p className="text-xs text-ivory/80 mt-0.5">
              Student ID: <span className="font-mono text-accent">{student.id}</span> • Enrolled: {student.enrolledSince}
            </p>
          </div>
        </div>

        {/* Quick Stats Badges */}
        <div className="flex items-center gap-4 text-xs">
          <div className="bg-white/10 px-4 py-2.5 rounded-2xl border border-white/20 text-center">
            <span className="text-[10px] text-ivory/70 block uppercase">Attendance</span>
            <span className="font-bold text-base text-accent">{student.overallAttendance}</span>
          </div>
          <div className="bg-white/10 px-4 py-2.5 rounded-2xl border border-white/20 text-center">
            <span className="text-[10px] text-ivory/70 block uppercase">Completed</span>
            <span className="font-bold text-base text-white">{student.classesCompleted} Classes</span>
          </div>
          <button
            onClick={() => setActiveTab('home')}
            className="p-2.5 rounded-2xl bg-white/10 hover:bg-white/20 text-ivory transition-colors"
            title="Return to Main Website"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-gray-200 overflow-x-auto pb-2 text-xs font-semibold">
        {[
          { id: 'overview', label: 'Dashboard Overview' },
          { id: 'schedule', label: 'Class Schedule & Live Link' },
          { id: 'progress', label: 'Surah & Lesson Progress' },
          { id: 'assignments', label: 'Assignments & Recitations' },
          { id: 'notifications', label: 'Notifications & Feedback' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveDashboardTab(tab.id as any)}
            className={`px-4 py-2 rounded-xl transition-all shrink-0 ${
              activeTab === tab.id
                ? 'bg-primary text-white shadow-sm'
                : 'text-charcoal/70 hover:bg-gray-100'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* TAB 1: Overview */}
      {activeTab === 'overview' && (
        <div className="space-y-8 animate-in fade-in duration-200">
          
          {/* Live Next Class Banner */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-accent shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Next Upcoming Live Class
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-primary">
                {student.nextClass.subject}
              </h3>
              <p className="text-xs text-charcoal/70">
                Teacher: <strong>{student.nextClass.teacher}</strong> • Time: <strong>{student.nextClass.time}</strong>
              </p>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <a
                href={student.nextClass.zoomLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Video className="w-4 h-4" />
                <span>Join Virtual Classroom</span>
              </a>

              <a
                href="https://wa.me/923052350269?text=Assalamu%20Alaikum%2C%20I%20have%20a%20question%20regarding%20today%27s%20class"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-ivory text-primary hover:bg-gray-100 border border-gray-200"
                title="Message Teacher"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
              </a>
            </div>
          </div>

          {/* Enrolled Courses Progress Cards */}
          <div>
            <h3 className="font-serif text-lg font-bold text-primary mb-4">
              Enrolled Courses & Milestones
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {student.activeCourses.map((c) => (
                <div key={c.id} className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-serif text-base font-bold text-primary">{c.name}</h4>
                      <p className="text-xs text-charcoal/60 mt-0.5">Instructor: {c.teacher}</p>
                    </div>
                    <span className="text-xs font-bold text-primary bg-ivory px-2.5 py-1 rounded-lg border border-accent/30">
                      {c.progress}% Done
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div>
                    <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-accent to-primary rounded-full transition-all duration-500"
                        style={{ width: `${c.progress}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-[11px] text-charcoal/50 mt-1">
                      <span>Beginner Level</span>
                      <span>Graduation Milestone</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-ivory text-xs border border-gray-100 space-y-1">
                    <span className="text-charcoal/60 block">Current Focus:</span>
                    <strong className="text-primary block">{c.currentLesson}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* TAB 2: Schedule */}
      {activeTab === 'schedule' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-6 animate-in fade-in">
          <div>
            <h3 className="font-serif text-xl font-bold text-primary">Weekly Schedule & Attendance Tracker</h3>
            <p className="text-xs text-charcoal/60 mt-1">Classes take place 3 days per week via live 1-on-1 video call.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-ivory border border-accent/20 space-y-2">
              <span className="text-xs font-bold text-primary uppercase">Monday</span>
              <div className="text-sm font-bold text-charcoal">5:30 PM - 6:00 PM (GMT)</div>
              <p className="text-xs text-charcoal/60">Noorani Qaida & Tajweed</p>
              <span className="inline-block text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-semibold">Completed</span>
            </div>
            <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-300 space-y-2">
              <span className="text-xs font-bold text-emerald-900 uppercase">Wednesday (Today)</span>
              <div className="text-sm font-bold text-primary">5:30 PM - 6:00 PM (GMT)</div>
              <p className="text-xs text-charcoal/60">Noorani Qaida - Lesson 14</p>
              <span className="inline-block text-[10px] bg-primary text-white px-2 py-0.5 rounded font-semibold animate-pulse">Upcoming</span>
            </div>
            <div className="p-5 rounded-2xl bg-ivory border border-accent/20 space-y-2">
              <span className="text-xs font-bold text-primary uppercase">Friday</span>
              <div className="text-sm font-bold text-charcoal">5:30 PM - 6:00 PM (GMT)</div>
              <p className="text-xs text-charcoal/60">Daily Duas & Review</p>
              <span className="inline-block text-[10px] bg-gray-100 text-charcoal/60 px-2 py-0.5 rounded font-semibold">Scheduled</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 text-xs text-charcoal/70 flex items-center justify-between">
            <span>Need to reschedule an upcoming class due to travel or exams?</span>
            <a
              href="https://wa.me/923052350269?text=Assalamu%20Alaikum%2C%20I%20would%20like%20to%20request%20rescheduling%20a%20class"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-emerald-700 hover:underline"
            >
              Request Reschedule via WhatsApp →
            </a>
          </div>
        </div>
      )}

      {/* TAB 3: Progress */}
      {activeTab === 'progress' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-6 animate-in fade-in">
          <div>
            <h3 className="font-serif text-xl font-bold text-primary">Quranic Memorization & Tajweed Progress</h3>
            <p className="text-xs text-charcoal/60 mt-1">Detailed track of Surahs recited, memorized, and verified with Tajweed.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded-2xl bg-ivory border border-accent/20">
              <span className="text-2xl font-serif font-black text-primary">14</span>
              <span className="block text-xs text-charcoal/60 mt-1">Qaida Lessons Cleared</span>
            </div>
            <div className="p-4 rounded-2xl bg-ivory border border-accent/20">
              <span className="text-2xl font-serif font-black text-primary">6</span>
              <span className="block text-xs text-charcoal/60 mt-1">Short Surahs Memorized</span>
            </div>
            <div className="p-4 rounded-2xl bg-ivory border border-accent/20">
              <span className="text-2xl font-serif font-black text-primary">12</span>
              <span className="block text-xs text-charcoal/60 mt-1">Masnoon Duas Learned</span>
            </div>
            <div className="p-4 rounded-2xl bg-ivory border border-accent/20">
              <span className="text-2xl font-serif font-black text-primary">9.4</span>
              <span className="block text-xs text-charcoal/60 mt-1">Avg Tajweed Score /10</span>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: Assignments */}
      {activeTab === 'assignments' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-6 animate-in fade-in">
          <div>
            <h3 className="font-serif text-xl font-bold text-primary">Homework & Audio Recitation Practice</h3>
            <p className="text-xs text-charcoal/60 mt-1">Listen to audio examples, record your recitation, and receive teacher marks.</p>
          </div>

          <div className="space-y-4">
            {assignments.map((asg) => (
              <div key={asg.id} className="p-5 rounded-2xl border border-gray-200 bg-ivory/30 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h4 className="font-serif font-bold text-primary text-sm">{asg.title}</h4>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                    {asg.status}
                  </span>
                </div>
                <p className="text-xs text-charcoal/70">
                  Due Date: <strong>{asg.dueDate}</strong> • Feedback: <em>"{asg.feedback}"</em>
                </p>

                {asg.status.includes('Pending') && (
                  <button
                    onClick={() => handleSimulateAudioSubmission(asg.id)}
                    className="px-4 py-1.5 rounded-lg bg-primary text-white text-xs font-semibold hover:bg-primary-light"
                  >
                    Upload Voice Note / Submit Recitation
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 5: Notifications */}
      {activeTab === 'notifications' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-4 animate-in fade-in">
          <h3 className="font-serif text-xl font-bold text-primary">Notifications & Announcements</h3>
          <div className="space-y-3">
            {student.notifications.map((n) => (
              <div key={n.id} className="p-4 rounded-xl border border-gray-100 bg-gray-50 flex items-start gap-3">
                <Bell className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-primary text-sm">{n.title}</h4>
                  <p className="text-xs text-charcoal/70 mt-0.5">{n.body}</p>
                  <span className="text-[10px] text-charcoal/40 block mt-1">{n.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
