const lista=[
    {'id':1,'nombre':'iphone 13','categoria':'iphone','precio':400000,'cantidad':2,'img':'../img/ip13.png','detalles':'camara 12 mpx - 64 gb ram'},

    {'id':2,'nombre':'samsung s24','categoria':'samsung','precio':300000,'cantidad':4,'img':'../img/sas24plus.png','detalles':'camara 32 mpx - 32 gb ram'},

    {'id':3,'nombre':'motorola razr 50 ultra','categoria':'motorola','precio':350000,'cantidad':5,'img':'../img/mog51.png','detalles':'camara 8 mpx 64 gb ram'}
]




export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(lista), 1000); // Simula un retraso de 1 segundo
    });
};

export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        const product = lista.find((item) => item.id === parseInt(id));
        setTimeout(() => {
            product ? resolve(product) : reject(new Error("Producto no encontrado"));
        }, 1000);
    });
};

export const getProductsByCategory = (categoria) => {
    return new Promise((resolve, reject) => {
        const products = lista.filter(
            (item) => item.categoria.toLowerCase() === categoria.toLowerCase()
        );
        setTimeout(() => resolve(products), 1000);
    });
};

export default lista