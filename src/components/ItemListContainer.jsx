import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "./Data";
import { Button, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import './ItemListContainer.css'

const ItemListContainer = () => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const fetchData = categoryId ? getProductsByCategory(categoryId) : getProducts();

        fetchData
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error al cargar productos:", error))
            .finally(() => setLoading(false));
    }, [categoryId]);

    return (
        <div>
            
            {loading ? (
                <p>Cargando productos...</p>
            ) : (
                <div className="contenedor">
                    {products.map((product) => (
                      <div key={product.id} >



                    <Card style={{ width: '18rem' }}>
                          <Card.Img variant="top" src={product.img} />
                          <Card.Body>
                            <Card.Title>{product.nombre}</Card.Title>
                            <h3>${product.precio}</h3>
                            <h4>Cantidad disponibles: {product.cantidad}</h4>
                            <Link to={`/item/${product.id}`} className="btn btnPrimary" >Detalles</Link>
                          </Card.Body>
                        </Card>
                        
                      </div>

                        
                    ))}
                </div>
            )}
        </div>
    );
};

export default ItemListContainer;