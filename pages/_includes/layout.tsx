export default ({ title, children }: Lume.Data, _helpers: Lume.Helpers) => (
  <>
    {{ __html: "<!DOCTYPE html>" }}
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title || "The History of HTML"}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <style>{`
          :root {
            --primary-blue: #1e40af;
            --secondary-blue: #3b82f6;
            --light-blue: #eff6ff;
            --dark-blue: #1e3a8a;
            --gray-50: #f9fafb;
            --gray-100: #f3f4f6;
            --gray-200: #e5e7eb;
            --gray-300: #d1d5db;
            --gray-400: #9ca3af;
            --gray-500: #6b7280;
            --gray-600: #4b5563;
            --gray-700: #374151;
            --gray-800: #1f2937;
            --gray-900: #111827;
            --white: #ffffff;
            --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
            --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
            --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
            --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
          }
          
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background-color: var(--gray-50);
            color: var(--gray-900);
            line-height: 1.6;
            min-height: 100vh;
          }

          /* Hero Section */
          .hero {
            position: relative;
            height: 100vh;
            min-height: 600px;
            overflow: hidden;
            margin-bottom: 0;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .hero-background {
            position: absolute;
            inset: 0;
            background: 
              radial-gradient(ellipse at top, #1e40af 0%, #0c1e5a 50%, #020617 100%),
              linear-gradient(135deg, #0f172a 0%, #1e293b  25%, #334155 50%, #475569 75%, #64748b 100%);
            background-size: 100% 100%, 400% 400%;
            animation: gradientShift 8s ease-in-out infinite;
          }
          
          @keyframes gradientShift {
            0%, 100% { background-position: 0% 50%, 0% 50%; }
            50% { background-position: 100% 50%, 100% 50%; }
          }
          
          /* Code Rain Animation */
          .code-rain {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            opacity: 0.1;
          }
          
          .code-line {
            position: absolute;
            color: #00ff88;
            font-family: 'Courier New', monospace;
            font-size: 14px;
            white-space: nowrap;
            animation: codefall 6s linear infinite;
          }
          
          .code-line:nth-child(1) { left: 10%; }
          .code-line:nth-child(2) { left: 20%; }
          .code-line:nth-child(3) { left: 30%; }
          .code-line:nth-child(4) { left: 40%; }
          .code-line:nth-child(5) { left: 50%; }
          .code-line:nth-child(6) { left: 60%; }
          .code-line:nth-child(7) { left: 70%; }
          .code-line:nth-child(8) { left: 80%; }
          .code-line:nth-child(9) { left: 90%; }
          .code-line:nth-child(10) { left: 95%; }
          
          @keyframes codefall {
            0% { top: -50px; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 100vh; opacity: 0; }
          }
          
          /* Floating HTML Elements */
          .floating-elements {
            position: absolute;
            inset: 0;
            pointer-events: none;
          }
          
          .html-tag {
            position: absolute;
            background: rgba(59, 130, 246, 0.1);
            border: 2px solid rgba(59, 130, 246, 0.3);
            border-radius: 8px;
            padding: 8px 12px;
            font-family: 'Courier New', monospace;
            font-size: 14px;
            color: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(10px);
            animation: float 6s ease-in-out infinite;
          }
          
          .tag-1 { top: 20%; left: 15%; animation-delay: 0s; }
          .tag-2 { top: 30%; right: 20%; animation-delay: 1s; font-size: 18px; font-weight: bold; }
          .tag-3 { top: 60%; left: 10%; animation-delay: 2s; }
          .tag-4 { top: 70%; right: 15%; animation-delay: 3s; }
          .tag-5 { top: 40%; left: 5%; animation-delay: 4s; }
          .tag-6 { top: 50%; right: 8%; animation-delay: 5s; }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            25% { transform: translateY(-20px) rotate(2deg); }
            50% { transform: translateY(0px) rotate(0deg); }
            75% { transform: translateY(-10px) rotate(-1deg); }
          }
          
          /* Gradient Mesh */
          .gradient-mesh {
            position: absolute;
            inset: 0;
            background: 
              radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 50%);
            filter: blur(100px);
            animation: meshMove 10s ease-in-out infinite;
          }
          
          @keyframes meshMove {
            0%, 100% { transform: scale(1) rotate(0deg); }
            50% { transform: scale(1.1) rotate(5deg); }
          }
          
          /* Hero Content */
          .hero-content {
            position: relative;
            z-index: 10;
            text-align: center;
            padding: 2rem;
            max-width: 800px;
          }
          
          .hero-badge {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 50px;
            padding: 0.5rem 1rem;
            backdrop-filter: blur(10px);
            margin-bottom: 2rem;
            animation: slideUp 1s ease-out;
          }
          
          .badge-icon {
            font-size: 1.2rem;
            animation: spin 3s linear infinite;
          }
          
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          .badge-text {
            color: rgba(255, 255, 255, 0.9);
            font-weight: 500;
            font-size: 0.9rem;
          }
          
          .hero-title {
            font-size: clamp(2.5rem, 8vw, 5rem);
            font-weight: 800;
            line-height: 1.1;
            margin-bottom: 2rem;
            animation: slideUp 1s ease-out 0.2s both;
          }
          
          .title-line-1, .title-line-3 {
            display: block;
            color: var(--white);
            text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
          }
          
          .title-line-2 {
            display: block;
            background: linear-gradient(135deg, #60a5fa, #a855f7, #34d399);
            background-size: 300% 300%;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: gradientText 3s ease-in-out infinite;
            text-shadow: none;
          }
          
          @keyframes gradientText {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          
          .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
          }
          
          .hero-subtitle {
            font-size: 1.25rem;
            color: rgba(255, 255, 255, 0.8);
            font-weight: 300;
            margin-bottom: 3rem;
            animation: slideUp 1s ease-out 0.4s both;
          }
          
          .typing-text {
            border-right: 2px solid transparent;
          }
          
          .cursor {
            animation: blink 1s infinite;
            color: #60a5fa;
          }
          
          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }
          
          .hero-stats {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 2rem;
            margin-bottom: 3rem;
            animation: slideUp 1s ease-out 0.6s both;
          }
          
          .stat-item {
            text-align: center;
          }
          
          .stat-number {
            font-size: 2.5rem;
            font-weight: 700;
            color: var(--white);
            line-height: 1;
            text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
          }
          
          .stat-label {
            font-size: 0.9rem;
            color: rgba(255, 255, 255, 0.7);
            font-weight: 300;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-top: 0.5rem;
          }
          
          .stat-divider {
            width: 1px;
            height: 40px;
            background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.3), transparent);
          }
          
          .scroll-indicator {
            position: absolute;
            bottom: 2rem;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
            color: rgba(255, 255, 255, 0.6);
            animation: bounce 2s infinite;
          }
          
          .scroll-arrow {
            width: 20px;
            height: 20px;
            border-right: 2px solid currentColor;
            border-bottom: 2px solid currentColor;
            transform: rotate(45deg);
          }
          
          .scroll-text {
            font-size: 0.8rem;
            font-weight: 300;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
            40% { transform: translateX(-50%) translateY(-10px); }
            60% { transform: translateX(-50%) translateY(-5px); }
          }

          /* Main Layout */
          .main-container {
            max-width: 1400px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 280px 1fr 320px;
            gap: 2rem;
            padding: 0 2rem;
            align-items: start;
          }

          /* Left Sidebar */
          .left-sidebar {
            position: sticky;
            top: 2rem;
            height: fit-content;
          }

          /* Main Content */
          .main-content {
            min-height: 100vh;
          }

          /* Right Sidebar */
          .right-sidebar {
            position: sticky;
            top: 2rem;
            height: fit-content;
          }

          /* Sidebar Cards */
          .sidebar-card {
            background: var(--white);
            border-radius: 12px;
            padding: 1.5rem;
            margin-bottom: 1.5rem;
            box-shadow: var(--shadow);
            border: 1px solid var(--gray-200);
          }
          
          .sidebar-title, .card-title {
            font-size: 1.125rem;
            font-weight: 600;
            color: var(--gray-900);
            margin-bottom: 1rem;
            padding-bottom: 0.5rem;
            border-bottom: 2px solid var(--light-blue);
          }

          /* Sidebar Navigation */
          .sidebar-nav {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }
          
          .sidebar-link {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 0.75rem;
            border-radius: 8px;
            text-decoration: none;
            color: var(--gray-700);
            transition: all 0.2s ease;
            border: 1px solid transparent;
          }
          
          .sidebar-link:hover {
            background-color: var(--light-blue);
            color: var(--primary-blue);
            border-color: var(--secondary-blue);
          }
          
          .sidebar-link.active {
            background-color: var(--secondary-blue);
            color: var(--white);
            font-weight: 500;
          }
          
          .milestone-year {
            font-weight: 600;
            font-size: 0.875rem;
            color: var(--secondary-blue);
            min-width: 40px;
          }
          
          .sidebar-link.active .milestone-year {
            color: var(--white);
          }
          
          .milestone-title {
            font-size: 0.875rem;
          }

          /* Timeline Cards */
          .timeline-card {
            background: var(--white);
            border-radius: 12px;
            padding: 1.5rem;
            margin-bottom: 2rem;
            box-shadow: var(--shadow);
            border: 1px solid var(--gray-200);
            transition: all 0.3s ease;
          }
          
          .timeline-card:hover {
            transform: translateY(-4px);
            box-shadow: var(--shadow-lg);
          }
          
          .card-header {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1rem;
          }
          
          .card-avatar {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            overflow: hidden;
            flex-shrink: 0;
          }
          
          .avatar-icon {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          
          .avatar-placeholder {
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, var(--secondary-blue), var(--primary-blue));
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--white);
            font-weight: 600;
            font-size: 0.75rem;
          }
          
          .card-meta {
            flex: 1;
            min-width: 0;
          }
          
          .card-title {
            font-size: 1.125rem;
            font-weight: 600;
            color: var(--gray-900);
            margin: 0 0 0.25rem 0;
            border: none;
            padding: 0;
          }
          
          .card-date {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.875rem;
            color: var(--gray-500);
          }
          
          .year {
            font-weight: 600;
            color: var(--secondary-blue);
          }
          
          .category {
            padding: 0.25rem 0.5rem;
            background: var(--light-blue);
            color: var(--primary-blue);
            border-radius: 12px;
            font-size: 0.75rem;
            font-weight: 500;
          }
          
          .card-content {
            margin-bottom: 1rem;
          }
          
          .card-description {
            color: var(--gray-700);
            line-height: 1.6;
            margin-bottom: 1rem;
          }
          
          .card-image {
            border-radius: 8px;
            overflow: hidden;
            margin-top: 1rem;
          }
          
          .card-image img {
            width: 100%;
            height: auto;
            display: block;
          }
          
          .card-footer {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-top: 1rem;
            border-top: 1px solid var(--gray-200);
          }
          
          .card-actions {
            display: flex;
            gap: 1rem;
          }
          
          .action-btn {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            background: none;
            border: none;
            color: var(--gray-500);
            font-size: 0.875rem;
            cursor: pointer;
            padding: 0.5rem;
            border-radius: 6px;
            transition: all 0.2s ease;
          }
          
          .action-btn:hover {
            background: var(--gray-100);
            color: var(--secondary-blue);
          }
          
          .card-timestamp {
            font-size: 0.875rem;
            color: var(--gray-400);
          }

          /* Right Sidebar Specific */
          .stats-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          
          .stat-item {
            text-align: center;
            padding: 1rem;
            background: var(--light-blue);
            border-radius: 8px;
          }
          
          .stat-number {
            font-size: 2rem;
            font-weight: 700;
            color: var(--primary-blue);
            line-height: 1;
          }
          
          .stat-label {
            font-size: 0.875rem;
            color: var(--gray-600);
            margin-top: 0.25rem;
          }
          
          .facts-list {
            list-style: none;
          }
          
          .fact-item {
            display: flex;
            align-items: flex-start;
            gap: 0.75rem;
            padding: 0.75rem 0;
            border-bottom: 1px solid var(--gray-100);
          }
          
          .fact-item:last-child {
            border-bottom: none;
          }
          
          .fact-icon {
            font-size: 1.25rem;
            flex-shrink: 0;
          }
          
          .fact-text {
            font-size: 0.875rem;
            color: var(--gray-700);
            line-height: 1.5;
          }
          
          .resource-links {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
          }
          
          .resource-link {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 0.75rem;
            background: var(--gray-50);
            border-radius: 8px;
            text-decoration: none;
            color: var(--gray-700);
            transition: all 0.2s ease;
            border: 1px solid var(--gray-200);
          }
          
          .resource-link:hover {
            background: var(--light-blue);
            color: var(--primary-blue);
            border-color: var(--secondary-blue);
          }
          
          .resource-icon {
            font-size: 1.25rem;
          }
          
          .resource-text {
            font-size: 0.875rem;
            font-weight: 500;
          }

          /* Responsive Design */
          @media (max-width: 1200px) {
            .main-container {
              grid-template-columns: 1fr;
              gap: 1.5rem;
            }
            
            .left-sidebar,
            .right-sidebar {
              position: static;
            }
          }
          
          @media (max-width: 768px) {
            .hero-title {
              font-size: 2rem;
            }
            
            .hero-subtitle {
              font-size: 1rem;
            }
            
            .main-container {
              padding: 0 1rem;
            }
            
            .card-header {
              flex-direction: column;
              align-items: flex-start;
              gap: 0.75rem;
            }
            
            .card-footer {
              flex-direction: column;
              gap: 1rem;
              align-items: flex-start;
            }
          }
        `}</style>
      </head>
      <body>
        {children}
      </body>
    </html>
  </>
);