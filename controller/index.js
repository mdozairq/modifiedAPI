const axios = require("axios");

//function to get todo which calls third party API and return the required response 
const getTodo = async (req, res) => {
    try {
        var url = "https://jsonplaceholder.typicode.com/todos";
        const responseData = await axios.get(url)
        let datas = [];
        // responseData.data.forEach(element => {
        //     delete element.userId;
        //     datas.push(element);
        // });
        responseData.data.forEach(element => {
            // delete element.userId;
            datas.push({ id: element.id, title: element.title, completed: element.completed });
        });
        res.status(200).json(datas)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};


//function to get user which calls third party API and return the required response 
const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        var url1 = `https://jsonplaceholder.typicode.com/users/${id}`;
        var url2 = `https://jsonplaceholder.typicode.com/todos`;
        const res1 = await axios.get(url1);
        const res2 = await axios.get(url2);
        // console.log(res1.data);
        // console.log(res2.data);
        let todoData = (res2.data).filter(a => a.userId == id);
        res.status(200).json({...res1.data, todos: todoData})
        // console.log(todos);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};

module.exports = { getTodo, getUser };