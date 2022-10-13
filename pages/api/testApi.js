export default function handler(req, res) {

    const reqMethod = req.method;

    if (reqMethod === "GET") {

    } 

    if (reqMethod === "POST") {

    }

    if (reqMethod === "PUT") {
        
    }

    console.log(reqMethod);

    const posts = [
        {
            id: 1,
            title: 'Test',
            body: "slkdfjlkasjfd;sdjaflkjdsalf;jaskl;fjlk"
        },
        {
            id: 3,
            title: 'Test3',
            body: "slkdfjlkasjfd;sdjaflkjdsalf;jaskl;fjlk"
        },
        {
            id: 2,
            title: 'Test2',
            body: "slkdfjlkasjfd;sdjaflkjdsalf;jaskl;fjlk"
        },
        {
            id: 4,
            title: 'Test',
            body: "slkdfjlkasjfd;sdjaflkjdsalf;jaskl;fjlk"
        }
    ]

    res.json({ourData: posts});
}