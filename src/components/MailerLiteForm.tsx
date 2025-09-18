export default function MailerLiteForm() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative">
        {/* Form container */}
        <div className="relative bg-black/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gold-gradient mb-2">
              Beyond the Book
            </h3>
            <p className="text-soft-gray text-sm">
              Subscribe for actionable tips, event news, and resources to help you thrive from Day One.
            </p>
          </div>

          <form 
            action="https://connect.mailerlite.com/api/subscriptions" 
            method="post" 
            target="_blank" 
            className="space-y-6"
          >
            <input type="hidden" name="groups[]" value="YOUR_GROUP_ID" />
            <input type="hidden" name="api_key" value="YOUR_API_KEY" />
            
            {/* Name input */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-white/90">
                First Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="John"
                className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                style={{
                  '--tw-ring-color': 'var(--gold-start)',
                  '--tw-ring-opacity': '0.5'
                } as React.CSSProperties}
              />
            </div>

            {/* Email input */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-white/90">
                Email Address
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                  style={{
                    '--tw-ring-color': 'var(--gold-start)',
                    '--tw-ring-opacity': '0.5'
                  } as React.CSSProperties}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                  <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Submit button */}
            <button
              type="submit"
              className="w-full btn-gold flex items-center justify-center space-x-2"
            >
              <span>Subscribe</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>

            {/* Trust indicators */}
            <div className="flex items-center justify-center space-x-6 text-xs text-white/60 mt-6">
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>No spam</span>
              </div>
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Unsubscribe anytime</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
