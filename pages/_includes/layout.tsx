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
        <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
        <style type="text/tailwindcss">{`
          @theme {
            --font-family-inter: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            --color-primary-blue: #1e40af;
            --color-secondary-blue: #3b82f6;
            --color-light-blue: #eff6ff;
            --color-dark-blue: #1e3a8a;
          }
        `}</style>
        <style>{`
          /* Custom Hero Animations */
          .hero-background {
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
          .code-line {
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
          .html-tag {
            animation: float 6s ease-in-out infinite;
          }
          
          .tag-1 { top: 20%; left: 15%; animation-delay: 0s; }
          .tag-2 { top: 30%; right: 20%; animation-delay: 1s; }
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
          
          /* Essential Animations Only */
          .badge-icon {
            animation: spin 3s linear infinite;
          }
          
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          .title-line-2 {
            background: linear-gradient(135deg, #60a5fa, #a855f7, #34d399);
            background-size: 300% 300%;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: gradientText 3s ease-in-out infinite;
          }
          
          @keyframes gradientText {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          
          .cursor {
            animation: blink 1s infinite;
          }
          
          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }
          
          .stat-divider {
            background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.3), transparent);
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
        `}</style>
      </head>
      <body class="font-[var(--font-family-inter)] bg-gray-50 text-gray-900 leading-relaxed min-h-screen">
        {children}
      </body>
    </html>
  </>
);