exports.createTask = async (req,res) => {
    try{ 
        const { title,description } = req.body;

        const newTask = new Task ({
            title,
            description
        });

        const savedTask = await newTask.save()
        
        res.status(201).json(savedTask)
    } catch (error) {
        res.status(500).json({ error:'Erro ao criar tarefa' })
    }

}