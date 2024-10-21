const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8080;

app.use(cors());
app.get('/api/data', (req, res) => {
    const data = [
        {
            text: 'A picturesque scene featuring a tranquil lake',
            year: 'This image captures the beauty of a peaceful lake'
        },
        {
            text1: 'A stunning scene featuring a salmon-colored',
            year1: 'This image depicts a picturesque landscape'
        },
        {
            text2: 'A serene scene depicting a small boat ',
            year2: 'This image captures a peaceful moment with a small boat'
        },
        {
            text3: 'A captivating scene featuring a fox standing gracefully',
            year3: 'This image depicts a majestic fox standing poised'
        },
        {
            text4: 'A breathtaking scene capturing the sun rising above the Antarctic',
            year4: 'This image showcases the beauty of Antarctica'
        },
        {
            text5: 'A striking image of a red mulberry tree',
            year5: 'This image features a beautiful red mulberry tree'
        },
    ];
    res.json(data);
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});