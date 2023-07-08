import http from 'http';

const port = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
    if (req.url === '/tasks' && req.method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.end(JSON.stringify({message: 'Obtendo todas as tarefas'}));
    } else if (req.url === 'tasks' && req.method === 'POST') {
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.end(JSON.stringify({ message:'Criando uma nova tarefa'}));
    } else if (req.url.match(/\/tasks\/([a-zA-Z0-9]+)/) && req.method === 'PUT') {
        const taskId = req.url.split('/')[2];
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ message:`Atualizando a tarefa com ID ${taskId}`}))
    } else if (req.url.match(/\/tasks\/([a-zA-Z0-9]+)/) && req.method === 'DELETE') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ message:`Removendo a tarefa`}));
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ message:'Rota não encontrada'}))
    }

});

