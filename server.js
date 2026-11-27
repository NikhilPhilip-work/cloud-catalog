
const path = require('path');

const express = require('express');

const app = express();

// Use environment port or default to 8080
const PORT = process.env.PORT || 8080;

// Serve static files from the public folder
app.use(express.static('public'));

// Homepage route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API 1: Cloud Services
app.get('/api/services', (req, res) => {
    const services = [
        {
            serviceId: 1,
            serviceName: 'Amazon EC2',
            category: 'IaaS',
            pricingModel: 'Pay-as-you-go'
        },
        {
            serviceId: 2,
            serviceName: 'AWS Lambda',
            category: 'PaaS',
            pricingModel: 'Pay-per-request'
        },
        {
            serviceId: 3,
            serviceName: 'Amazon S3',
            category: 'IaaS',
            pricingModel: 'Pay-per-storage'
        },
        {
            serviceId: 4,
            serviceName: 'Google Cloud Run',
            category: 'PaaS',
            pricingModel: 'Pay-per-use'
        }
    ];

    res.json(services);
});

// API 2: System Status
app.get('/api/status', (req, res) => {
    res.json({
        status: 'Operational',
        developer: 'NIKHIL',
        environment: 'Cloud PaaS'
    });
});

// Start the server
// Start server locally
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
}

// Export Express app for Vercel
module.exports = app;
