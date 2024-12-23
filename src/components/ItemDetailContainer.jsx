import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "./Data";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getProductById(itemId)
            .then((data) => setProduct(data))
            .catch((error) => console.error("Error al cargar producto:", error))
            .finally(() => setLoading(false));
    }, [itemId]);

    return (
        <div>
            {loading ? (
                <p>Cargando producto...</p>
            ) : product ? (


                <div>


                        <Card style={{ width: '18rem' }}>
                          <Card.Img variant="top" src={product.img} />
                          <Card.Body>
                            <Card.Title>{product.nombre}</Card.Title>
                            <h3>${product.precio}</h3>
                            <Card.Text>
                              {product.detalles}
                            </Card.Text>
                            <Link to={`/`} className="btn btnPrimary" >volver</Link>
                          </Card.Body>
                        </Card>
                </div>
            ) : (
                <p>Producto no encontrado</p>
            )}
        </div>
    );
};

export default ItemDetailContainer;