import Ws from 'App/Services/Ws'
Ws.boot()

/**
 * Listen for incoming socket connections
 */
Ws.io.on('connection', (socket) => {
    console.log("New client connected");
    socket.emit('news', { hello: 'world' })

    socket.on('notification', (data) => {
        console.log(data);
        //Ws.io.emit('notification', { message: data});
        Ws.io.emit('message-chat', data);
        socket.broadcast.emit('notification', data);
    })


    socket.on('disconnect', () => {
        console.log('Client disconnected')
    })
})

