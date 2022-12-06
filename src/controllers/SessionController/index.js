const logIn = (req,res) => {
    const {name} = req.query || 'anonimo'
    req.session.name = name
    res.status(200).send(`Bienvenido ${name}`)
}

const logOut = (req,res) => {
    req.session.destroy();
	res.status(200).send('Hasta luego')
}

export {logIn, logOut}