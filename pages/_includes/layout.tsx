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
            height: 300px;
            overflow: hidden;
            margin-bottom: 2rem;
          }
          
          .hero-background {
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, var(--primary-blue) 0%, var(--secondary-blue) 50%, var(--dark-blue) 100%);
            background-image: 
              radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.2) 0%, transparent 50%);
          }
          
          .hero-overlay {
            position: absolute;
            inset: 0;
            background: rgba(30, 64, 175, 0.1);
          }
          
          .hero-content {
            position: relative;
            z-index: 10;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 2rem;
          }
          
          .hero-title {
            font-size: 3rem;
            font-weight: 700;
            color: var(--white);
            margin-bottom: 1rem;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
          }
          
          .hero-subtitle {
            font-size: 1.25rem;
            color: rgba(255, 255, 255, 0.9);
            font-weight: 400;
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