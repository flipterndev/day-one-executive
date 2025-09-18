"use client";

import Link from "next/link";

interface OrganizationsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const services = [
  {
    title: "Executive Coaching",
    description: "One-on-one leadership development for senior executives and emerging leaders.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    color: "from-yellow-400/20 to-yellow-600/20"
  },
  {
    title: "Training/Workshops",
    description: "Tailored training programs designed for your organization's specific needs.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
    color: "from-blue-400/20 to-blue-600/20"
  },
  {
    title: "Keynote Talks",
    description: "Inspiring presentations that transform audiences and drive organizational change.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    color: "from-purple-400/20 to-purple-600/20"
  },
  {
    title: "Team Coaching",
    description: "Group coaching sessions to build high-performing teams and collaborative leadership.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    color: "from-green-400/20 to-green-600/20"
  }
];

export default function OrganizationsModal({ isOpen, onClose }: OrganizationsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="bg-black border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="relative bg-gradient-to-r from-white/[.03] to-white/[.01] border-b border-white/10 p-8 md:p-12">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/[.05] hover:bg-white/[.10] flex items-center justify-center transition-colors duration-200"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/60">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.06] px-4 py-2 mb-6">
                <span className="flex items-center gap-1" aria-hidden style={{ color: "var(--gold-start)" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  <span className="text-sm font-medium">For Organizations</span>
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Great Organizations Don&apos;t Run on <span className="text-gold-gradient">Legacy Code</span>
              </h2>
              
              <p className="text-lg md:text-xl text-soft-gray max-w-3xl mx-auto leading-relaxed mb-8">
                From learning to leading, equip leaders at every level to deliver results from Day One. Book a call with April to explore options to bring The Day One Executive to your organization.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {services.map((service, index) => {
                const isExecutiveCoaching = service.title === "Executive Coaching";
                const isTrainingWorkshops = service.title === "Training/Workshops";
                const isKeynoteTalks = service.title === "Keynote Talks";
                const isTeamCoaching = service.title === "Team Coaching";
                
                if (isExecutiveCoaching) {
                  return (
                    <Link 
                      key={index} 
                      href="/executive-coaching"
                      onClick={onClose}
                      className="service-option group relative bg-white/[.02] border border-white/10 rounded-xl p-6 hover:bg-white/[.04] hover:border-white/20 transition-all duration-300 block"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                          {service.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-gold-gradient transition-colors duration-300">
                            {service.title}
                          </h3>
                          <p className="text-sm text-soft-gray leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                }
                
                if (isTrainingWorkshops) {
                  return (
                    <Link 
                      key={index} 
                      href="/training-workshops"
                      onClick={onClose}
                      className="service-option group relative bg-white/[.02] border border-white/10 rounded-xl p-6 hover:bg-white/[.04] hover:border-white/20 transition-all duration-300 block"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                          {service.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-gold-gradient transition-colors duration-300">
                            {service.title}
                          </h3>
                          <p className="text-sm text-soft-gray leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                }
                
                if (isKeynoteTalks) {
                  return (
                    <Link 
                      key={index} 
                      href="/keynote-talks"
                      onClick={onClose}
                      className="service-option group relative bg-white/[.02] border border-white/10 rounded-xl p-6 hover:bg-white/[.04] hover:border-white/20 transition-all duration-300 block"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                          {service.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-gold-gradient transition-colors duration-300">
                            {service.title}
                          </h3>
                          <p className="text-sm text-soft-gray leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                }
                
                if (isTeamCoaching) {
                  return (
                    <Link 
                      key={index} 
                      href="/team-coaching"
                      onClick={onClose}
                      className="service-option group relative bg-white/[.02] border border-white/10 rounded-xl p-6 hover:bg-white/[.04] hover:border-white/20 transition-all duration-300 block"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                          {service.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-gold-gradient transition-colors duration-300">
                            {service.title}
                          </h3>
                          <p className="text-sm text-soft-gray leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                }
                
                return (
                  <div key={index} className="service-option group relative bg-white/[.02] border border-white/10 rounded-xl p-6 hover:bg-white/[.04] hover:border-white/20 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-gold-gradient transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-sm text-soft-gray leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
