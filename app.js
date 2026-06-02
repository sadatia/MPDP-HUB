const express = require('express');
const app = express();
const PORT = 4455;

app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>MPDP Phase-1 | PTJV</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
        <style>
            :root {
                --sky-blue: #00BFFF;
                --deep-blue: #002366; 
                --safety-orange: #FF8C00;
                --earth-brown: #5D4037;
                --construction-yellow: #FFBF00;
                --white: #ffffff;
            }

            body { 
                font-family: 'Segoe UI', system-ui, sans-serif; 
                background: linear-gradient(135deg, #cfd8dc 0%, #eceff1 100%);
                margin: 0; padding: 20px; display: flex; justify-content: center; align-items: center; min-height: 100vh;
            }

            .container { width: 100%; max-width: 1100px; box-shadow: 0 20px 50px rgba(0,0,0,0.1); border-radius: 20px; overflow: hidden; background: var(--white); }

            .header { background-color: var(--deep-blue); color: var(--white); text-align: center; padding: 40px 20px; border-bottom: 6px solid var(--safety-orange); }
            .header h1 { margin: 0; font-size: 2.2rem; text-transform: uppercase; letter-spacing: 2px; }
            .header p { margin: 8px 0 0; color: var(--sky-blue); font-weight: bold; }

            .dashboard { display: grid; grid-template-columns: 1fr 1fr; }
            .column { padding: 40px; }
            .left-column { background-color: var(--white); border-right: 1px solid #f0f0f0; }
            .right-column { background-color: #fafafa; }

            h2 { color: var(--earth-brown); font-size: 1.25rem; margin-bottom: 25px; text-transform: uppercase; display: flex; align-items: center; gap: 10px; }
            h2 i { color: var(--safety-orange); }

            .btn {
                display: flex; align-items: center; padding: 15px 20px; margin-bottom: 12px;
                text-decoration: none; font-weight: 600; border-radius: 10px; transition: all 0.3s ease;
                font-size: 0.95rem; border: 1px solid transparent; cursor: pointer; width: 100%; box-sizing: border-box;
            }

            .btn i:first-child { width: 30px; font-size: 1.2rem; margin-right: 12px; text-align: center; }

            .left-column .btn { background-color: var(--construction-yellow); color: #212121; box-shadow: 0 4px 0 #d4a000; }
            .left-column .btn:hover { background-color: var(--sky-blue); color: var(--white); box-shadow: 0 4px 0 #0091ca; transform: translateY(-2px); }

            .right-column .btn { background: var(--white); color: var(--earth-brown); border: 1px solid #e0e0e0; }
            .right-column .btn:hover { border-color: var(--safety-orange); color: var(--safety-orange); transform: translateX(5px); }

            /* Improved Dropdown Styling */
            .dropdown-container { margin-bottom: 12px; position: relative; }
            .dropdown-content { 
                max-height: 0; overflow: hidden; transition: max-height 0.4s ease-in-out; 
                background: #f9f9f9; border-radius: 0 0 10px 10px; margin-top: -8px; border: 0px solid #ddd;
            }
            .dropdown-content.show { max-height: 600px; border-width: 1px; padding: 10px 0; border-top: none; }
            
            .sub-link {
                display: flex; align-items: center; padding: 10px 20px; color: #444; text-decoration: none; 
                font-size: 0.85rem; transition: background 0.2s, color 0.2s; border-left: 3px solid transparent;
            }
            .sub-link i { margin-right: 10px; font-size: 0.7rem; color: var(--safety-orange); }
            .sub-link:hover { background: #f0f0f0; color: var(--deep-blue); border-left-color: var(--safety-orange); }
            
            .chevron { margin-left: auto; transition: transform 0.3s; }
            .rotate { transform: rotate(180deg); }

            @media (max-width: 850px) { .dashboard { grid-template-columns: 1fr; } }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>MPDP Phase-1</h1>
                <p>PENTA-OCEAN / TOA JV</p>
            </div>

            <div class="dashboard">
                <div class="column left-column">
                    <h2><i class="fa-solid fa-helmet-safety"></i> In-house WebApps</h2>
                    <a href="https://progress.mpdp-p1-ptjv.net/" target="_blank" class="btn"><i class="fa-solid fa-camera"></i> Progress Photo</a>
                    <a href="https://survey.mpdp-p1-ptjv.net/" target="_blank" class="btn"><i class="fa-solid fa-map-location-dot"></i> Survey Request</a>
                    <a href="https://booking.mpdp-p1-ptjv.net/" target="_blank" class="btn"><i class="fa-solid fa-calendar-check"></i> Booking System</a>
                    <a href="https://manhour.mpdp-p1-ptjv.net/" target="_blank" class="btn"><i class="fa-solid fa-stopwatch"></i> Manhour Tracking</a>
                    <a href="https://tbm.mpdp-p1-ptjv.net/" target="_blank" class="btn"><i class="fa-solid fa-bore-hole"></i> TBM Health Dec</a>
                    <a href="https://sic.mpdp-p1-ptjv.net/" target="_blank" class="btn"><i class="fa-solid fa-comment-dots"></i> SIC Feedback</a>
                    <!-- Fixed Icon Below: Changed to fa-water -->
                    <a href="https://tide.mpdp-p1-ptjv.net/" target="_blank" class="btn"><i class="fa-solid fa-water"></i> TIDE Monitoring Feedback</a>
                </div>

                <div class="column right-column">
                    <h2><i class="fa-solid fa-folder-open"></i> Resources</h2>
                    <a href="https://sites.google.com/mail.penta-ocean.co.jp/ptjvportal/home" target="_blank" class="btn"><i class="fa-solid fa-id-card-clip"></i> HR & Administration</a>
                    
                    <div class="dropdown-container">
                        <div class="btn" onclick="toggleDropdown(event)">
                            <i class="fa-solid fa-clock-rotate-left"></i> OT Applications
                            <i class="fa-solid fa-chevron-down chevron" id="chevron"></i>
                        </div>
                        <div class="dropdown-content" id="otDropdown">
                            <a href="https://forms.gle/nbUK1wVhT6KZHwHo7" target="_blank" class="sub-link"><i class="fa-solid fa-circle"></i> OT Request - Takano-san</a>
                            <a href="https://forms.gle/1NwSugcqWDWnUao5A" target="_blank" class="sub-link"><i class="fa-solid fa-circle"></i> OT Request - Amano-san</a>
                            <a href="https://forms.gle/AFQsfBC84GkyaCQr8" target="_blank" class="sub-link"><i class="fa-solid fa-circle"></i> OT Request - Kamarul-san</a>
                            <a href="https://forms.gle/3vDLPyMeMy2kSL2H8" target="_blank" class="sub-link"><i class="fa-solid fa-circle"></i> OT Request - Ishikawa-san</a>
                            <a href="https://forms.gle/bFAp4FRJq8yY2zBJ9" target="_blank" class="sub-link"><i class="fa-solid fa-circle"></i> OT Request - Tada-san</a>
                            <a href="https://forms.gle/wwFa4PpvmpwV2qpZA" target="_blank" class="sub-link"><i class="fa-solid fa-circle"></i> OT Request - Yuki-san</a>
                            <a href="https://forms.gle/vaJxF6L4dqTXPsHV6" target="_blank" class="sub-link"><i class="fa-solid fa-circle"></i> OT Request - Admin Dept</a>
                        </div>
                    </div>

                    <a href="https://s4.novade.net/" target="_blank" class="btn"><i class="fa-solid fa-helmet-safety"></i> Novade</a>
                    <a href="https://endpointcentral.manageengine.com/webclient" target="_blank" class="btn"><i class="fa-solid fa-laptop-code"></i> ManageEngine</a>
                    <a href="https://servicedesk.penta-ocean.co.jp/" target="_blank" class="btn"><i class="fa-solid fa-headset"></i> Service Desk</a>
                    <a href="https://noticeboard.mpdp-p1-ptjv.net/" target="_blank" class="btn" style="background:#eee; border:none;"><i class="fa-solid fa-bullhorn"></i> Notice Board</a>
                </div>
            </div>
        </div>

        <script>
            function toggleDropdown(event) {
                event.stopPropagation();
                const content = document.getElementById('otDropdown');
                const chevron = document.getElementById('chevron');
                content.classList.toggle('show');
                chevron.classList.toggle('rotate');
            }

            window.onclick = function(event) {
                if (!event.target.matches('.btn') && !event.target.closest('.dropdown-container')) {
                    const dropdown = document.getElementById('otDropdown');
                    const chevron = document.getElementById('chevron');
                    if (dropdown.classList.contains('show')) {
                        dropdown.classList.remove('show');
                        chevron.classList.remove('rotate');
                    }
                }
            }
        </script>
    </body>
    </html>
    `);
});

app.listen(PORT, () => {
    console.log("✅ Launch Page running at http://localhost:" + PORT);
});
