const value = useContext(MyContext);

/*
Jangan lupa bahwa argumen untuk useContext harus berupa obyek konteks itu sendiri:

Benar: useContext(MyContext)
Salah: useContext(MyContext.Consumer)
Salah: useContext(MyContext.Provider)

*/
