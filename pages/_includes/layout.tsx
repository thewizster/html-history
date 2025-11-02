export default ({ title, children }: Lume.Data, _helpers: Lume.Helpers) => (
  <>
    {{ __html: "<!DOCTYPE html>" }}
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title || "HTML History Timeline"}</title>
        <style>{`
          body { 
            font-family: system-ui; 
            max-width: 600px; 
            margin: 2rem auto; 
            padding: 0 1rem; 
            background-color: #fafafa; 
          }
          h1 { 
            text-align: center; 
            color: #333; 
            margin-bottom: 2rem; 
          }
          .card {
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 1rem;
            margin: 1rem 0;
            background: #f9f9f9;
            transition: transform 0.2s;
          }
          .card:hover { 
            transform: translateY(-2px); 
            box-shadow: 0 4px 8px rgba(0,0,0,0.1); 
          }
          .year { 
            font-weight: bold; 
            color: #0066cc; 
            font-size: 1.2em; 
          }
          .desc { 
            margin-top: 0.5rem; 
            color: #444; 
          }
        `}</style>
      </head>
      <body>
        {children}
      </body>
    </html>
  </>
);